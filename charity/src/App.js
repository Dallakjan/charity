import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </>
    </HashRouter>
  );
}

export default App;
