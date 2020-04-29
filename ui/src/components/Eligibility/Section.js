import React from 'react';
import BatchService from '../../services/BatchService';

const withSection = (WrappedComponent) => {
  class Section extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        batches: []
      }

      this.Batch = BatchService({ fetch: this.props.fetch });
    }

    componentDidMount() {
      const type = this.props.history.location.pathname.replace(/\//g, "");

      if (type) {
        this.Batch.list(type, 'eligibility', 'pending_assignment')
          .then(res => {
            if (res.success) {
              this.setState({
                batches: res.data,
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
        this.Batch.list(type, 'eligibility', tab)
          .then(res => {
            if (res.success) {
              this.setState({
                batches: res.data,
              });
            }
          })
          .catch(err => {
            console.log(err);
          })
      }
    }

    render() {
      console.log(this.state.batches);
      return (
        <WrappedComponent
          trackTab={this.trackTab}
          batches={this.state.batches}
          {...this.props}
        />
      );
    }
  }

  return Section;
}

export default withSection;