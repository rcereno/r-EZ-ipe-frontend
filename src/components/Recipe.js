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
        <body style={{
            background: "linear-gradient(#F192C4, #9198e5)", 
            height: '1000px'
          }}>
        <section>
            
            <div class="container-fluid">
            <h1 style = {{textAlign: "center"}}><span style={{color : 'maroon'}}>Recipes</span></h1>
                <form method="POST" action="/addIngredient">
                    <div class="input-group justify-content-center">
                        <div className="input-group-prepend">
                            <input type="text" 
                                placeholder='Input the Recipe Title...'
                                autoComplete='Off' 
                                class="form-control" />
                            </div>
                           

                        <div className="recipeIngredients"> 
                            <input type="text" 
                                placeholder="Input ingredients..."
                                autoComplete='Off'
                                class="form-control" />
                            
                            </div>

                            
                            
                
                            

                            <div className="recipeSteps"> 
                            
                            <input type="text" 
                                placeholder="Input steps..."
                                autoComplete='Off'
                                class="form-control" />

                

                            </div>

                           





                            
                           
                        </div>

                        &nbsp; 

                        <div classname = "button2">
                           
                           <input type="submit" value="Send" class="btnbtn-primarymb-2" classname = "recipesubmit" />

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
        </body>
    );
}

export default Recipe;