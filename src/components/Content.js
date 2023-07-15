import React from "react"
import pointer from "../images/pointer.png"

export default function Content(props) {
    return (
        <div className="card">
            <img src={props.card.img} />

            <div className="info">
                <div className="row">
                    <img className="pointer" src={pointer} alt="pointer" />
                    <p className="nation">{props.card.location}</p>
                    <p className="maps">View on Google maps</p>
                </div>
                
                <h3 className="title" >{props.card.title}</h3>
                
                <div className="date">{`${props.card.startDate}-${props.card.endDate}`}</div>
                
                <div className="description">{props.card.description}</div>
            </div>
        </div>
    )
}