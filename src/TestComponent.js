import React from "react";
import ComponentHOCA from "./ComponentHOCA";
import ComponentHOCB from "./ComponentHOCB";
import ComponentHOCC from "./ComponentHOCC";

const Test = (props) => {
    console.log("打印props", props);
    return (
        <div></div>
    )
}

export default ComponentHOCC(ComponentHOCB(ComponentHOCA(Test)));