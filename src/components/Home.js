import React from 'react';
import logo from '../logo.png';
function Home() {
    return (
        <body style={{
            background: "linear-gradient(#FFFFFF, #D2B48C)",
            height: '1000px'

        }}>
            <section>
               


                <div class="recipeLogo">
                    
                        <img src={logo} alt="logo" width="500" height="500" class = "center"/>

                    
                    {/* <h1 class="mt-5">r-EZ-ipe</h1>
                <p>It should be easy right?</p> */}
                </div>
            </section>
        </body>
    );
}

export default Home;