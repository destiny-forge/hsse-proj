import React, { useState, useEffect } from 'react';
import BatchService from '../../services/BatchService';
import queryString from 'query-string';

const withSection = (WrappedComponent) => {
  const Section = ({ history, fetch }) => {
    const props = { history, fetch };
    const [batches, setBatches] = useState([]);
    const Batch = BatchService({ fetch });
    const paths = history.location.pathname.split('/');

    const type = paths[1];
    const stage = paths[2];

    const parms = queryString.parse(history.location.search);
    const uid = parms['t'] || false;

    function fetchData(type, tab) {
      Batch.list(type, stage, tab)
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
      fetchData(type, 'New Article');
    }, [type, uid]);

    const trackTab = (type, tab) => {
      if (type && tab) {
        fetchData(type, tab);
      }
    };

    return (
      <WrappedComponent
        trackTab={trackTab}
        batches={batches}
        type={type}
        stage={stage}
        {...props}
      />
    );
  };

  return Section;
};

export default withSection;
