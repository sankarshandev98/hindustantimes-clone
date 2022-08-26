import React from "react"
import { Route, Routes } from "react-router-dom";


import Trial from "./trial"

export default function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path="/trial" element={<Trial />} />
                <Route path="/trial" element={<Trial />} />
            </Routes>
        </>
    )
}