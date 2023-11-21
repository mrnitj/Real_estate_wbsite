import React from "react";
import "../styles/Register.css";

export const Register = () => {
    return (
        <div className="Register">
            <div className="Register__left">
                <img
                    src="https://res.cloudinary.com/dnrmw8eif/image/upload/v1700570459/modern_3d_illustration_of_young_man_siting_on_search_bar_concept-_Converted_1_dpkmhb.png"
                    alt=""
                />
            </div>
            <div className="Register__Right">
                <p>Let Us Help You Find Your Ideal Buyer!</p>
                <p>
                    Interior brings 41 years of interior designs experience right to your home or office. Our design
                    professionals are equipped to help you determine the products and design that work best for our
                    customers.
                </p>
                <button>register now</button>
            </div>
        </div>
    );
};
