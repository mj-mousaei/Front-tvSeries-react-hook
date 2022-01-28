import React from "react";
import { getNamavaUrl } from "../utils/Functions";
import './MovieItem.scss'

const MovieItem = ({item}) => {
    return (
        <div className="movie-item">
            <div className="item-image">
                <img src={getNamavaUrl(item['imageUrl'])}
                alt={item['caption']}/>
            </div>
            <div className="item-title">
                 {item['caption']}
            </div>

        </div>
    )
}

export default MovieItem;