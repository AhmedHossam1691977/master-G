import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assites/WhatsApp Image 2024-04-25 at 14.02 1.png"


export default function Navbar({userData,Logout}) {


return (
    <>

{/*  */}

  <nav className="navbar navbar-expand-lg py-1 ">
    <div className="container ">
<Link className="navbar-brand fw-bolder  fs-3 " to="home">
  <img className="w-100 logo" src={logo} alt="" />
</Link>
<button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse navb" id="navbarSupportedContent">
  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-2">

  {/* chick user data show  the login button and add to cart icon */}
    
  {userData == null ? 
      <>
      <li className="nav-item">
  <Link className="nav-link text-nav fw-bold" aria-current="page" to="signup"> Sign Up </Link>
    </li>
    <li className="nav-item">
  <Link className="nav-link text-nav fw-bold " aria-current="page" to="signin"> signin</Link>
    </li>
      </>
    : <>


{userData.role == "admin" ?
<>

<li className="nav-item m-auto">
 <Link className="nav-link text-nav fw-bold " aria-current="page" to="users"> users</Link> 
     </li>
     <li className="nav-item m-auto">
     <Link className="nav-link text-nav fw-bold " aria-current="page" to="form"> form</Link> 
         </li>

</>
: <li className="nav-item m-auto">
      <Link className="nav-link text-nav fw-bold " aria-current="page" to="form"> form</Link> 
          </li>}

   <li className="nav-item m-auto mx-5">
        <span onClick={Logout} className='nav-item  cursor-pointer fw-bolder'>Sign Out</span>
          </li>

    
    </>}
    
  </ul>

</div>
    </div>
  </nav>
    </>
  );
}
