import React from "react";

export default (Component) => {
    const NewComponent = (props) => {
        console.log("HOCA", props);
        return (
            <Component
                A="这是一个高阶组件传递的A属性"
                {...props}
            />
        )
    }
    return NewComponent;
}