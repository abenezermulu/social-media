import React from "react";
import './InfoCard.css'; 
import { UilPen } from '@iconscout/react-unicons'; 

const InfoCard = () => {
    return(
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen />
                </div>
            </div>

            <div className="info">
                <span><b>Status </b></span>
                <span>In relationship</span>
            </div>

            <div className="info">
                <span><b>Lives in </b></span>
                <span>Addis Ababa</span>
            </div>

            <div className="info">
                <span><b>Works at </b></span>
                <span>Google</span>
            </div>

            <button className="button logout-button">Log out</button>
        </div>
    )
}

export default InfoCard;