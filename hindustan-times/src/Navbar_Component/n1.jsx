import "./N1.css"
import React from "react";

export default function N1() {
    const current = new Date();
    const date = current.toDateString();
    return (
        <div className="n1main">
            <div className="left">
                <div className="l1">
                    <div className="l1left">
                        <img src="https://cdn-user-icons.flaticon.com/23174/23174581/1661411802902.svg?token=exp=1661412704~hmac=35f1debfb7437ebdb78386c6cb62c66e" alt="" /><span>Explore</span>
                    </div>
                    <div className="l1right">
                        <img src="https://cdn-icons-png.flaticon.com/512/3128/3128287.png" alt="" /><span>Search</span>
                    </div>
                </div>
                <div className="l2">
                    <p>{date}</p>
                    <p>New Delhi 30&#8451;</p><span><img src="https://cdn-icons-png.flaticon.com/512/2675/2675848.png" alt="" /></span>
                </div>
            </div>
            <div className="center">
                <img src="https://www.hindustantimes.com/res/images/ht-logo.svg" alt="" />
            </div>
            <div className="right">
                <div className="r1">
                    <div className="r1left">
                        <img src="https://cdn-icons-png.flaticon.com/512/2331/2331852.png" alt="" /><span>Games</span>
                    </div>
                    <div className="r1center">
                        <img src="https://cdn-icons-png.flaticon.com/512/3449/3449593.png" alt="" /><span>E-Paper</span>
                    </div>
                    <div className="r1right">
                        <img src="https://cdn-icons-png.flaticon.com/512/3596/3596175.png" alt="" /><span>Sign in</span>
                    </div>
                </div>
                <div className="r2">
                    <p>Start 15 Days Free Trial</p><span><button>Subscribe</button></span>
                </div>
            </div>
        </div>
    )
}