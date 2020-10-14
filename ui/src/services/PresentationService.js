/*
 * Presentation service for interacting with the API backend
 */

const PresentationService = ({ fetch }) => {
  const listByDocType = async (type, documentType, filter) => {
    const params = {
      method: 'GET',
      data: {
        type,
        documentType,
        filter,
      },
    };
    const res = await fetch('/presentation/list/doc-type', params);
    return Promise.resolve(res);
  };

  return {
    listByDocType,
  };
};

export default PresentationService;
