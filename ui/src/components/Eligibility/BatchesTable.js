import React from 'react';
import BatchService from '../../services/BatchService';
import { Link } from 'react-router-dom';

class BatchesTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showJunior: false,
      showSenior: false,
    };
    this.Batch = BatchService({ fetch: this.props.fetch });
  }

  render() {
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
              {this.props.batches &&
                this.props.batches.map((batch) => (
                  <tr key={Math.random()}>
                    <td>
                      <label className="ui-check m-0">
                        <input type="checkbox" name="post[]" />
                        <i className="dark-white"></i>
                      </label>
                    </td>
                    <td>{batch.referenceType || 'N/A'}</td>
                    <td>
                      <Link to={`/batch/articles/${batch._id}`}>
                        {batch.name}
                      </Link>
                    </td>
                    <td>{batch.total}</td>
                    <td>{batch.in_progress}%</td>
                    <td>{batch.complete}%</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BatchesTable;
