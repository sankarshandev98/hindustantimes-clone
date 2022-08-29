import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import Latest from "./latest";

export default function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/late" element={<Latest />} />
                <Route path="/india" element={<Latest />} />
                <Route path="/World" element={<Latest />} />
                <Route path="/Kolkata" element={<Latest />} />
                <Route path="/Entertainment" element={<Latest />} />
                <Route path="/Cricket" element={<Latest />} />
                <Route path="/Lifestyle" element={<Latest />} />
                <Route path="/Astrology" element={<Latest />} />
                <Route path="/editorials" element={<Latest />} />
                <Route path="/for-you" element={<Latest />} />
            </Routes>
        </>
    )
}