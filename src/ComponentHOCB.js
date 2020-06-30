import React from "react";

export default (Component) => {
    const NewComponent = (props) => {
        console.log("HOCB", props);
        return (
            <Component
                B="这是一个高阶组件传递的B属性"
                {...props}
            />
        )
    }
    return NewComponent;
}