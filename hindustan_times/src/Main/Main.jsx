import C1 from "../Center_Main/C1";
import C2 from "../Center_Main/C2";
import C3 from "../Center_Main/C3";
import C4 from "../Center_Main/C4";
import C5 from "../Center_Main/C5";
import C6 from "../Center_Main/C6";
import C7 from "../Center_Main/C7";
import C8 from "../Center_Main/C8";
import C9 from "../Center_Main/C9";
import C10 from "../Center_Main/C10";
import C11 from "../Center_Main/C11";
import C12 from "../Center_Main/C12";
import C13 from "../Center_Main/C13";
import C14 from "../Center_Main/C14";
import C15 from "../Center_Main/C15";
import C16 from "../Center_Main/C16";
import C17 from "../Center_Main/C17";
import C18 from "../Center_Main/C18";
import C19 from "../Center_Main/C19";
import C20 from "../Center_Main/C20";
import L1 from "../Left_Main/L1";
import L2 from "../Left_Main/L2";
import R1 from "../Right_Main/R1";
import R2 from "../Right_Main/R2";
import "./Main.css";

export default function Main() {
    return (
        <div className="MainContainer">
            <div className="MainLeft">
                <div className="MainL1">
                    <h3 className="L1heading">LATEST NEWS</h3>
                    <L1 />
                    <p className="leftlink">View All</p>
                </div >
                <div className="MainL1">
                    <h3 className="L1heading">RECOMMENDED FOR YOU</h3>
                    <L2 />
                    <p className="leftlink">View All</p>
                </div>
            </div>
            <div className="MainCenter">
                <div className="MainC1">
                    <h3 className="C1heading">TOP NEWS</h3>
                    <C1 />
                    <C2 />
                </div>
                <div className="MainC1">
                    <h3 className="C1heading">DON'T MISS</h3>
                    <C3 />
                    <C4 />
                </div>
                <div className="MainC1">
                    <h3 className="C1heading">ENTERTAINMENT</h3>
                    <C5 />
                    <C6 />
                </div>
                <div className="MainC1">
                    <h3 className="C1heading">CRICKET</h3>
                    <C7 />
                    <C8 />
                </div>
                <div className="MainC1">
                    <h3 className="C1heading">TRENDING</h3>
                    <C9 />
                    <C10 />
                </div>
                <div className="MainC1">
                    <h3 className="C1heading">SHOP NOW</h3>
                    <C11 />
                    <C12 />
                </div>
                <div className="MainC1">
                    <h3 className="C1heading">RECOMMENDED FOR YOU</h3>
                    <C13 />
                    <C14 />
                </div>
                <div className="MainC1">
                    <h3 className="C1heading">LIFESTYLE</h3>
                    <C15 />
                    <C16 />
                </div>
                <div className="MainC1">
                    <h3 className="C1heading">INDIA NEWS</h3>
                    <C17 />
                    <C18 />
                </div>
                <div className="MainC1">
                    <h3 className="C1heading">OTT PLAY</h3>
                    <C19 />
                    <C20 />
                </div>
            </div>
            <div className="MainRight">
                <div className="MainR1">
                    <h3 className="R1heading">IN PICS</h3>
                    <R1 />
                    <R2 />
                    <p className="rightlink">View All</p>
                </div>
                <div className="MainR1">
                    <h3 className="R1heading">MUST WATCH</h3>
                    <R1 />
                    <R2 />
                    <p className="rightlink">View All</p>
                </div>
                <div className="MainR1">
                    <h3 className="R1heading">IT'S VIRAL</h3>
                    <R1 />
                    <R2 />
                    <p className="rightlink">View All</p>
                </div>
            </div>
        </div>
    )
}