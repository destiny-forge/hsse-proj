import React from 'react';
import { withRouter } from 'react-router-dom';
import withAuth from '../withAuth';
import ArticleService from '../../services/ArticleService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class PresentationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortId: null,
    };

    this.handleLoad = this.handleLoad.bind(this);
    this.Article = ArticleService({ fetch: this.props.fetch });
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleLoad() {
    const { type } = this.props.match.params;
    const { shortId } = this.state;

    this.Article.get(shortId).then((res) => {
      if (res.data != null) {
        this.props.history.replace(`/${type}/presentation/${shortId}`);
      } else {
        this.notifyNotFound();
      }
    });
  }

  searchByDocType() {}

  searchByBatchDesc() {}

  notifyNotFound = () => toast.error('Article with Ref ID not found');

  render() {
    return (
      <div className="padding">
        <div className="box">
          <div className="box-body">
            <div>
              Enter the Ref ID of the article you would like to edit
              <div className="form-inline">
                <input
                  name="shortId"
                  className="form-control"
                  onChange={this.handleChange}
                />{' '}
                &nbsp;
                <button
                  type="submit"
                  onClick={this.handleLoad}
                  className="btn primary"
                >
                  Load
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(PresentationDetails));
