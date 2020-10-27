import React from 'react';
import { withRouter } from 'react-router-dom';
import withAuth from '../withAuth';
import ArticleService from '../../services/ArticleService';
import TranslatingService from '../../services/TranslatingService';
import List from './List';
import { toast } from 'react-toastify';
import { LanguageConsumer } from '../../components/molecules/Language';
import 'react-toastify/dist/ReactToastify.min.css';

class PresentationDetails extends React.Component {
  constructor(props) {
    super(props);

    const { type } = this.props.match.params;

    this.state = {
      type,
      articles: [],
      priority: 'high',
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Translating = TranslatingService({ fetch: this.props.fetch });
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleRadio(language, priority) {
    const { type } = this.state;
    this.setState({ priority });
    console.log(language, priority);
    this.search(type, language, priority);
  }

  handleDocType(documentType) {
    const { type, filter } = this.state;
    this.setState({ documentType });
    this.searchByDocType(type, filter, documentType);
  }

  search(type, language, priority) {
    this.Translating.list(type, language, priority).then((res) => {
      if (res.data != null) {
        const articles = res.data;
        this.setState({ articles });
      }
    });
  }

  render() {
    const { priority, articles } = this.state;
    return (
      <LanguageConsumer>
        {({ language }) => (
          <div className="padding">
            <div className="box">
              <div className="box-body">
                <div>
                  <div className="row">
                    <div className="col-sm-10">
                      Select articles to list:
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filterOptions"
                            value="all"
                            checked={priority === 'high'}
                            onChange={() => this.handleRadio(language, 'high')}
                          />{' '}
                          High priority
                        </label>
                      </div>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filterOptions"
                            value="only"
                            checked={priority === 'low'}
                            onChange={() => this.handleRadio(language, 'low')}
                          />{' '}
                          Low priority
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {articles && articles.length > 0 && (
              <div className="box">
                <div className="box-body">
                  <List
                    articles={articles}
                    language={language}
                    onUpdate={console.log}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </LanguageConsumer>
    );
  }
}

export default withRouter(withAuth(PresentationDetails));
