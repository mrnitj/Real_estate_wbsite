import "../styles/Hero.css";
import React from "react";
import Navbarcmpt from "../components/Navbarcmpt";
import { Services } from "./Services";

const Hero = () => {
    return (
        <div className="Hero">
            <div className="decor1"></div>
            <div className="decor2"></div>
            <div className="decor3"></div>
            <Navbarcmpt />
            <div className="Hero_contents">
                
                <div className="Hero__Left">
                    <p>
                        Buy your <span> dream home</span> in Kyiv!
                    </p>
                    <button>get started</button>
                </div>
                <div className="Hero__Right">
                    <img src="https://res.cloudinary.com/dnrmw8eif/image/upload/v1700578100/city_q4usrj.png" alt="" />
                    <img src="https://res.cloudinary.com/dnrmw8eif/image/upload/v1700578305/grp1_t2vygs.png" alt="" />
                </div>
            </div>

                <div className="Hero_contents2">
                    <p>
                        Senlling a property can be quite challenging <br /> If you don't have the right tools at your
                        disposals.
                    </p>
                    <p>
                        We help our clients sell, buy or rent properties hassle free. Due to our unparalleled results,
                        expertise and dedication, we rank amongst the top 6 agencies in Kyiv.We are very proud of the
                        service we provide and what our guests have to say about us.
                    </p>
                </div>
            <Services />
        </div>
    );
};

export default Hero;
