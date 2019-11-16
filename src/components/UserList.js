import React from "react";
import styled from "styled-components";

const UserList = ({ username, email, className }) => {
    return (
        <div className={className}>
            <div>
                <img src="avatar.png" />
            </div>
            <div>
                <label>{username}</label>
            </div>
            <div>
                <label>{email}</label>
            </div>
        </div>
    )
}

export default styled(UserList)`
display: flex;
text-align: center;
    flex-direction: column;
    box-shadow: 0px 0px 12px -1px #ddd;
    padding: 16px;
    background-color:  #fff;
    border-radius: 4px;
    margin-right: 40px;
    margin-bottom: 40px;
    min-width: 15%;
    min-height: 240px;
    img{
        max-width: 80%;
    }
    & > div{
        margin: 10px auto;
    }
    div:nth-child(2){
        text-transform: uppercase;
    }
    div:last-child{
        color: #999;
    }
`