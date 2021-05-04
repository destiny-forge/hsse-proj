const prepare = require("./prepare");
const DateHelper = require("./date");

/**
 * Email: send monthly published articles
 */
module.exports = ({
  searchClient,
  subscriptionRepository,
  articleRepository,
  mailer,
}) => {
  const test = async (type, date, recipients) => {
    if (!type) {
      return {
        error: "A valid type is required",
      };
    }

    if (!date) {
      return {
        error: "A valid date is required",
      };
    }

    if (!recipients) {
      return {
        error: "A valid recipient list is required",
      };
    }

    try {
      let { year, month } = DateHelper.getYearMonth(date);

      const subscriptions = await subscriptionRepository.getSubscribers(
        type,
        recipients
      );

      subscriptions
        .map(({ email, subscriptions }) => {
          return { type, email, subscriptions };
        })
        .forEach(async (recipient) => {
          let html = await prepare(
            searchClient,
            articleRepository,
            recipient,
            date
          );

          let subject = "";
          switch (type) {
            case "sse":
              type = "Social";
              break;
            case "hse":
              type = "Health";
              break;
            case "cov":
              type = "COVID";
              break;
          }

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
