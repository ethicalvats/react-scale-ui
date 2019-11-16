import React from "react";
import styled from "styled-components";

const TextField = ({ label, value, className }) => {
    return (
        <fieldset className={className}>
            <label>{label}</label>
            <div>{value}</div>
        </fieldset>
    )
}

export default styled(TextField)`

`