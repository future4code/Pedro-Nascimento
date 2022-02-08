import React from 'react';

export default function CardVideo(props) {

    return (
        <div onClick={props.onClick}>
            <img src={props.Video} alt="" />
            <h4>{props.titulo}</h4>
        </div>
    )
}
