import React from 'react';
import logo from '../image_new.png';
function Home() {
    return (
        <body style={{
            background: "linear-gradient(#FFFFFF, #D2B48C)",
            height: '1000px'

        }}>
            <section>
               


                <div class="container-fluid">
                    
                        <img src={logo} alt="logo" width="500" height="500" class = "center"/>

                    
                    {/* <h1 class="mt-5">r-EZ-ipe</h1>
                <p>It should be easy right?</p> */}
                </div>
            </section>
        </body>
    );
}

export default Home;
