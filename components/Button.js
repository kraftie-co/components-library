import React from 'react';

export function Button(props) {
    return (
        <button className='button'>
            <h2 className='title'>{props.title}</h2>
        </button>
    );
}