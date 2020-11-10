import React, { useState } from "react";
import "./TimesheetApp.css";
import Component from "./Component";

function TimesheetApp() {
  const [isEmployer, setIsEmployer] = useState();
  const [count, setCount] = useState(0);
  function handleChange(newValue) {
    setCount(newValue);
  }

  return (
    <div className="App">
      <h1>Timesheet App</h1>

      <h3>Are you an...{isEmployer ? "Employer" : "Employee"}?</h3>
      <p>Please select</p>
      <button onClick={() => setIsEmployer(true)}>Employer</button>
      <button onClick={() => setIsEmployer(false)}>Employee</button>

      <Component count={count} makeChange={handleChange} />
      {console.log(count)}
    </div>
  );
}

export default TimesheetApp;
