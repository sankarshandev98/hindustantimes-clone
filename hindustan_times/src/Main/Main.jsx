import C1 from "../Center_Main/C1";
import C2 from "../Center_Main/C2";
import L1 from "../Left_Main/L1";
import L2 from "../Left_Main/L2";
import R1 from "../Right_Main/R1";
import R2 from "../Right_Main/R2";
import "./Main.css";

export default function Main() {
    return (
        <>
            <div className="L1">
                <h3 className="leftheading">LATEST NEWS</h3>
                {/* <L1 /> */}
                <p className="leftlink">View All</p>
            </div >
            <div className="L1">
                <h3 className="leftheading">RECOMMENDED FOR YOU</h3>
                {/* <L2 /> */}
                <p className="leftlink">View All</p>
            </div>
            {/* <div className="MainCenter">
                <div className="MainC1">
                    <h3 className="Centerleftheading">TOP NEWS</h3>
                    <C1 />
                    <C2 />
                </div>
                <div className="MainC1">
                    <h3 className="Centerleftheading">DON'T MISS</h3>
                    <C1 />
                    <C2 />
                </div>
                <div className="MainC1">
                    <h3 className="Centerleftheading">ENTERTAINMENT</h3>
                    <C1 />
                    <C2 />
                </div>
                <div className="MainC1">
                    <h3 className="Centerleftheading">CRICKET</h3>
                    <C1 />
                    <C2 />
                </div>
                <div className="MainC1">
                    <h3 className="Centerleftheading">TRENDING</h3>
                    <C1 />
                    <C2 />
                </div>
                <div className="MainC1">
                    <h3 className="Centerleftheading">SHOP NOW</h3>
                    <C1 />
                    <C2 />
                </div>
                <div className="MainC1">
                    <h3 className="Centerleftheading">RECOMMENDED FOR YOU</h3>
                    <C1 />
                    <C2 />
                </div>
                <div className="MainC1">
                    <h3 className="Centerleftheading">LIFESTYLE</h3>
                    <C1 />
                    <C2 />
                </div>
                <div className="MainC1">
                    <h3 className="Centerleftheading">INDIA NEWS</h3>
                    <C1 />
                    <C2 />
                </div>
                <div className="MainC1">
                    <h3 className="Centerleftheading">OTT PLAY</h3>
                    <C1 />
                    <C2 />
                </div>
            </div> */}
            <div className="MainRight">
                <div className="MainR1">
                    <h3 className="R1heading">IN PICS</h3>
                    <R1 />
                    <R2 />
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
        </>
    )
}