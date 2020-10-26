import React from 'react';
import "./Body.css";
import Header from "./Header";
import Banner from "./Banner";

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />
            <Banner />
        </div>
    )
}

export default Body
