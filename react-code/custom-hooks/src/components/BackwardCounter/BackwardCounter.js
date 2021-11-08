import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import useCounter from "../../hooks/use-counter";

const BackwardCounter = props => {
    const counter = useCounter(false);

    return (
        <Card>
           {counter} 
        </Card>
    );
};

export default BackwardCounter;