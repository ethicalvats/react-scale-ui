import React from "react";
import styled from "styled-components";

const TextField = ({ label, value, className }) => {
    return (
        <div className={className}>
            <div className="textfield-label">{label}</div>
            <div>{value}</div>
        </div>
    )
}

export default styled(TextField)`
margin: 12px 0;
display: flex;
justify-content: space-between;
div{
    flex:1;
    color: #666;
}
`