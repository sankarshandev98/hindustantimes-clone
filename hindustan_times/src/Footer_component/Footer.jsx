import React from "react"
import F1 from "./F1"
import F2 from "./F2"
import F3 from "./F3"
import "./Footer.css"

export default function Footer() {
    return (
        <>
            <div className="Footerblue">
                <F1 />
                <F2 />
            </div>
            <div className="Footernavy">
                <F3 />
            </div>
        </>
    )
}