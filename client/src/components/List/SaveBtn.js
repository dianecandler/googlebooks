import React from 'react';

export function SaveBtn() {
    return (
        <button {...props} className="btn btn-success float-left">
       {props.children}            
        </button>
    )
}
