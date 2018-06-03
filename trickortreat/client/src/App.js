import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Datapage from "./pages/Main";




const App = () => (
  
  
  
  <Router>
    <div>
     
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/datapage" component={Datapage} />
        {/* <Route exact path="/savedarticles" component={SavedArticles}/> */}
         
      </Switch>
    </div>
  </Router>
);

export default App;