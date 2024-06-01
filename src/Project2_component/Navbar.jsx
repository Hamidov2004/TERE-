import React from "react";
import Navbar_img from "../Images/Navbar_img.png"

function Navbar() {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="nav_img" src={Navbar_img} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className=" navbarUl navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#second_container">How tere works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#third_container">Tere benefits</a>
                            </li>

                            <form className="d-flex">
                                {/* <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/> */}
                                <a href="#">
                                    <button className="navbar_Btn btn btn-outline-success" type="submit">Help Center</button>
                                </a>
                            </form>
                        </ul> 
                    </div>
                </div>
            </nav>

            </>
     );
}

export default Navbar;