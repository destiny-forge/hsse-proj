import React from 'react';
import _ from 'lodash';

/* Implement custom hook with if/elseif/else to set the action result to render
function useAssignmentStatus() {
  const [assigned, setAssigned] = useState(false);
  const [email, setEmail] = useState('');
  const [canAssign, setCanAssign] = useState(false);
}
*/

const isAssignedAs = (user, stage, role) => {
  return !_.isUndefined(stage[role]) && stage[role].email === user.email;
};

const assign = (role, articleId, action) => {
  const msg = 'Are you sure you want to assign this batch to your list?';
  if (window.confirm(msg)) action(role, articleId);
};

const AssignButton = (action) => {
  return (
    <button className="md-btn md-flat mb-2 w-xs text-success" onClick={action}>
      Assign
    </button>
  );
};

const getAction = (user, stage, role, articleId, action) => {
  const isAssigned = !_.isUndefined(stage[role]);
  const otherRole = role === 'senior' ? 'junior' : 'senior';
  const canAssign = !isAssignedAs(user, stage, otherRole);
  const doAssign = () => assign(role, articleId, action);

  const assignAction = canAssign ? <AssignButton action={doAssign} /> : null;

  return isAssigned ? stage[role].email : assignAction;
};

export default ({ user, stage, role, articleId, action }) =>
  getAction(user, stage, role, articleId, action);
