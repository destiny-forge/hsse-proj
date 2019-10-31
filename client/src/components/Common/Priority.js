import React from 'react';
import PropTypes from 'prop-types';

const Priority = props => {

  const css = () => {
    switch (props.priority) {
      case 'LOW':
        return 'badge-success';
      case 'MODERATE':
        return 'badge-warning';
      case 'HIGH':
        return 'badge-danger';
      default:
        return 'badge-success';
    }  
  }

  return (
    <td className="text-center">
      <span className={`badge ${css}`}>
        {props.priority}
      </span>
    </td>    
  )
}

Priority.propTypes = {
  priority: PropTypes.string
}

export default Priority;