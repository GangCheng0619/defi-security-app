import "./App.css";
import { BrowerRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
