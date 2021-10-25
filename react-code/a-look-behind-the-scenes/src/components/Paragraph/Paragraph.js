import React from "react";

const Paragraph = props => {
    console.log("Paragraph");
    return <p>{props.children}</p>
};

export default Paragraph;