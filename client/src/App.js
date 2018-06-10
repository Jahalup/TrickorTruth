import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Datapage from "./pages/Main";
import Mappage from "./pages/Maps";
import Updatepage from "./pages/Updateinfo";
import Mapview from "./pages/Mapview";




const App = () => (
  
  
  
  <Router>
    <div>
     
      <Switch>
        <Route exact path="/" component={Login} />
        <Route  exact path="/datapage" component={Datapage} />
        <Route path="/mappage" component={Mappage} />
        <Route path="/updatepage" component={Updatepage} />
        <Route exact path="/mapview" component={Mapview} />
        
         
      </Switch>
    </div>
  </Router>
);

export default App;