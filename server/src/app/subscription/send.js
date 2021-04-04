const prepare = require("./prepare");

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Email send monthly published articles
 */
module.exports = ({ articleRepository, subscriptionRepository, mailer }) => {
  const send = async (type, monthYear) => {
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

    try {
      let subscribers = subscriptionRepository.subscribers(type);
      let month = monthNames[parseInt(monthYear.split("-")[0]) - 1];
      let year = parseInt(monthYear.split("-"[1]));

      subscribers.forEach((subscriber) => {
        let html = prepare(articleRepository, subscriber);
        let subject = type === "sse" ? "Social" : "Health";
        subject += ` Systems Evidence Service - ${month} ${year}`;

        mailer.send({
          to: subscriber.email,
          subject,
          html,
        });
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    send,
  };
};
