const prepare = require("./prepare");
const DateHelper = require("./date");

/**
 * Email send monthly published articles
 */
module.exports = ({ articleRepository, mailer }) => {
  const test = async (type, monthYear, recipients) => {
    if (!type) {
      return {
        error: "A valid type is required",
      };
    }

    if (!monthYear) {
      return {
        error: "A valid monthYear is required",
      };
    }

    if (!recipients) {
      return {
        error: "A valid recipient list is required",
      };
    }

    try {
      let { month, year } = DateHelper.getMonthYear(monthYear);
      let filters = type === "hse" ? hse.filters : sse.filters;

      recipients
        .map((email) => {
          return { email, filters };
        })
        .forEach((recipient) => {
          let html = prepare(articleRepository, recipient, monthYear);
          let subject = type === "sse" ? "Social" : "Health";
          subject += ` Systems Evidence Service - ${month} ${year}`;

          mailer.send({
            to: recipient.email,
            subject,
            html,
          });
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    test,
  };
};
