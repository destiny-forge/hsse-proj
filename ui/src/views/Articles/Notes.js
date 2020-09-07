import React, { Component } from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import NotesService from '../../services/NotesService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }

    this.Note = NotesService({ fetch: this.props.fetch });
  }

  componentDidMount() {
    this.setState({
      articles: this.props.history.location.state.articles
    });
  }

  notifyChangesSaved = () => toast.success("Changes saved.") 
  notifyDone = () => toast.info("Notes complete.") 

  compareChanges = (oldArray, newArray) => {
    // Compare the old article props array to the new articles
    // array for any change and save the changes only so we don't
    // iterate over the entire array each time as it can be quite expensive
    let changes, i, item, j, len;
    if (JSON.stringify(oldArray) === JSON.stringify(newArray)) return false;

    changes = [];
    for (i = j = 0, len = newArray.length; j < len; i = ++j) {
      item = newArray[i];
      if (JSON.stringify(item) !== JSON.stringify(oldArray[i])) {
        changes.push(item);
      }
    }
    return changes;
  };

  handleChange = idx => evt => {
    const newArticleData = this.state.articles.map((article, sidx) => {
      if (idx !== sidx) return article;
      return { ...article, notes: evt.target.value };
    });

    this.setState({ articles: newArticleData });
  }

  handleDone = (e) => {
    e.preventDefault();
    this.notifyDone();
    this.props.history.replace('/sse');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    const originalArticles = this.props.history.location.state.articles;
    const updatedArticles = this.state.articles;

    const changes = this.compareChanges(
      originalArticles, 
      updatedArticles
    );

    if (changes.length) {    
      this.Note.create(changes)
        .then(res => {
          this.notifyChangesSaved();
        })
        .catch(err => {
          console.log(err);
        })
      }
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="padding">
        <div className="box p-md-4">
          {
            articles && articles.map((article, idx) => (
              <ul className="list" key={idx}>
                <li className="list-item">
                  <div className="clear">
                    <h5 className="text-md">{article.title}</h5>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Notes</label>
                      <div className="col-sm-12">
                        <textarea 
                          value={article.notes}
                          className="form-control"
                          onChange={this.handleChange(idx)}
                          rows="5" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            ))
          }
          <button
            type="submit"
            className="btn success mr-3"
            onClick={this.handleSubmit}>
              Save Changes
          </button>

          <button
            type="submit"
            className="btn primary"
            onClick={this.handleDone}>
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(Notes));