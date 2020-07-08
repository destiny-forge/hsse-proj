import React, { useState, useEffect } from 'react';
import BatchService from '../../services/BatchService';

const withSection = (WrappedComponent) => {
  const Section = ({ history, fetch }) => {
    const props = { history, fetch };
    const [batches, setBatches] = useState([]);
    const Batch = BatchService({ fetch });
    const type = history.location.pathname.replace(/\//g, '');

    function fetchData(type, tab) {
      Batch.list(type, 'eligibility', tab)
        .then((res) => {
          if (res.success) {
            setBatches(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    useEffect(() => {
      fetchData(type, 'pending_assignment');
    });

    const trackTab = (type, tab) => {
      console.log('wtf');
      if (type && tab) {
        fetchData(type, tab);
      }
    };

    console.log(batches);

    return (
      <WrappedComponent trackTab={trackTab} batches={batches} {...props} />
    );
  };

  return Section;
};

export default withSection;
