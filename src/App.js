
import MovieOverview from "./components/movie-overview";
import MovieDetail from "./components/MovieDetail";
import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/app.actions';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Navigation from './components/Navigation/Navigation';
import Moviecard from './components/MovieDetailPage/Moviecard';
import Slideshow from "./components/LandingPage/Slideshow";
import Footer from './components/Footer/Footer';
import DetailPage from './components/MovieDetailPage/DetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
        <Route path="/movie" component={MovieDetail} />
          <Route path="/Login" component={Login} />
          <Route path="/Registration" component={Registration} />
          <Route exact path="/" component={MovieOverview}/>
        </Switch>
 


      </div>
    </Router>
  );
}

const mapStateToProps = state => ({ applicationState: state });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(App);
