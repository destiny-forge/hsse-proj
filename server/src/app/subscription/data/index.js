const hse_filters = require("./hse_flattened_keys");
const sse_filters = require("./sse_flattened_keys");

module.exports = {
  hse: { filters: hse_filters },
  sse: { filters: sse_filters },
};
