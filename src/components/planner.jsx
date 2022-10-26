import React from "react";
import './planner.css'
import icon from "../images/landscape.png"

export const Planner = () => {
    return(
        <>
            <div className="main-div">
                <div className="head-titel">
                    <p>Make a bucket list and fill it with dreams that have no boundaries.</p>
                </div>
                <div className="filter">
                    <div className="filter-options ">
                        <img src={icon}/>
                        <p>Nature</p>
                    </div>
                    <div className="filter-options ">
                        <img src={icon}/>
                        <p>History</p>
                    </div>
                    <div className="filter-options ">
                        <img src={icon}/>
                        <p>Cities</p>
                    </div>
                    <div className="filter-options ">
                        <img src={icon}/>
                        <p>Adventure</p>
                    </div>
                    <div className="filter-options ">
                        <img src={icon}/>
                        <p>Reliion</p>
                    </div>
                </div>
            </div>
        </>
    )
}