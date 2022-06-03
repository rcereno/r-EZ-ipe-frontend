   
// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import {Link} from 'react-router-dom';

// const MainNav = () => {
//     const {loginWithRedirect,logout, user , isLoading } = useAuth0()
//     return(
//         <div className="navbar-nav mr-auto">
//             <Link
//                 to="/"
//                 exact
//                 className="nav-link"
//                 activeClassName="router-link-exact-active"
//             >
//         Home
//              </Link>
//             <Link
//                 to="/profile"
//                 exact
//                 className="nav-link"
//                 activeClassName="router-link-exact-active"
//             >
//          Profile
//         </Link>
//             <Link
//                 to="/external-api"
//                 exact
//                 className="nav-link"
//                 activeClassName="router-link-exact-active"
//             >
//         External API
//             </Link>
//             {!isLoading && !user && (
//                 <button 
//                     className="btn btn-primary btn-block"
//                     onClick={() => loginWithRedirect()}
//                 >
//                         Log In
//                 </button>
//             )}
//             {!isLoading && !user && (
//                 <button
//                     className="btn btn-primary btn-block"
//                     onClick={() => logout()}
//                 >
//                     Log Out
//                     </button>
//              )}

//     </div>
        
//   );
// }

// export default MainNav;