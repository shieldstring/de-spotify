import React from 'react';
import "./Banner.css";
import { useDataLayerValue } from "./DataLayer";

function Banner() {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="banner">
            <img src={discover_weekly?.images[0].url} alt="" />
            <div className="banner_Text">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
            </div>
        </div>
    )
}

export default Banner;
