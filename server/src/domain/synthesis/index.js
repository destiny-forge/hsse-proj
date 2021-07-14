const t = require("tcomb");

const Synthesis = t.struct(
  {
    _id: t.maybe(t.String),
    refId: t.maybe(t.String),
  },
  {
    defaultProps: {
      stages: {
        a: { status: "New article" },
        b: { status: "New article" },
        c: { status: "New article" },
      },
      producer: {},
      filters: [],
      questions: [],
      countryLinks: {},
      titles: {},
    },
  }
);

module.exports = Synthesis;
