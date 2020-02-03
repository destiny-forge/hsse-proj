import React from 'react';
import ArticleService from '../../services/ArticleService';

const withSection = (WrappedComponent) => {
  class Section extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        articles: [],
        show: false,
      }

      this.Article = ArticleService({ fetch: this.props.fetch });
    }

    componentDidMount() {
      const type = this.props.history.location.pathname.replace(/\//g, "");

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

    showModal = () => {
      this.setState({ show: true });
    };

    hideModal = () => {
      this.setState({ show: false });
    };

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
          showModal={this.showModal}
          hideModal={this.hideModal}
          {...this.props}
        />
      );
    }
  }

  return Section;
}

export default withSection;