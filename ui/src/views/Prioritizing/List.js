import React, { useState, useEffect } from 'react';
import withAuth from '../withAuth';
import { withRouter } from 'react-router';
import PrioritizingService from '../../services/PrioritizingService';
//import BatchService from '../../services/BatchService';
import GoLiveList from './GoLiveList';
import WaitingList from './WaitingList';
//import { toast } from 'react-toastify';

const PrioritizingList = ({ fetch, match }) => {
  const [monthlyUpdates, setMonthlyUpdates] = useState([]);
  const [waitingBatches, setWaitingBatches] = useState([]);

  const Prioritizing = PrioritizingService({ fetch });
  //const Batch = BatchService({ fetch });
  const { type } = match.params;

  useEffect(() => {
    Prioritizing.list(type)
      .then((res) => {
        if (res.success) {
          setMonthlyUpdates(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Batch.list(type)
    // .then((res) => {
    //   if (res.success) {
    //     setBatches(res.data);
    //   }
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  });

  return (
    <div className="padding">
      <GoLiveList items={monthlyUpdates} />
      <WaitingList items={waitingBatches} />
    </div>
  );
};

export default withRouter(withAuth(PrioritizingList));
