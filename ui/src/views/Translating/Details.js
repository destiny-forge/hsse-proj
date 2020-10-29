import React from 'react';
import { withRouter } from 'react-router-dom';
import withAuth from '../withAuth';
import ArticleService from '../../services/ArticleService';
import TranslatingService from '../../services/TranslatingService';
import List from './List';
import { LanguageConsumer } from '../../components/molecules/Language';

class PresentationDetails extends React.Component {
  constructor(props) {
    super(props);

    const { type } = this.props.match.params;

    this.state = {
      type,
      articles: [],
      priority: 'high',
      language: null,
    };

    this.Article = ArticleService({ fetch: this.props.fetch });
    this.Translating = TranslatingService({ fetch: this.props.fetch });
    this.updateTranslation = this.updateTranslation.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleRadio(language, priority) {
    this.setState({ priority });
    this.search(language);
  }

  search(language) {
    // we don't need to edit translations for english docs
    if (language !== 'en') {
      const { type, priority } = this.state;
      this.Translating.list(type, language, priority).then((res) => {
        if (res.data != null) {
          const articles = res.data;
          this.setState({ articles });
        }
      });
    }
  }

  updateTranslation(articleId, language, text, approved) {
    this.Translating.create(articleId, language, text, approved).then((res) => {
      if (res.data != null) {
        let articles = [...this.state.articles];

        if (!approved) {
          const article = articles.find((article) => article._id === articleId);

          if (article.titles.hasOwnProperty(language)) {
            article.titles[language].text = text;
          } else {
            article.titles = {
              ...article.titles,
              [language]: {
                text,
              },
            };
          }
        } else {
          articles = articles.filter((article) => article._id !== articleId);
        }

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

            <div className="box">
              <div className="box-body">
                <List
                  articles={articles}
                  language={language}
                  priority={priority}
                  onUpdate={this.updateTranslation}
                  onSearch={this.search}
                />
              </div>
            </div>
          </div>
        )}
      </LanguageConsumer>
    );
  }
}

export default withRouter(withAuth(PresentationDetails));
