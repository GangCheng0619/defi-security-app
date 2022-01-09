import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="AppQ">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
