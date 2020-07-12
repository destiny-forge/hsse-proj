import React, { useState, useEffect } from 'react';
import BatchService from '../../services/BatchService';
import queryString from 'query-string';

const withSection = (WrappedComponent) => {
  const Section = ({ history, fetch }) => {
    const props = { history, fetch };
    const [batches, setBatches] = useState([]);
    const Batch = BatchService({ fetch });
    const type = history.location.pathname.replace(/\//g, '');

    const parms = queryString.parse(history.location.search);
    const uid = parms['t'] || false;

    function fetchData(type, tab) {
      Batch.list(type, 'eligibility', tab)
        .then((res) => {
          if (res.success) {
            console.log(res.data);
            setBatches(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    useEffect(() => {
      fetchData(type, 'pending_assignment');
    }, [type, uid]);

    const trackTab = (type, tab) => {
      if (type && tab) {
        fetchData(type, tab);
      }
    };

    return (
      <WrappedComponent trackTab={trackTab} batches={batches} {...props} />
    );
  };

  return Section;
};

export default withSection;
