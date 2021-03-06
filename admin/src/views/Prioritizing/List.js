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
    loadData();
  };

  const makeLive = (batchId) => {
    Prioritizing.makeLive(batchId);
    loadData();
  };

  const goLive = () => {
    Prioritizing.goLive();
  };

  useEffect(() => {
    loadData();
  }, [type]);

  const loadData = () => {
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
  };

  return (
    <div className="padding">
      <GoLiveList items={monthlyUpdates} onGoLive={goLive} />
      <WaitingList
        batches={waitingBatches}
        onAssign={assign}
        onMakeLive={makeLive}
      />
    </div>
  );
};

export default withRouter(withAuth(PrioritizingList));
