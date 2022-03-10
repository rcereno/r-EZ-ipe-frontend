import React, { useEffect, useState } from 'react';
// import Ingredient from './Ingredient';
import Sidebar from "./Sidebar";
// import { ProteinBased, lowcalorie, highcalorie} from "./pages/ProteinBased";

// import { Vegan, lowcal, highcal} from "./pages/Vegan";

// import { Vegetarian, lowcalo, highcalo} from "./pages/Vegetarian";

function Recipe() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/recipes');
        const items = await data.json();
        setItems(items);
    };

    return (
        <section>
            {/* <Sidebar /> */}
            <div class="container-fluid">
                <h1 class="mt-5">Recipes</h1>
                <h5 class="mt-5"> Browse our recipes or submit your own</h5>
                <form method="POST" action="/addRecipe">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">

                            <input type="text" name="recipeName" placeholder="Recipe Name" class="form-control" />
                            <input type="text" name="recipeIngredients" placeholder="Ingredients" class="form-control" />
                            <input type="text" name="recipeSteps" placeholder="Steps" class="form-control" />
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
    
                </form>
                <Sidebar />

                {
                    
                    items.map(item => (
                        <div class="accordion" id="accordionExample">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h2 class="mb-0">
                                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <i> Recipe for {item.name} </i>
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        <img src={item.imageURL} height="150" width="150" />
                                        <div> <b>Steps:</b> <li>{item.steps}</li> </div>


                                        <div> <b>Ingredients:</b> <li>{item.ingredients.name}</li> </div>
                                        



                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </section>
    );
}

export default Recipe;


// <i class="fa fa-user mr-2"></i> <i> imageURL: {item.imageURL} Recipe for {item.name} ... Steps {item.steps} </i>