import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about/:name" children={<About />}></Route>
      </Switch>
    </div>
  );
}
