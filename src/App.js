// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Ingredient from './components/Ingredient';
import Register from './components/easyRegister';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { ProteinBased } from "./pages/ProteinBased";
import { Vegan } from "./pages/Vegan";
import { Vegetarian } from "./pages/Vegetarian";
import { Keto } from "./pages/Keto";
import { QuickEasy } from "./pages/QuickEasy";
import { LowBudget } from "./pages/LowBudget";
import { LessThanFive } from "./pages/LessThanFive";
import { Paleo } from "./pages/Paleo";
import { Seafood } from "./pages/Seafood";
import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";
import Profile from "./pages/profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  return (
    <Router>
      
      <div className="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipe} />
            <Route path="/ingredients" exact component={Ingredient} />
            <Route path="/proteinrecipes" exact component={ProteinBased} />
            <Route path="/vegetarianrecipes" exact component={Vegetarian} />
            <Route path="/veganrecipes" exact component={Vegan} />
            <Route path="/ketorecipes" exact component={Keto} />
            <Route path="/paleorecipes" exact component={Paleo} />
            <Route path="/quickeasyrecipes" exact component={QuickEasy} />
            <Route path="/lowbudgetrecipes" exact component={LowBudget} />
            <Route path="/lessthanfiverecipes" exact component={LessThanFive} />
            <Route path="/seafoodrecipes" exact component={Seafood} />
            <Route path="/login" exact component={Register} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
