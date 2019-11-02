import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUpPage from '../../Pages/SignUp';
import FocusPage from '../../Pages/FocusPage';
import MyEventPage from '../../Pages/MyEventPage';
import Navigation from '../../Components/Navigation';

import * as ROUTES from '../../constants/routes';

function App() {
  return (
    <Router>
    <div style={{backgroundColor:"dodgerblue"}}>
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.FOCUS} component={FocusPage} />
        <Route exact path={ROUTES.MY_EVENTS} component={MyEventPage} />
        <Navigation />
    </div>
    </Router>
  );
}

export default App;