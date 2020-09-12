const getAssignmentHeader = (role, stage) => {
  let text = '';
  switch (stage) {
    case 'eligibility':
      text = 'filterer';
      break;
    case 'appraisal':
      text = 'appraiser';
      break;
    case 'studies':
      role = 'Linker';
      text = '';
      break;
    default:
      text = '';
  }
  return `${role} ${text}`;
};

export default ({ role, stage }) => getAssignmentHeader(role, stage);
