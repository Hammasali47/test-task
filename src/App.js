import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Post from "./Users/Pages/Post";
import Search from "./Users/Pages/Search";
import SignIn from "./Users/Pages/SignIn";
function App() {
  const routes = (
    <Switch>

<Route
        exact
        path="/"
        render={() => {
            return <Redirect to="/signin" />;
          
        }}
      />


      <Route
        exact
        path="/post"
        render={() => {
          const token = localStorage.getItem("token");

          if (token) {
            return <Post />;
          } else {
            return <Redirect to="/signin" />;
          }
        }}
      />

      <Route
        exact
        path="/search"
        render={() => {
          const token = localStorage.getItem("token");

          if (token) {
            return <Search />;
          } else {
            return <Redirect to="/signin" />;
          }
        }}
      />

      <Route
        exact
        path="/signin"
        render={() => {
          const token = localStorage.getItem("token");

          if (!token) {
            return <SignIn />;
          } else {
            return <Redirect to="/post" />;
          }
        }}
      />

      {/* <Route exact path="/signin" component={SignIn} /> */}
    </Switch>
  );

  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>{routes}</BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
