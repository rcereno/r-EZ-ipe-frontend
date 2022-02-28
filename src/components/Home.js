import React from 'react';
import logo from '../logo.png';
function Home() {
    return(
        <section>
            
            <div class="container-fluid">
                 <body className = "App Header">
          <img src={logo} alt="logo" width ="500" height = "500"/>
        
        </body>
                {/* <h1 class="mt-5">r-EZ-ipe</h1>
                <p>It should be easy right?</p> */}
            </div>
        </section>
    );
}

export default Home;
