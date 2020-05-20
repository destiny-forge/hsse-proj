import _ from 'lodash';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import AppraisalService from '../../services/AppraisalService';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Appraisals extends React.Component {

  constructor(props) {
    super(props);

    this.state = { appraisals: [] }
    this.Appraisal = AppraisalService({ fetch: this.props.fetch });
  }

  componentDidMount() {
    const { type } = this.props.match.params;

    this.Appraisal.list(type, 'pending_assignment')
      .then(res => {
        if (res.success) {
          this.setState({
            appraisals: res.data,
          });
        }
      })
      .catch(err => {
        console.log(err);
      }) 
  }

  percentNeeding(total, complete) {
    return Math.round(100 * complete) / total;
  }

  render() {
    return (
      <div className="box">
        <div className="table-responsive">
          <table className="table table-striped b-t">
            <thead>
              <tr>
                <th>Batch name</th>
                <th># in batch</th>
                <th># needing AMSTAR(%)</th>
                <th># AMSTAR in progress(%)</th>
                <th># AMSTAR complete(%)</th>
                <th>Coders assigned to batch</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.appraisals && this.state.appraisals.map(appraisal => (
                  <tr key={Math.random()}>
                    <td>{appraisal.name}</td>
                    <td>{appraisal.total}%</td>
                    <td>{Math.round(this.percentNeeding(appraisal.total, appraisal.complete))}%</td>
                    <td>{appraisal.in_progress}%</td>
                    <td>{appraisal.complete}%</td>
                    <td>
                      TODO
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default withRouter(withAuth(Appraisals));