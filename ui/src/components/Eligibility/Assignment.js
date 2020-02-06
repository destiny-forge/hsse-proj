import _ from 'lodash';
import React from 'react';

class Assignment extends React.Component {
  showEmail = () => {
    const {
      article,
      type
    } = this.props;
    
    const { eligibility } = article.stages;

    if (eligibility.status === 'half_assigned') {
      if (!_.isUndefined(eligibility[type])) {
        return eligibility[type].email;
      } 
    }

    if (eligibility.status === 'assigned') {
      if (!_.isUndefined(eligibility[type])) {
        return eligibility[type].email;
      }
    }
  }

  render() {
    const { 
      showModal,
      toTitleCase,
      type
    } = this.props;

    return (
      <React.Fragment>
        {
          this.showEmail() || 
            <button
              className="md-btn md-flat mb-2 w-xs text-success"
              onClick={() => showModal(toTitleCase(type))}>
              Assign
            </button>
        }
      </React.Fragment>
    )
  }
}

export default Assignment;