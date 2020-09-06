import _ from 'lodash';
import React from 'react';

const Radio = (props) => {
  return (
    <React.Fragment>
      {_.map(props.radioValues, (val) => (
        <label
          className={
            'btn btn-radio mr-1' + (props.value === val ? ' active' : '')
          }
          key={val}
          onClick={() => props.handleChange(props.name, val)}
        >
          {val}
        </label>
      ))}
    </React.Fragment>
  );
};

export default Radio;
