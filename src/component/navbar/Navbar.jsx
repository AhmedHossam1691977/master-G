import React from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";


export default function Navbar({userData,Logout}) {




return (
    <>

{/*  */}

  <nav className="navbar navbar-expand-lg py-1">
    <div className="container-fluid">
<Link className="navbar-brand fw-bolder fs-3 " to="home">فLa7za</Link>
<button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"  aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav m-auto mb-2 mb-lg-0 py-2">
    <li className="nav-item"><Link className="nav-link active text-nav fw-bold" aria-current="page" to="home">Home
  </Link>
    </li>
    <li className="nav-item">
  <Link className="nav-link text-nav fw-bold"  aria-current="page" to="contact">Contact</Link>
  </li>
    <li className="nav-item">
  <Link className="nav-link text-nav fw-bold"  aria-current="page" to="about">About</Link>
    </li>

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
       <li className="nav-item">
  <Link className="nav-link text-nav fw-bold" aria-current="page" to="product"> Product </Link>
    </li>
    <li className="nav-item">
  <Link className="nav-link text-nav fw-bold " aria-current="page" to="brand"> Brand</Link>
    </li>
    <li className="nav-item">
  <Link className="nav-link text-nav fw-bold " aria-current="page" to="subCatigory"> SubCatigory</Link>
    </li>
    
    </>}
  </ul>

  <ul className="align-items-center justify-content-center d-flex navbar-nav ms-auto mb-2 mb-lg-0">
    <li className="nav-item ">
  <form className="" role="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  </form>

    </li>
    <li className="nav-item mb-2 position-relative">
  <Link className="nav-link active  text-black  icon" aria-current="page" to="wishlist"> <CiHeart color="red" /> {""}</Link>
    </li>
    <li className="nav-item  mb-2 ">
  <Link className="nav-link active text-black icon" aria-current="page" to="cart" > <CiShoppingCart color="blue" />{" "} </Link>
    </li>
{userData == null ? "":
        <li className="nav-item m-auto">
        <span onClick={Logout} className='nav-item  cursor-pointer'>Sign Out</span>
          </li>}
    
  </ul>
</div>
    </div>
  </nav>
    </>
  );
}
