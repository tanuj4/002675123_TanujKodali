import React from "react";
import Weather from "./components/weather";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
                <h1>Weather Forecast</h1>
              </div>
              <div className="row">
                <Switch>
                <Route path="/weekly" component={Weather} />
                </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
