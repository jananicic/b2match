import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import './App.css';
import Home from "./components/home-component/home";
import Movie from "./components/movie-component/movie";

function App() {
  return (
      <div className={"app-container"}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/movie/:id" component={Movie}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
