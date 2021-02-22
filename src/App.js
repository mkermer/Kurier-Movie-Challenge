
import MovieOverview from "./components/movie-overview";
import MovieDetail from "./components/MovieDetail";
import React from "react";
import "./App.css";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions/app.action';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Moviecard from './components/MovieDetailPage/Moviecard';

import MovieOverview from './components/movie-overview';
import Slideshow from "./components/LandingPage/Slideshow";
import Footer from './components/Footer/Footer';



function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={MovieOverview} />
          <Route path="/movie" component={MovieDetail} />
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />
        </Switch>
        <Footer/>

      </div>
    </Router>
  );
}

// const mapStateToProps = state => ({ applicationState: state });
// const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
