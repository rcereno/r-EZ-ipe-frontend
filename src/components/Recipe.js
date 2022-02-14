import React, {useEffect, useState} from 'react';

function Recipe() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/recipes');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            
            <div class="container-fluid">
                <h1 class="mt-5">Recipes</h1>
                <form method="POST" action="/addRecipe">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="recipeName" class="form-control" />
                            <input type="text" name="recipeIngredients" class="form-control" />
                            <input type="text" name="recipeSteps" class="form-control" />
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i class="fa fa-user mr-2"></i> <i> Recipe for {item.recipe}... ingredients: {item.ingredients}. steps: {item.steps}</i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
    );
}

export default Recipe;