import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import withAuth from '../withAuth';
import Select from 'react-select';
import SubscriptionService from '../../services/SubscriptionService';

const TEST_RECIPIENTS = [
  'eric@destinyforge.ca',
  // 'ciurea@mcmaster.ca',
  // 'fpgauvin@gmail.com',
  // 'moatka@mcmaster.ca',
  // 'lavisj@mcmaster.ca',
  // 'wilsom2@mcmaster.ca',
  // 'kaelanmoat@gmail.com',
  // 'mhfoptimalagingsearch@gmail.com',
  // 'mhfleadershipsearch@gmail.com',
  // 'mhfoptimizingcareresearch@gmail.com',
  // 'mhfchildhoodcancersearch@gmail.com',
  // 'mhfviolencesearch@gmail.com',
  // 'mhfpharmacistprescribingsearch@gmail.com',
];

const MONTHS = [...Array(12)].map((_, i) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return { label: months[i], value: i + 1 };
});

const YEAR = new Date().getFullYear();
const MONTH = new Date().getMonth() + 1;
const YEARS = [YEAR, YEAR - 1].map((y, _i) => {
  return { label: y, value: y };
});

const EmailManager = ({ fetch }) => {
  const Subscriptions = SubscriptionService({ fetch });
  const [recipients, setRecipients] = useState(TEST_RECIPIENTS.join(';'));
  const [year, setYear] = useState(YEAR);
  const [month, setMonth] = useState(MONTH);
  const handleRecipients = (e) => {
    setRecipients(e.target.value);
  };
  const handleMonth = (m) => {
    setMonth(m);
  };
  const handleYear = (y) => {
    setYear(y);
  };
  const sendTest = () => {
    Subscriptions.test('hse', recipients.split(';'));
  };
  const sendLive = () => {
    Subscriptions.send('hse');
  };
  const resend = () => {
    const date = `${year}-${(month + 1).toString().padStart(2, '0')}`;
    Subscriptions.resend('hse', date);
  };
  return (
    <div className="padding">
      <div className="box">
        <div className="box-body">
          <h3>Email Manager</h3>
          <fieldset>
            <legend>Test Monthly Emails</legend>
            <div className="form-group row padding">
              <div className="col-sm-12">
                <textarea
                  name="testEmails"
                  className="form-control"
                  rows="5"
                  onChange={handleRecipients}
                  value={recipients}
                />
                <p>
                  Send a test email to multiple addresses by separating them
                  with a semicolon.
                </p>
                <button
                  type="submit"
                  onClick={sendTest}
                  className="btn primary"
                >
                  Send Test Emails
                </button>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Send Live Emails</legend>
            <div className="form-group row padding">
              <div className="col-sm-12">
                <p>
                  Send the monthly evidence service emails to all subscribers.
                </p>
                <button
                  type="submit"
                  onClick={sendTest}
                  className="btn primary"
                >
                  Send LIVE Emails
                </button>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Resend Live Emails</legend>
            <div className="form-group row padding">
              <div className="col-sm-12">
                <p>
                  This will Resend the the monthly evidence service emails to
                  all subscribers for the selected year and month.
                </p>
              </div>
              <label className="col-sm-2 col-form-label">Choose year:</label>
              <div className="col-sm-2">
                <Select
                  name="year"
                  onChange={(opt) => handleYear(opt.value)}
                  value={YEARS.filter((opt) => opt.value === year)}
                  options={YEARS}
                  isSearchable
                  isRequired
                />
              </div>
              <label className="col-sm-2 col-form-label">Choose month:</label>
              <div className="col-sm-2">
                <Select
                  name="month"
                  onChange={(opt) => handleMonth(opt.value)}
                  options={MONTHS}
                  value={MONTHS.filter((opt) => opt.value === month)}
                  isSearchable
                  isRequired
                />
              </div>

              <div className="col-sm-12">
                <br />
                <button
                  type="submit"
                  onClick={sendTest}
                  className="btn primary"
                >
                  Resend LIVE emails
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default withRouter(withAuth(EmailManager));
