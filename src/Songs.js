import React from 'react';
import "./Songs.css";
import PlayCirleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDataLayerValue } from "./DataLayer";
import SongRow from "./SongRow";


function Songs() {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();


    return (
        <div className="songs">
            <div className="song_icons">
                <PlayCirleFilledIcon className="song_shuffle" />
                <FavouriteIcon fontSize="large" />
                <MoreHorizIcon />
            </div>

            {discover_weekly?.tracks.items.map(item => (
                <SongRow tracks={item.tracks} />
            )) }

        </div>
    )
}

export default Songs;
