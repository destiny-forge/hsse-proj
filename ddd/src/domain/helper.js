const { complement, compose, isNil, pickBy } = require('ramda');

const notNull = compose(complement(isNil));
/**
 * we need to remove undefined array means not required data.
 */
const cleanData = entity => pickBy(notNull, entity);

const cleanMongoId = entity => {
  if (entity && entity._id) {
    entity._id = entity._id.toString();
  }
  return entity;
};

module.exports = {
  cleanData,
  cleanMongoId
};
