/**
 * Batch list
 */
module.exports = ({ batchRepository }) => {
  const list = async _type => {
    try {
      return await batchRepository.getAll();
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    list
  };
};
