const ObjectID = require("mongodb").ObjectID;

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

  const findByBatchAndRefTypes = async (batchId, refTypes) => {
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

    const matchRefType = {
      $match: {
        ["batches.0.referenceType"]: { $in: refTypes },
      },
    };

    const aggregates = [matchBatch, join, matchRefType];

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

  const aggregate = async (type, stage, status, refTypes) => {
    const filters = Array.isArray(status) ? { $in: status } : status;

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
      },
    };

    const group = {
      $group: {
        _id: "$batchId",
        batch: { $first: "$batch" },
        total: { $sum: 1 },
        in_progress: {
          $sum: {
            $cond: [{ $eq: [`$stages.${stage}.status`, "in_progress"] }, 1, 0],
          },
        },
        complete: {
          $sum: {
            $cond: [{ $eq: [`$stages.${stage}.status`, "complete"] }, 1, 0],
          },
        },
        created: {
          $sum: {
            $cond: [{ $ne: [`$stages.${stage}.status`, "complete"] }, 1, 0],
          },
        },
        batchName: { $first: "$batchName" },
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
      },
    };

    const sort = { $sort: { "batch.uploaded": -1 } };

    let aggregates = [lookup, match, group, project, sort];

    if (refTypes) {
      const refMatch = {
        $match: {
          ["batches.0.referenceType"]: { $in: refTypes },
        },
      };
      aggregates = [match, lookup, unwind, refMatch, group, project, sort];
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
    const { articleId, stage, type, user, status } = assignment;
    const assign = {
      ...user,
      status: "In Progress",
    };
    try {
      const fields = {
        [`stages.${stage}.${type}`]: assign,
        [`stages.${stage}.status`]: status,
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
    const collection = database.get().collection("articles");
    collection.updateMany(
      { stages: { $exists: false } },
      {
        $set: {
          stages: {
            eligibility: { status: "pending_assignment" },
            studies: { status: "pending_assignment" },
            appraisals: { status: "pending_assignment" },
            prioritizing: { status: "pending_assignment" },
            translations: { status: "pending_assignment" },
          },
        },
      },
      { multi: true, upsert: true }
    );
    collection.updateMany(
      { status: { $exists: false } },
      {
        $set: {
          status: "created",
        },
      },
      { multi: true, upsert: true }
    );
    collection.updateMany(
      { batchName: { $exists: false } },
      {
        $set: {
          batchName: "",
        },
      },
      { multi: true, upsert: true }
    );
  };

  return {
    create,
    getAll,
    findById,
    findByType,
    findOne,
    find,
    assign,
    update,
    updateStage,
    updateStageCoderStatus,
    findByBatch,
    findByBatchAndRefTypes,
    aggregate,
    createIndexes,
    migrate,
  };
};
