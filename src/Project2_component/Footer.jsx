import React from "react";
import footer_img from "../Images/Footer_img.png"
import playStore from "../Images/bxl_play-store.png"
import appStore from "../Images/ci_app-store.png"

function Footer() {
    return ( 
        <>
            <div className="Footer_container">
                <div className="footer_box">
                    <img src={footer_img} alt="" />
                    <div className="footer_info_box">
                        <h4 style={{marginBottom:"20px"}}>Be Our Friend</h4>
                        <p>3, Season Park, Jakarta</p>
                        <p>support@foodyar.co,id</p>
                        <p>021 - 1111 - 2222</p>
                    </div>
                    <div className="footer_info_box">
                        <h4 style={{marginBottom:"20px"}}>Be Our Friend</h4>
                        <p>3, Season Park, Jakarta</p>
                        <p>support@foodyar.co,id</p>
                        <p>021 - 1111 - 2222</p>
                    </div>

                    <form action="" className="footer_form">
                        <a href="#" className="download_box">
                            <img src={playStore} alt="" />
                            <button className="">DOWNLOAD</button>
                        </a>

                        <a href="#" className="download_box">
                            <img src={appStore} alt="" />
                            <button>DOWNLOAD</button>
                        </a>
                    </form>
                </div>

                        <hr style={{color:"grey"}} className="d-none d-lg-block"/>
                        <p className="Footer_reserved">All Rights Reserved tere by Codematics 2022</p>
            </div>
        </>
     );
}

export default Footer;