import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Autocomplete from "./components/Autocomplete/Autocomplete";
import DetailPerson from "./components/DetailPerson/DetailPerson";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Autocomplete}/>
        <Route exact path='/listdoctor' component={MainPage}/>
        <Route path='/detail/:id' children={<DetailPerson />} />
      </Switch>
    </Router>
  );
};

export default App;
