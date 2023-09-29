import React, { useState } from 'react';
import './style.css';

const LeaveForm = () => {
  const [rid, setRid] = useState('');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [totalLeave, setTotalLeave] = useState('');
  const [earnedLeave, setEarnedLeave] = useState('');
  const [remainingLeave, setRemainingLeave] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary validation or data processing before submission
    // ...

    // Generate Rid number after form submission
    const generatedNumber = Math.floor(Math.random() * 1000);
    setRid(generatedNumber.toString());

    // Calculate Remaining Leave after form submission
    const remainingHours = parseInt(totalLeave) - parseInt(earnedLeave);
    setRemainingLeave(remainingHours.toString());

    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>softsensor.Ai</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="rid">Rid:</label>
            <input type="text" id="rid" readOnly value={rid} />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="reason">Reason:</label>
            <input
              type="text"
              id="reason"
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="totalLeave">Total Leave (hours):</label>
            <input
              type="number"
              id="totalLeave"
              value={totalLeave}
              onChange={(event) => setTotalLeave(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="earnedLeave">Earned Leave (hours):</label>
            <input
              type="number"
              id="earnedLeave"
              value={earnedLeave}
              onChange={(event) => setEarnedLeave(event.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Form submitted successfully!</p>
          <p>Rid: {rid}</p>
          <p>Date: {date}</p>
          <p>Reason: {reason}</p>
          <p>Total Leave (hours): {totalLeave}</p>
          <p>Earned Leave (hours): {earnedLeave}</p>
          <p>Remaining Leave (hours): {remainingLeave}</p>
        </div>
      )}
    </div>
  );
};

export default LeaveForm;

