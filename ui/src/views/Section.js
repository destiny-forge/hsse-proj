import React, { useState, useEffect } from 'react';
import BatchService from '../services/BatchService';
import queryString from 'query-string';

const withSection = (WrappedComponent) => {
  const Section = ({ history, fetch, user }) => {
    const props = { history, fetch };
    const [batches, setBatches] = useState([]);
    const [status, setStatus] = useState('New Article');
    const Batch = BatchService({ fetch });
    const paths = history.location.pathname.split('/');

    const type = paths[1];
    const stage = paths[2];

    const parms = queryString.parse(history.location.search);
    const uid = parms['t'] || false;

    function fetchData(type, status) {
      Batch.list(type, stage, status)
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
      fetchData(type, status);
    }, [type, stage, uid]);

    const trackTab = (type, status) => {
      setStatus(status);
      if (type && status) {
        fetchData(type, status);
      }
    };

    return (
      <WrappedComponent
        trackTab={trackTab}
        batches={batches}
        type={type}
        status={status}
        reload={fetchData}
        stage={stage}
        user={user}
        {...props}
      />
    );
  };

  return Section;
};

export default withSection;
