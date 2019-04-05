import React from "react";

const validationComponent = (props) => {
    let message = null;

    if (props.length < 5) {
        message = (<p>Message too short!</p>)
    }

    return message;
}

export default validationComponent;