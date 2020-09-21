import React from 'react';

export default function FormBtn(props) {
    return (
        <button {...props} className="btn btn-success float-right">
                {props.children}
        </button>
    )
}
