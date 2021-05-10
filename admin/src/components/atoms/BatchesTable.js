import React from 'react';
import { Link } from 'react-router-dom';
import perms from '../../utils/permissions';

const BatchesTable = ({ user, title, stage, batches, onPrioritize }) => {
  const actionText = () => {
    let text = '';
    switch (stage) {
      case 'eligibility':
        text = 'filtering';
        break;
      case 'appraisals':
        text = 'coding';
        break;
      case 'studies':
        text = 'linking';
        break;
      default:
        break;
    }
    return text;
  };

  const priority = title.toLowerCase().indexOf('high') >= 0 ? 'low' : 'high';
  const priorityText =
    priority === 'high' ? 'Set high priority' : 'Set low priority';

  return (
    <div>
      <h4>{title}</h4>
      <div className="box">
        <div className="table-responsive">
          <table className="table table-striped b-t">
            <thead>
              <tr>
                <th style={{ width: '20px' }}>
                  <label className="ui-check m-0">
                    <input type="checkbox" />
                    <i></i>
                  </label>
                </th>
                <th>Batch Type</th>
                <th>Batch Name</th>
                <th># in Batch</th>
                <th># {actionText()} in progress(%)</th>
                <th># {actionText()} complete(%)</th>
              </tr>
            </thead>
            <tbody>
              {batches &&
                batches.map((batch) => (
                  <tr key={Math.random()}>
                    <td>
                      <label className="ui-check m-0">
                        <input type="checkbox" name="post[]" />
                        <i className="dark-white"></i>
                      </label>
                    </td>
                    <td>
                      {Array.isArray(batch.batch)
                        ? batch.batch[0].referenceType
                        : batch.batch.referenceType || 'N/A'}
                    </td>
                    <td>
                      <Link to={`/admin/batch/articles/${stage}/${batch._id}`}>
                        {batch.name}
                      </Link>
                      <br />
                      {perms.can_prioritize(user) && (
                        <button
                          onClick={() => onPrioritize(batch._id, priority)}
                        >
                          {priorityText}
                        </button>
                      )}
                    </td>
                    <td>{batch.total}</td>
                    <td>
                      {Math.round((batch.in_progress / batch.total) * 100)}%
                    </td>
                    <td>{Math.round((batch.complete / batch.total) * 100)}%</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BatchesTable;
