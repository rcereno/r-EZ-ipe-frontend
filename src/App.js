// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Ingredient from './components/Ingredient';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
<<<<<<< HEAD
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
=======
import React, { Components } from "react";
// import Button from "./button.js";

class App extends Components {
    state = {
        name: "Vegan"
    };
    changeName = () => {
        this.setState({
            name: "Vegetarian"
        });
    };
    render() {
        return (
            <div>
                <h1>{name}</h1>
                <Button name="Change Name" click={this.changeName} />
            </div>
        );
    }
>>>>>>> 13139a7992ae69a7a75cdf39b48eb1cc67b1a5c0
}


// import React, {useState, useEffect} from 'react';
// import Header from './components/Header';
// import Recipes from './components/Recipe';
// import Axios from 'axios';

function App() {
    // const [search,setSearch] = useState("vegan");
    // const [recipes, setRecipes] = useState([]);

    // const APP_ID = "0c4b53ef";
    // const APP_KEY = "b33e55ce6599495ecbaae9f569a7e9f2";
    // useEffect(() => { getRecipes();}, []);

    // const getRecipes = asynch();{
    //     const result =  Axios.get("https://api.edamam.com/search?q=vegan&app_id=${APP_ID}&app_key={APP_KEY}")
    //     setRecipes(result.data.hits);
    // }
    // const onInputChange = e => {
    //     console.log(e.target.value);
    // }
    return (
        <div className = "App">
            <Header mysearch={search} onInputChange = {onInputChange}/>
            <div className="container">
                <Recipes recipes={recipes}/>
            </div>
        </div>
    );
}
// export default App;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//           <Nav />
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/recipes" exact component={Recipe} />
//             <Route path="/ingredients" exact component={Ingredient} />
//           </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
