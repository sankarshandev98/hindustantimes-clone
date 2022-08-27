import Main_left from "./Main_Left"
import "./Main.css";

export default function Main() {
    return (
        <div className="MainLeft">
            <h3 className="leftheading">LATEST NEWS</h3>
            <Main_left />
            <p className="leftlink">View All</p>
        </div >
    )
}