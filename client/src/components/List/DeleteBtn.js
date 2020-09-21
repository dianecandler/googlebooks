import React from "react";

 function DeleteBtn(props) {
    return (
        <button {...props} className="btn btn-danger float-left">
            {props.children}
        </button>
    )
}

export DeleteBtn();