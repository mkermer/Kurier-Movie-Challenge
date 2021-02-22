import React from "react";
import './App.css';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actions from '../../actions/app.action';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';



function App() {
  return (
    <Router>
      <div className="App">
      
              <Switch>
                {/* <Route path="/" exact component={LandingPage}/> */}
                <Route path="/Login" component={Login}/>
                <Route path="/Registration" component={Registration}/>
                
            
              </Switch>

      </div>
         </Router>  
  );
}

// const mapStateToProps = state => ({ applicationState: state });
// const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) });
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App
