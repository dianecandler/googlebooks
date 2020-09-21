import React from "react";

export default function DeleteBtn(props) {
    return (
        <button {...props} className="btn btn-danger float-left  mr-2">
            {props.children}
        </button>
    )
}

