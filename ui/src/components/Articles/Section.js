import React from 'react';

const withSection = (WrappedComponent) => {
  class Section extends React.Component {

    trackTab = (type, tab) => {
      this.setState({
        type,
        tab
      }, () => console.log(this.state));
    }

    render() {
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