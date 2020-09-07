const getAssignmentHeader = (role, stage) => {
  let text = '';
  switch (stage) {
    case 'eligibility':
      text = 'filterer';
      break;
    case 'appraisal':
      text = 'appraiser';
      break;
    default:
      text = '';
  }
  return `${role} ${text}`;
};

export default ({ role, stage }) => getAssignmentHeader(role, stage);
