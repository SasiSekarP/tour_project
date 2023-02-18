import React from "react";
const CreateCard = (props) => {
    let { location,deleteCard} = { ...props }
    let { id, name, info, image, price } = { ...location }
    return (
        <div className="card">
            <img src={image} alt={name}/>
            <div className="cardRow1">
                <div className="left">
                    <h2>{name}</h2>
                </div>
                <h2 className="right">$ {price}</h2>
            </div>
            <p>{info}</p>
            <div className="buttonContainer">
                <button type="button" className="btn" onClick={() => {deleteCard(id)}}>
                    Not Intrest
                </button>
            </div>
        </div>
    )
}

export default CreateCard;
