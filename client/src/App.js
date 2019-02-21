import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={() => <Books />} />
            {/* <Route exact path="/saved" component={() =><Books />}/> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
