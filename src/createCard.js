import {React, useState } from "react";
const CreateCard = (props) => {
    let { location,deleteCard} = { ...props }
    let { id, name, info, image, price } = { ...location }
    const [readMore, setReadMore] = useState(true);
    return (
        <div className="card">
            <img src={image} />
            <div className="cardRow1">
                <div className="left">
                    <h2>{name}</h2>
                </div>
                <h2 className="right">$ {price}</h2>
            </div>
            {readMore ? <p>{`${info.substring(0, 200)}...`} <button className="noOutLine" onClick={() => { setReadMore(!readMore) }}>read more</button></p> : <p>{`${info}`} <button className="noOutLine" onClick={() => { setReadMore(!readMore) }}>show less</button></p>}
            <div className="buttonContainer">
                <button type="button" className="btn" onClick={() => {deleteCard(id)}}>
                    Not Intrest
                </button>
            </div>
        </div>
    )
}

export default CreateCard;