import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </>
    </HashRouter>
  );
}

export default App;
