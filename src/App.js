import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withRouter } from "react-router";

import ProtectedRoute from "./components/ProtectedRoute";
import NotProtectedUserPage from "./components/NotProtectedUserPage";
import ProtectedUserPage from "./components/ProtectedUserPage/ProtectedUserPage";
import NotAuthorized from "./components/NotAuthorized/NotAuthorized";
import './App.css';
import './components/normalize.css';
import NavBar from "./components/NavBar/NavBar";

function App( props ) {

  return (
    <Router>
      <div className="App container">
        <NavBar />
        <Switch>
          <ProtectedRoute path='/protected' component={ProtectedUserPage}/>
          <Route path="/unauthorized">
            <NotAuthorized />
          </Route>
          <Route path="/">
            <NotProtectedUserPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
