import React from "react";

export default (Component) => {
    const NewComponent = (props) => {
        console.log("HOCC", props);
        return (
            <Component
                C="这是一个高阶组件传递的C属性"
                {...props}
            />
        )
    }
    return NewComponent;
}