import React from "react";

const validationComponent = (props) => {
    let message = null;

    if (props.length < 5) {
        message = (<p>Message too short!</p>)
    } else if (props.length > 40) {
        message = (<p>Message too long!</p>)
    }

    return message;
}

export default validationComponent;