import React from 'react';
import logo from '../image_new.png';
function Home() {
    return (
        <body style={{
            background: "linear-gradient(#FFFFFF, #D2B48C)",
            height: '1000px'

        }}>
            <section>
               

<<<<<<< Updated upstream

                <div class="container-fluid">
                    
                        <img src={logo} alt="logo" width="500" height="500" class = "center"/>

                    
                    {/* <h1 class="mt-5">r-EZ-ipe</h1>
                <p>It should be easy right?</p> */}
                </div>
            </section>
=======
        <section>
            
            <div class="recipelogo">
            <img src={logo} alt="logo" width ="500" height = "500" class = "center"/>
        
                /<p class="mt-5">Click Recipes to sort by recipes, sort by categories, or click Ingredients for inputing ingredients. </p>
               
            </div>
        </section>
>>>>>>> Stashed changes
        </body>
    );
}

export default Home;
