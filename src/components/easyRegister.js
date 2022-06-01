import React, {useEffect, useState} from 'react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

function EasyRegister() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/login');
        const items = await data.json();
        setItems(items);
    };

    return(
        <body style={{
            background: "linear-gradient(#FFFFFF, #D2B48C)",
            height: '1000px'

        }}>

        <section>
            
            <div class="Register">
                <h1 class="mt-5">Auth0 Login</h1>
                <LogoutButton/>

                <LoginButton/>
                {/* <form method="POST" action="/addUser">

                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="userName" placeholder="User Name" class="form-control" />
                            <input type="text" name="password" placeholder="Password" class="form-control" />
                            <input type="text" name="account_name" placeholder="Account Name" class="form-control" />
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form> */}

                {
                items.map(item => (
                    <div class="row padding">
                        <div class="alert alert-info rounded-pill" role="alert">
                            <i> Welcome: {item.name} </i>
                        </div>
                    </div>       
                ))
                }
            </div>
        </section>
        </body>
    );
}

export default EasyRegister;