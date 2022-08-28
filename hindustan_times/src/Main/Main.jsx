import C1 from "../Center_Main/C1";
import C2 from "../Center_Main/C2";
// import L1 from "../Left_Main/L1";
// import L2 from "../Left_Main/L2";
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
            <div>
                <C2 />
            </div>
        </>
    )
}