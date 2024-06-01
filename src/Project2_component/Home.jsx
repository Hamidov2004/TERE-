import React from "react";
import appStore from "../Images/h_app-store.png"
import playMarket from "../Images/hl_play-store.png"
import mapImg from "../Images/Right_side_img.png"
import round_border from "../Images/round_border.png"
import phone from "../Images/phone.png"
import ellipse from "../Images/Ellipse 1.png"
import carusel_item from "../Images/carusel change.png"
import third_img1 from "../Images/third_container_img1.png"
import third_img2 from "../Images/third_container_img2.png"
import third_img3 from "../Images/third_container_img3.png"



function Home() {
    return (  
        <div className="Home_container">
            <div className="container-fluid">
                <div className="row">

                    <div className="d-flex d-md-none col-sm-12 col-lg-6 right_box my-2"   >
                        <img src={mapImg} alt="Rasm bor" />
                    </div>

                    <div className="col-sm-12 col-lg-6 left_box" >
                        <h1>DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!</h1>
                        <p>Its simple and its free. Play your part in reducing Carbon Footprint and help Mother Nature to sustain its beauty. So what are you waiting for ?  
                           Lets ride together
                        </p>

                        <form className="home_downloads">
                            <a className="h_download" href="#">
                                <img src={playMarket} alt="rasm bor"/>
                                DOWNLOAD
                            </a>
                            <a className="h_download" href="#">
                                <img src={appStore} alt="rasm bor" />
                                DOWNLOAD
                            </a>   
                        </form>
                    </div>

                    <div className="d-none d-md-flex col-sm-12 col-lg-6 right_box" style={{marginTop:"45px"}} >
                        <img src={mapImg} alt="rasm bor" />
                    </div>

                    <div className="Apply_box">
                        <p className="m-0">Let’s go. Get a link to download the app.</p>
                        <form action="" className="Apply_box_Form">
                            <input type="number" placeholder="Enter mobile phone number"/>
                            <a href="#" className="h_download"> APPLY TO DRIVE</a>
                        </form>
                    </div>



                    <div className="second_container" id="second_container">
                        <h1>HOW <span style={{color: "#75BF7A"}}>TERE</span> WORKS</h1>
                        <p className="second_Cont_text">Download and install the tere app. Enter your phone number and make your user account. when approved you may start driving.</p>
                       
                        <div className="container" style={{marginTop:"90px"}}>
                            <div className="row">

                                <div className="col-sm-12 col-lg-4 d-grid d-lg-none second_central_detail">
                                        <img src={phone} alt="Rasm bor" style={{zIndex:"4"}}/>
                                        <img src={ellipse} alt="Rasm bor" className="ellipse" />
                                        {/* <img src={carusel_item} alt="carsusel" className="carusel_item d-block d-md-none" /> */}
                                </div>

                                <div className="d-flex col-lg-4 second_left_detail">
                                        <div className="holder1">
                                            <div className="image_container">
                                                <img src={round_border} alt="Rasm bor"/>
                                                <p>1</p>
                                            </div>
                                            <h3>REQUEST A RIDE</h3>
                                            <p className="text_in_left_container2">Have to reach office or going for shopping ? Just put your current location and destination and search a ride that suits you</p>
                                        </div>
                                        
                                        <div className="holder1 d-none d-md-flex">
                                            <div className="image_container" style={{marginTop:"35px"}}>
                                                <img src={round_border} alt="Rasm bor"/>
                                                <p>3</p>
                                            </div>
                                            <h3>INSTANT NOTIFICATIONS</h3>
                                            <p className="text_in_left_container2">Get instant notifications for your rides and be in contact with fellow riders all the time</p>
                                        </div>

                                        <div className="holder1 d-md-none">
                                            <div className="image_container" style={{marginTop:"35px"}}>
                                                <img src={round_border} alt="Rasm bor"/>
                                                <p>2</p>
                                            </div>
                                            <h3>POST A RIDE</h3>
                                            <p className="text_in_left_container2">Going somewhere but hate to travel alone - just post your ride details and publish it</p>
                                        </div>
                                </div>


                                <div className="col-sm-12 col-lg-4 d-none d-lg-grid second_central_detail">
                                        <img src={phone} alt="Rasm bor" style={{zIndex:"4"}}/>
                                        <img src={ellipse} alt="Rasm bor" className="ellipse" />
                                        <img src={carusel_item} alt="carsusel" className="carusel_item" />    
                                </div>


                                <div className="d-flex col-lg-4 second_left_detail second_right_detail">

                                            <div className="holder1 d-flex d-md-none">
                                                <div className="image_container" style={{marginTop:"35px"}}>
                                                    <img src={round_border} alt="Rasm bor"/>
                                                    <p>3</p>
                                                </div>
                                                <h3>INSTANT NOTIFICATIONS</h3>
                                                <p className="text_in_left_container2">Get instant notifications for your rides and be in contact with fellow riders all the time</p>
                                            </div>

                                        <div className="holder2 d-none d-md-flex">
                                            <div className="image_container">
                                                <img src={round_border} alt="Rasm bor"/>
                                                <p>2</p>
                                            </div>
                                            <h3>POST A RIDE</h3>
                                            <p className="text_in_right_container2">Going somewhere but hate to travel alone - just post your ride details and publish it</p>
                                        </div>

                                        <div className="holder2">
                                            <div className="image_container" style={{marginTop:"35px"}}>
                                                <img src={round_border} alt="Rasm bor"/>
                                                <p>4</p>
                                            </div>
                                            <h3>CASHLESS PAYMENT</h3>
                                            <p className="text_in_right_container2">Payment made easy by using your own Wallet - no more cash to carry</p>
                                        </div>
                                </div>
                            </div>
                        </div>

                        {/* <img src={carusel_item} alt="carsusel" className="carusel_item d-none d-md-flex" /> */}
                    </div>



                    <div className="third_container" id="third_container">
                        <h1> <span style={{color: "#75BF7A"}}>TERE</span> BENEFITS</h1>

                        
                        <div className="third_container_child">
                            <div className="third_child_left">
                                <div className="number_text"> 
                                    <span className="m-0" >01.</span>
                                    <h3>Flexible working hours</h3>
                                </div>                           
                                    <p className="d-none ">You can decide when, and how much time you want to drive.</p>
                            </div>
                            <div className="third_child_right">
                                <img src={third_img1} alt="Rasm bor" />
                                <p className="d-block d-md-none">You can decide when, and how much time you want to drive.</p>
                            </div>
                        </div>

                        <div className="third_container_child third_container_child_seperate">
                                <div className="third_child_left ">
                                    <div className="number_text"> 
                                        <span className="m-0" >02.</span>
                                        <h3>Earnings</h3>
                                    </div>                           
                                        <p className="d-none">By driving with tere you can earn more.</p>
                                </div>

                                <div className="third_child_right">
                                    <img src={third_img2} alt="Rasm bor" />
                                    <p className="d-block d-md-none">By driving with tere you can earn more.</p>
                                </div>
                        </div>

                        <div className="third_container_child">
                                <div className="third_child_left">
                                    <div className="number_text"> 
                                        <span className="m-0" >03.</span>
                                        <h3>Customer support 24/7</h3>
                                    </div>                           
                                        <p className="d-none">Tere is a local service provider and we are proud to support you in your local language. We are proud to be at your service 24/7!</p>
                                </div>

                                <div className="third_child_right">
                                    <img src={third_img3} alt="Rasm bor" />
                                    <p className="d-block d-md-none">Tere is a local service provider and we are proud to support you in your local language. We are proud to be at your service 24/7!</p>
                                </div>
                        </div>
                    </div>  


                </div>
            </div>


        </div>
    );
}

export default Home;