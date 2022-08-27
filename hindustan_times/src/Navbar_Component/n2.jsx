import React from "react";
import "./N2.css";
import { Link } from "react-router-dom";


export default function N2() {
    return (
        <>
            <div className="upper">
                <Link className="link" to="/trial">Home</Link>
                <Link className="link" to="/latest">Latest</Link>
                <Link className="link" to="/india">India</Link>
                <Link className="link" to="/world">World</Link>
                <Link className="link" to="/kolkata">Kolkata</Link>
                <Link className="link" to="/entertainment">Entertainment</Link>
                <Link className="link" to="/cricket">Cricket</Link>
                <Link className="link" to="/lifestyle">Lifestyle</Link>
                <Link className="link" to="/astrology">Astrology</Link>
                <Link className="link" to="/editorials">Editorials</Link>
                <Link className="link" to="/">For You</Link>
                <Link className="link" to="/">Shop Now</Link>
            </div>
            <hr />
            <div className="lower">
                <div>India At 75</div>
                <div>Quickreads</div>
                <div>Daily Digest</div>
                <div>Quiz</div>
                <div>Videos</div>
                <div>Photos</div>
                <div>Tech</div>
                <div>Business</div>
                <div>Sports</div>
                <div>Videos</div>
            </div>
            <hr />
        </>
    )
}

