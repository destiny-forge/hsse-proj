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
      this.Article.list('hse') // default to sse for now
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
      //console.log(this.props.history.location.pathname)
    }

    trackTab = (type, tab) => {
      if (type && tab) {
        console.log('type ', type);
        console.log('tab ', tab);
      }
    }

    render() {
      console.log(this.state.articles);
      return (
        <WrappedComponent
          trackTab={this.trackTab}
          {...this.props}
        />
      );
    }
  }

  return Section;
}

export default withSection;