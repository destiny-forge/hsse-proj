const hse_filters = require("./hse_flattened_keys");
const sse_filters = require("./sse_flattened_keys");

export default {
  hse: { filters: hse_filters },
  sse: { filters: sse_filters },
};
