import React from "react"
import globe from "../images/globe.png"
export default function Header(){
    return(
        <div className="nav">
            <img src={globe} />
            <p>my travel journal</p>
        </div>
    )
}