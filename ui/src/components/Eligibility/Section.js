import React from 'react';
import ArticleService from '../../services/ArticleService';

const withSection = (WrappedComponent) => {
  class Section extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        articles: []
      }

      this.Article = ArticleService({ fetch: this.props.fetch });
    }

    componentDidMount() {
      const type = this.props.history.location.pathname.replace(/\//g, "");

      if (type) {
        this.Article.list(type, 'eligibility', 'pending_assignment')
          .then(res => {
            if (res.success) {
              this.setState({
                articles: res.data,
              });
            }
          })
          .catch(err => {
            console.log(err);
          }) 
      }
    }

    trackTab = (type, tab) => {
      if (type && tab) {
        this.Article.list(type, 'eligibility', tab)
          .then(res => {
            if (res.success) {
              this.setState({
                articles: res.data,
              });
            }
          })
          .catch(err => {
            console.log(err);
          })
      }
    }

    render() {
      return (
        <WrappedComponent
          trackTab={this.trackTab}
          articles={this.state.articles}
          {...this.props}
        />
      );
    }
  }

  return Section;
}

export default withSection;