import React from 'react';
import logo from '../logo.png';
function Home() {
    return(
        <body style={{
            background: "linear-gradient(#FFFFFF, #D2B48C)",
            height: '1000px'

        }}>

        <section>
            
            <div class="recipelogo">
            <img src={logo} alt="logo" width ="500" height = "500" class = "center"/>

                <h3>Select recipes to browse our collection or to input your own!</h3>
            </div>
        </section>
        </body>
    );
}

export default Home;
