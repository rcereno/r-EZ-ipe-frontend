// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Ingredient from './components/Ingredient';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Sidebar from "./components/Sidebar";

// import { ProteinBased, lowcalorie, highcalorie} from "./pages/ProteinBased";

// import { Vegan, lowcal, highcal} from "./pages/Vegan";

// import { Vegetarian, lowcalo, highcalo} from "./pages/Vegetarian";

import { ProteinBased} from "./pages/ProteinBased";

import { Vegan} from "./pages/Vegan";

import { Vegetarian} from "./pages/Vegetarian";

function App() {
  return (
    <Router>
      <div className="App">
       
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" exact component={Recipe} />
            <Route path="/ingredients" exact component={Ingredient} />
            {/* <Switch> */}
            <Route path="/proteinrecipes" exact component={ProteinBased} />
            {/* <Route path="/proteinrecipes/lowcalorie" exact component={lowcalorie} />
            <Route path="/proteinrecipes/highcalorie" exact component={highcalorie} /> */}
            <Route path="/veganrecipes" exact component={Vegan} />
            {/* <Route path="/veganrecipes/lowcal" exact component={lowcal} />
            <Route path="/veganrecipes/highcal" exact component={highcal} /> */}
            <Route path="/vegetarianrecipes" exact component={Vegetarian} />
            {/* <Route path="/vegetrarianrecipes/lowcalo" exact component={lowcalo} />
            <Route path="/vegetarianrecipes/highcalo" exact component={highcalo} /> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
