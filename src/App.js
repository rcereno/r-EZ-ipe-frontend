// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Ingredient from './components/Ingredient';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
       
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipe} />
            <Route path="/ingredients" exact component={Ingredient} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;