import React from "react";
import Navbar_img from "../Images/Navbar_img.png"

function Navbar() {
    return ( 
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img className="nav_img" src={Navbar_img} alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class=" navbarUl navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#second_container">How tere works</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#third_container">Tere benefits</a>
                            </li>

                            <form class="d-flex">
                                {/* <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/> */}
                                <a href="#">
                                    <button class="navbar_Btn btn btn-outline-success" type="submit">Help Center</button>
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