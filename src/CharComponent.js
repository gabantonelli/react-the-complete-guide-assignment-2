import React from "react";

const charComponent = (props) => {
    const stile = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    };

    return (<div style={stile} onClick={props.click}>{props.letter}</div>);
}

export default charComponent;