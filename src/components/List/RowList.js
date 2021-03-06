import React, { createRef, useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import MovieItem from "../MovieItem";
import './RowList.scss';
import Flickity from "flickity";
import namava from "../../utils/Namava";

const fetchData = async (setItems, setLoading, setError) => {
    setLoading(true);
    let {data} = await namava.get('api/v1.0/post-groups/1263/medias?pi=1&ps=20');
    setLoading(false);
    if(data['succeeded'] === true) {
        setItems(data['result']);
        console.log(data)
    }
}

const RowList = ({className, data}) => {

    let flickityRef = createRef();
    let [items, setItems] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);
    useEffect(() => {
        if(items.length === 0 && loading === false && error === false) {
            fetchData(setItems, setLoading, setError)
        }
    },[loading, items.length]);

    useEffect(() => {
        let flickityHandler = undefined;
        if (flickityRef.current && flickityRef.current.querySelector('.row')){
            flickityHandler = new Flickity(flickityRef.current.querySelector('.row'),{
                contain: true,
                pageDots: false,
                prevNextButtons: false,
                cellAlign: 'right',
                rightToLeft: true,
                groupCells: true
            });
            
        }


    
        return () => {
            if (flickityHandler) {
                flickityHandler.remove();
            }
        }
    })


    return (
        <div className={`row-list col-12 p-0 ${className}`}>
            <div className="row-title">
                <h3>Special</h3>
                <Link to={"#"} className="more-link">
                    <span>View All </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="40" viewBox="10 0 20 40"
                         className="t-icon-0-1-107">
                        <path className="svg-c1"
                              d="M14.77 18.793c0-.493.196-.967.545-1.315l6.2-6.2a1.86 1.86 0 0 1 2.626 2.633l-4.88 4.882 4.88 4.88a1.86 1.86 0 0 1-2.63 2.63l-6.2-6.2c-.347-.348-.54-.82-.54-1.31z"
                              style={{transform: "translateY(2px)"}}></path>
                    </svg>
                </Link>
            </div>
            <div className="list-container" ref={flickityRef}>
              {(items.length > 0 && loading === false) &&(
                  <div className="row">
                      {items.map(item => (<MovieItem key={`row-list-item-${item['id']}`} item={item}/>))}
                  </div>
              )}
            </div>
        </div>
    )
}

export default RowList;