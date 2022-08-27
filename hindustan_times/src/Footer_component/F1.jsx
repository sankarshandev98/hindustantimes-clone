import React from "react";
import "./F1.css";

export default function F1() {
    return (
        <>
            <div className="F1upper">
                <img className="fimg" src="https://images.hindustantimes.com/images/app-images/2022/2/ht-logo.svg" alt="" />
                <img className="simg" src="https://images.hindustantimes.com/images/app-images/2022/2/mweb_button_svg.svg" alt="" />
            </div>
            <p>Subscribe to our best newsletters</p>
            <div className="F1lower">
                <select>
                    <option>HT Daily Capsule</option>
                </select>
                <input type="text" placeholder="Enter Email Address" />
                <button>SUBSCRIBE</button>
                <div className="F1lowerimg">
                    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/fb-logo.svg" alt="" />
                    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/in-logo.svg" alt="" />
                    <img src="https://images.hindustantimes.com/images/app-images/2022/2/instagram.svg" alt="" />
                    <img src="https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/tw-logo.svg" alt="" />
                </div>
            </div>
            <hr />
        </>
    )
}