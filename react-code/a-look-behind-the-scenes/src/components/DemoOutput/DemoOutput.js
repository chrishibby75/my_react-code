import React from "react";
import Paragraph from "../Paragraph/Paragraph";

const DemoOutput = props => {
    console.log("Demo Output");
    return <Paragraph>{props.show ? "This is new!" : ""}</Paragraph>
};

export default React.memo(DemoOutput);