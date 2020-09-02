import React from 'react';
import { Link } from 'react-router-dom';

const BatchesTable = ({ stage, batches }) => {
  console.log(batches);
  return (
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
              <th># coding in progress(%)</th>
              <th># coding complete(%)</th>
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
                  <td>{batch.batch[0].referenceType || 'N/A'}</td>
                  <td>
                    <Link to={`/batch/articles/${stage}/${batch._id}`}>
                      {batch.name}
                    </Link>
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
  );
};

export default BatchesTable;
