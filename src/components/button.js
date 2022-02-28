import React from "react";

function Button(props) {
    return <button onClick={props.click}>{props.name}</button>;
}

export default Button;