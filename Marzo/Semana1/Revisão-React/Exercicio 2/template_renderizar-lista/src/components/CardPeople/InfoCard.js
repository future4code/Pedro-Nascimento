import React from 'react';
import "./styles.css"

const infoCard = (props) => {
    return (
        <div className='cards'>
            <li>{props.name}</li>
            <li>{props.height}</li>
            <li>{props.hair_color}</li>
            <li>{props.skin_color}</li>
            <li>{props.eye_color}</li>
            <li>{props.birth_year}</li>
            <li>{props.gender}</li>
        </div>
    )
}

export default infoCard;
