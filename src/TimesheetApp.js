import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./TimesheetApp.css";
import Component from "./Component";
import Navbar from "./components/Navbar";
import NewProjects from "./components/NewProjects";
import Timesheets from "./components/Timesheets";
import Reports from "./components/Reports";

function TimesheetApp() {
  const [isEmployer, setIsEmployer] = useState();
  const [count, setCount] = useState(0);
  const [project, setProject] = useState({
    projectNo: "",
    projectName: "",
    projectAllowedHours: 0,
  });

  function handleProjectChange(newObject) {
    setProject(newObject);
  }

  function handleChange(newValue) {
    setCount(newValue);
  }

  return (
    <div className="App">
      <h1>Timesheet App</h1>
      <Router>
        <Navbar />
        <div id="mainContainer">
          <Switch>
            <Route exact path="/">
              <h3>Are you an...{isEmployer ? "Employer" : "Employee"}?</h3>
              <p>Please select</p>
              <button onClick={() => setIsEmployer(true)}>Employer</button>
              <button onClick={() => setIsEmployer(false)}>Employee</button>

              <Component count={count} makeChange={handleChange} />
              {console.log(count)}
            </Route>

            <Route exact path="/newProjects">
              <NewProjects
                project={project}
                handleProjectChange={handleProjectChange}
              />
            </Route>

            <Route exact path="/timesheets">
              <Timesheets />
            </Route>

            <Route exact path="/reports">
              <Reports />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default TimesheetApp;
