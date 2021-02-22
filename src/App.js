import "./App.css";
import MovieOverview from "./components/movie-overview";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MovieOverview} />
          <Route path="/movie" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
