import React, {useEffect, useState} from 'react';

function Ingredient() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://r-ez-ipe-api.herokuapp.com/ingredients');
        const items = await data.json();
        setItems(items);
    };

    return(
        <body style={{
            background: "linear-gradient(#FFFFFF, #D2B48C)",
            height: '1000px'

        }}>

        <section>
            
            <div class="ingredients">
                <h1 class="mt-5">Ingredients</h1>
                <form method="POST" action="/addIngredient">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="ingredientName" placeholder = "input ingredients" class="form-control" />
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>

                {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i> Ingredient: {item.ingredients} </i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
        </body>
    );
}

export default Ingredient;