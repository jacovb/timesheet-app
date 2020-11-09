import React, { useState } from "react";
import "./TimesheetApp.css";

function TimesheetApp() {
  const [isEmployer, setIsEmployer] = useState(false);
  return (
    <div className="App">
      <h1>Timesheet App</h1>

      <h3>Are you an...{isEmployer ? "Employer" : "Employee"}?</h3>
      <p>Please select</p>
      <button onClick={() => setIsEmployer(true)}>Employer</button>
      <button onClick={() => setIsEmployer(false)}>Employee</button>
    </div>
  );
}

export default TimesheetApp;
