import React from "react";
import styled from "styled-components";

const UserList = ({ id, email, className }) => {
    return (
        <div className={className}>
            <div>
                <label>{id}</label>
            </div>
            <div>
                <label>{email}</label>
            </div>
        </div>
    )
}

export default styled(UserList)`

`