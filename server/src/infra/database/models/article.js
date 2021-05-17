const ObjectID = require("mongodb").ObjectID;
const moment = require("moment");

module.exports = ({ database }) => {
  const create = async (article) => {
    try {
      const results = await database
        .get()
        .collection("articles")
        .insertOne(article);
      return results.ops[0];
    } catch (e) {
      throw e;
    }
  };

  const getAll = async () => {
    try {
      const results = await database
        .get()
        .collection("articles")
        .find()
        .toArray();
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findByType = async (type) => {
    try {
      return await database
        .get()
        .collection("articles")
        .find({ type: { $eq: type } })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const find = async (type, stage, status) => {
    const filters = Array.isArray(status) ? { $in: status } : status;
    try {
      return await database
        .get()
        .collection("articles")
        .find({ type: { $eq: type }, [`stages.${stage}.status`]: filters })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const findByDocType = async (type, documentType, status) => {
    const filters = Array.isArray(status) ? { $in: status } : status;
    try {
      return await database
        .get()
        .collection("articles")
        .find({
          type: { $eq: type },
          documentType: { $eq: documentType },
          status: filters,
        })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const findByLanguage = async (type, language, priority, status) => {
    const filters = Array.isArray(status) ? { $in: status } : status;
    try {
      return await database
        .get()
        .collection("articles")
        .find({
          type: { $eq: type },
          priority: { $eq: priority },
          ["stages.eligibility.status"]: "Complete",
          $or: [
            { [`titles.${language}`]: { $exists: false } },
            { [`titles.${language}.approved`]: false },
          ],
        })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const findByBatch = async (batchId, stage, status) => {
    const filters = Array.isArray(status) ? { $in: status } : status;
    try {
      return await database
        .get()
        .collection("articles")
        .find({
          batchId: { $eq: ObjectID(batchId) },
          [`stages.${stage}.status`]: filters,
        })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const findByShortIds = async (ids) => {
    try {
      return await database
        .get()
        .collection("articles")
        .find({ shortId: { $in: ids } })
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const findByBatchAndDocTypes = async (batchId, docTypes, optMatches) => {
    const join = {
      $lookup: {
        from: "batches",
        localField: "batchId",
        foreignField: "_id",
        as: "batches",
      },
    };

    const matchBatch = {
      $match: {
        batchId: { $eq: ObjectID(batchId) },
      },
    };

    const matchDocType = {
      $match: {
        documentType: { $in: docTypes },
      },
    };

    let aggregates = [matchBatch, join, matchDocType];

    if (optMatches.length > 0) {
      let matches = { $match: {} };
      optMatches.forEach((item) => {
        const key = Object.keys(item)[0];
        const value = item[key];
        matches["$match"][key] = value;
      });
      aggregates = aggregates.concat(matches);
    }

    try {
      return await database
        .get()
        .collection("articles")
        .aggregate(aggregates)
        .toArray();
    } catch (e) {
      throw e;
    }
  };

  const aggregate = async (type, stage, status, docTypes, optMatches) => {
    const filters = Array.isArray(status) ? { $in: status } : status;
    const complicated = status.indexOf("Complicated") >= 0;

    const lookup = {
      $lookup: {
        from: "batches",
        localField: "batchId",
        foreignField: "_id",
        as: "batch",
      },
    };

    const unwind = {
      $unwind: { path: "$batch", preserveNullAndEmptyArrays: true },
    };

    const match = {
      $match: {
        batchId: { $ne: null },
        type: { $eq: type },
        [`stages.${stage}.status`]: filters,
        complicated: { $eq: complicated },
      },
    };

    if (optMatches.length > 0) {
      optMatches.forEach((item) => {
        const key = Object.keys(item)[0];
        const value = item[key];
        match["$match"][key] = value;
      });
    }

    const group = {
      $group: {
        _id: "$batchId",
        batch: { $first: "$batch" },
        total: { $sum: 1 },
        in_progress: {
          $sum: {
            $cond: [{ $eq: [`$stages.${stage}.status`, "In Progress"] }, 1, 0],
          },
        },
        complete: {
          $sum: {
            $cond: [{ $eq: [`$stages.${stage}.status`, "Complete"] }, 1, 0],
          },
        },
        created: {
          $sum: {
            $cond: [{ $ne: [`$stages.${stage}.status`, "Complete"] }, 1, 0],
          },
        },
        batchName: { $first: "$batchName" },
        priority: { $first: "$batch.priority" },
      },
    };

    const project = {
      $project: {
        _id: "$_id",
        batch: 1,
        total: "$total",
        in_progress: "$in_progress",
        complete: "$complete",
        created: "$created",
        name: "$batchName",
        priority: "$priority",
        remaining: { $subtract: ["$total", "$complete"] },
      },
    };

    const sort = { $sort: { "batch.uploaded": -1 } };
    const exclude = { $match: { remaining: { $gt: 0 } } };

    let aggregates = [lookup, match, group, project, exclude, sort];

    if (docTypes) {
      const matchDocType = {
        $match: {
          documentType: { $in: docTypes },
        },
      };
      aggregates = [
        match,
        lookup,
        unwind,
        matchDocType,
        group,
        project,
        exclude,
        sort,
      ];
    }

    try {
      const results = await database
        .get()
        .collection("articles")
        .aggregate(aggregates)
        .toArray();
      //console.log(results);
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findByMonthlyUpdate = async (type, date, filters) => {
    const query = {
      live: { $eq: true },
      type: { $eq: type },
      monthlyUpdateDate: { $eq: date },
    };

    if (filters && filters.length > 0) {
      query.filters = { $in: filters };
    }

    // @TODO - we could move the projections into the db query
    // using aggregations but for now we'll do it in the APP code
    // since it's different for both HSE/SSE

    try {
      const results = await database
        .get()
        .collection("articles")
        .find(query)
        .toArray();
      return results;
    } catch (e) {
      throw e;
    }
  };

  const aggregateMonthlyUpdates = async (type) => {
    const languages = ["ar", "ch", "fr", "pt", "ru", "es"];
    const match = {
      $match: {
        type: { $eq: type },
        monthlyUpdateDate: { $ne: "" },
        live: { $eq: false },
      },
    };
    const group = {
      $group: {
        _id: "$monthlyUpdateDate",
        total: { $sum: 1 },
        needing_data: {
          $sum: {
            $cond: [{ $eq: ["$status", "In Progress"] }, 1, 0],
          },
        },
      },
    };

    languages.forEach((language) => {
      group.$group[`needing_${language}`] = {
        $sum: {
          $cond: [
            {
              $or: [
                { $eq: [{ $type: `$titles.${language}` }, "missing"] },
                { $eq: [`$titles.${language}.approved`, false] },
              ],
            },
            1,
            0,
          ],
        },
      };
    });

    const project = {
      $project: {
        _id: "$_id",
        total: "$total",
        needing_data: "$needing_data",
        needing_arabic: "$needing_ar",
        needing_chinese: "$needing_ch",
        needing_french: "$needing_fr",
        needing_portugese: "$needing_pt",
        needing_russian: "$needing_ru",
        needing_spanish: "$needing_es",
      },
    };

    let aggregates = [match, group, project];

    try {
      const results = await database
        .get()
        .collection("articles")
        .aggregate(aggregates)
        .toArray();
      return results;
    } catch (e) {
      throw e;
    }
  };

  const aggregateBatchMonthlyUpdates = async (type) => {
    const languages = ["ar", "ch", "fr", "pt", "ru", "es"];
    const match = {
      $match: {
        type: { $eq: type },
        monthlyUpdateDate: { $eq: "" },
        ["stages.eligibility.status"]: "Complete",
        ["stages.appraisals.status"]: "Complete",
      },
    };
    const group = {
      $group: {
        _id: "$batchId",
        total: { $sum: 1 },
        live: {
          $sum: {
            $cond: [{ $eq: ["$live", true] }, 1, 0],
          },
        },
        needing_data: {
          $sum: {
            $cond: [{ $eq: ["$status", "In Progress"] }, 1, 0],
          },
        },
      },
    };

    languages.forEach((language) => {
      group.$group[`needing_${language}`] = {
        $sum: {
          $cond: [
            {
              $or: [
                { $eq: [{ $type: `$titles.${language}` }, "missing"] },
                { $eq: [`$titles.${language}.approved`, false] },
              ],
            },
            1,
            0,
          ],
        },
      };
    });

    const project = {
      $project: {
        _id: "$_id",
        total: "$total",
        live: "$live",
        needing_data: "$needing_data",
        needing_arabic: "$needing_ar",
        needing_chinese: "$needing_ch",
        needing_french: "$needing_fr",
        needing_portugese: "$needing_pt",
        needing_russian: "$needing_ru",
        needing_spanish: "$needing_es",
      },
    };

    let aggregates = [match, group, project];

    try {
      const results = await database
        .get()
        .collection("articles")
        .aggregate(aggregates)
        .toArray();
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findById = async (id) => {
    try {
      if (!ObjectID.isValid(id)) throw "Invalid MongoDB ID.";
      const results = await database
        .get()
        .collection("articles")
        .findOne(ObjectID(id));
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findByLegacyId = async (id, type) => {
    try {
      const results = await database
        .get()
        .collection("articles")
        .findOne({ legacyId: { $eq: id }, type: { $eq: type } });
      return results;
    } catch (e) {
      throw e;
    }
  };

  const findOne = async (query) => {
    try {
      const results = await database
        .get()
        .collection("articles")
        .findOne(query);
      return results;
    } catch (e) {
      throw e;
    }
  };

  const assign = async (assignment) => {
    const { articleId, batchId, stage, type, user, status } = assignment;
    const assign = {
      ...user,
      status: "In Progress",
    };
    try {
      const fields = {
        [`stages.${stage}.${type}`]: assign,
        [`stages.${stage}.status`]: status,
      };

      let key = batchId ? "batchId" : "_id";
      let id = batchId ? batchId : articleId;

      const cmdResult = await database
        .get()
        .collection("articles")
        .updateOne({ [key]: { $eq: ObjectID(id) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const assignMonthlyUpdate = async (batchId, monthlyUpdateDate) => {
    try {
      const cmdResult = await database
        .get()
        .collection("articles")
        .updateMany(
          { batchId: { $eq: ObjectID(batchId) } },
          { $set: { monthlyUpdateDate, priority: "high" } }
        );
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const makeLiveWithoutMonthlyUpdate = async (batchId) => {
    try {
      const cmdResult = await database
        .get()
        .collection("articles")
        .updateMany(
          { batchId: { $eq: ObjectID(batchId) } },
          { $set: { live: true } }
        );
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const goLive = async (monthlyUpdateDate) => {
    try {
      const cmdResult = await database
        .get()
        .collection("articles")
        .updateMany(
          { monthlyUpdateDate: { $eq: monthlyUpdateDate } },
          { $set: { live: true } }
        );
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const prioritize = async (assignment) => {
    const { batchId, priority } = assignment;
    try {
      const cmdResult = await database
        .get()
        .collection("articles")
        .updateMany(
          { batchId: { $eq: ObjectID(batchId) } },
          { $set: { priority: priority } }
        );
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const updateStage = async (articleId, stage, kvp) => {
    try {
      const fields = {};

      for (const [key, value] of Object.entries(kvp)) {
        fields[`stages.${stage}.${key}`] = value;
      }

      const cmdResult = await database
        .get()
        .collection("articles")
        .updateOne({ _id: { $eq: ObjectID(articleId) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const updateStageCoderStatus = async (articleId, stage, role, status) => {
    try {
      const fields = {};
      fields[`stages.${stage}.${role}.status`] = status;

      const cmdResult = await database
        .get()
        .collection("articles")
        .updateOne({ _id: { $eq: ObjectID(articleId) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const updateTranslation = async (
    articleId,
    language,
    text,
    approved,
    approvedBy
  ) => {
    try {
      const key = `titles.${language}`;
      const fields = {
        [key]: {
          text,
          approved,
          approvedBy: approved ? ObjectID(approvedBy) : null,
        },
      };

      const cmdResult = await database
        .get()
        .collection("articles")
        .updateOne({ _id: { $eq: ObjectID(articleId) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const update = async (id, fields) => {
    try {
      const cmdResult = await database
        .get()
        .collection("articles")
        .updateOne({ _id: { $eq: ObjectID(id) } }, { $set: fields });
      const { result } = cmdResult.toJSON();
      return result;
    } catch (e) {
      throw e;
    }
  };

  const createIndexes = () => {
    const collection = database.get().collection("articles");
    collection.createIndex("type");
    collection.createIndex("stages.eligibility.status");
    collection.createIndex("stages.studies.status");
    collection.createIndex("stages.appraisals.status");
    collection.createIndex("stages.prioritizing.status");
    collection.createIndex("stages.translations.status");
    collection.createIndex("status");
    collection.createIndex("batchId");
  };

  const migrate = () => {
    // Sample migration - not currently needed
    // const collection = database.get().collection("articles");
    // collection.updateMany(
    //   { stages: { $exists: false } },
    //   {
    //     $set: {
    //       stages: {
    //         eligibility: { status: "New Article" },
    //         studies: { status: "New Article" },
    //         appraisals: { status: "New Article" },
    //       },
    //     },
    //   },
    //   { multi: true }
    // );
    // collection.updateMany(
    //   { status: { $exists: false } },
    //   {
    //     $set: {
    //       status: "New Article",
    //     },
    //   },
    //   { multi: true }
    // );
    // collection.updateMany(
    //   { batchName: { $exists: false } },
    //   {
    //     $set: {
    //       batchName: "",
    //     },
    //   },
    //   { multi: true }
    // );
  };

  return {
    create,
    getAll,
    findById,
    findByLegacyId,
    findByShortIds,
    findByType,
    findByDocType,
    findOne,
    find,
    assign,
    prioritize,
    update,
    updateStage,
    updateStageCoderStatus,
    updateTranslation,
    findByBatch,
    findByBatchAndDocTypes,
    findByLanguage,
    aggregate,
    aggregateMonthlyUpdates,
    aggregateBatchMonthlyUpdates,
    assignMonthlyUpdate,
    makeLiveWithoutMonthlyUpdate,
    goLive,
    createIndexes,
    migrate,
    findByMonthlyUpdate,
  };
};
