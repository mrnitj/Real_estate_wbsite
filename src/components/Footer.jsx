import React from "react";
import "../styles/Footer.css";
import { NavLink } from "react-bootstrap";

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__Left">
                <div className="Footer_logo">
                    <img src="https://res.cloudinary.com/dnrmw8eif/image/upload/v1700544484/logo_zjepsm.png" alt="" />
                </div>

                <ul>
                    <li>home</li>
                    <li>Profile</li>
                    <li>Reports</li>
                    <li>Insights</li>
                </ul>

                <ul>
                    <li>Information centre</li>
                    <li>Terms & conditions</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="Footer__Right">
                <div className="Social_media">
                    <NavLink>
                        <img
                            src="https://res.cloudinary.com/dnrmw8eif/image/upload/v1700574429/facebook_kf56ut.png"
                            alt=""
                        />
                    </NavLink>
                    <NavLink>
                        <img
                            src="https://res.cloudinary.com/dnrmw8eif/image/upload/v1700574492/instagram_czmon2.png"
                            alt=""
                        />
                    </NavLink>
                    <NavLink>
                        <img
                            src="https://res.cloudinary.com/dnrmw8eif/image/upload/v1700574449/twitter_zjintv.png"
                            alt=""
                        />
                    </NavLink>
                    <NavLink>
                        <img
                            src="https://res.cloudinary.com/dnrmw8eif/image/upload/v1700574445/linkdin_q5zsw1.png"
                            alt=""
                        />
                    </NavLink>
                </div>
                <p>©2022 wealth properties.</p>
            </div>
        </div>
    );
};
