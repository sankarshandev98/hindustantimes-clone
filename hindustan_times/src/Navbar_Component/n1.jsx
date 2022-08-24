import React, { useState } from "react";
import axios from 'axios';
import "./N1.css"


const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://google-news1.p.rapidapi.com/list-languages',
    params: { country: 'IND' },
    headers: {
        'X-RapidAPI-Key': '8b0353fd73mshcf972e4faf00cd7p106126jsn458d898c1609',
        'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
export default function N1() {
    return (
        <div id="main">
            <h1 id="heading">hello</h1>
            <img src="https://www.hindustantimes.com/res/images/ht-logo.svg" alt="" />
        </div>
    )
}