import React from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/setting/Setting.jsx";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login.jsx";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const user = false;

  return (
    <>
      <Router>
        <TopBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route exact path="/write">
          { user ? <Write/> : <Register />}

          </Route>
        
          <Route exact path="/setting">
          { user ? <Setting/> : <Register />}
          </Route>
          <Route exact path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
