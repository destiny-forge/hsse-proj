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
          console.log("res data ", res.data);
          this.setState({
            appraisals: res.data,
          });
        }
      })
      .catch(err => {
        console.log(err);
      }) 
  }

  render() {
    return (
      <div className="box">
        <div className="table-responsive">
          <table className="table table-striped b-t">
            <thead>
              <tr>
                <th>Appraisal Id</th>
                <th>Title</th>
                <th>Authors</th>
                <th>My Status</th>
                <th>Junior Appraiser</th>
                <th>Senior Appraiser</th>
                <th>Appraisal Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.appraisals && this.state.appraisals.map(appraisal => (
                  <tr key={Math.random()}>
                    <td>{appraisal._id}</td>
                    <td>{appraisal.title}</td>
                    <td>{appraisal.authors}</td>
                    <td>TBD</td>
                    <td>
                      TODO
                    </td>
                    <td>
                      TODO
                    </td>
                    <td>
                      TODO
                    </td>
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