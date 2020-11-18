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
  const { type } = match.params;

  const assign = (batchId) => {
    Prioritizing.assign(batchId);
  };

  const makeLive = (batchId) => {
    Prioritizing.goLive(batchId);
  };

  useEffect(() => {
    Prioritizing.listGoLive(type)
      .then((res) => {
        if (res.success) {
          setMonthlyUpdates(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    Prioritizing.listWaiting(type)
      .then((res) => {
        if (res.success) {
          setWaitingBatches(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [type]);

  return (
    <div className="padding">
      <GoLiveList items={monthlyUpdates} />
      <WaitingList
        batches={waitingBatches}
        onAssign={assign}
        onMakeLive={makeLive}
      />
    </div>
  );
};

export default withRouter(withAuth(PrioritizingList));
