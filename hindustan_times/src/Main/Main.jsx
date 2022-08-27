import L1 from "../Left_Main/L1";
import L2 from "../Left_Main/L2";
import "./Main.css";

export default function Main() {
    return (
        <>
            <div className="L1">
                <h3 className="leftheading">LATEST NEWS</h3>
                <L1 />
                <p className="leftlink">View All</p>
            </div >
            <div className="L1">
                <h3 className="leftheading">LATEST NEWS</h3>
                <L2 />
                <p className="leftlink">View All</p>
            </div>
        </>

    )
}