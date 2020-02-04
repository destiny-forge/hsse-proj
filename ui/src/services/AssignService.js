/*
 * Assign service
 */

const AssignService = ({ fetch }) => {
  const assign = async assignment => {
    const res = await fetch('/assign', {
      method: 'POST',
      body: JSON.stringify(assignment)
    });
    return Promise.resolve(res);
  };

  return {
    assign,
  };
};

export default AssignService;
