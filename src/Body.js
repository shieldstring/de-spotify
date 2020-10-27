import React from 'react';
import "./Body.css";
import Header from "./Header";
import Banner from "./Banner";
import Songs from "./Songs";

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <Banner />
            
            <Songs />
        </div>
    )
}

export default Body
