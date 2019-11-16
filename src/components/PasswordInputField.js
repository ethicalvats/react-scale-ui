import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextInputField from "./TextInputField";

const PasswordInputField = ({ onChangeEvt, className }) => {
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [isValid, setIsvalid] = useState(true)

    useEffect(()=>{
        if(password !== ""){
            onChangeEvt({
                val: password,
                isValid
            })
        }
    }, [isValid])

    const handleChange = (res, confirm) => {
        if(confirm){
            if(password !== "") setIsvalid(res.val === password)
            setCpassword(res.val)
        }else{
            if(cpassword !== "") setIsvalid(res.val === cpassword)
            setPassword(res.val)
        }
    }

    return (
        <>
            <TextInputField
                label="Password"
                type="password"
                onChangeEvt={res => handleChange(res, false)} isValidFromParent={isValid} />
            <TextInputField
                label="Confirm Password"
                type="password"
                onChangeEvt={res => handleChange(res, true)} isValidFromParent={isValid} />
        </>
    )
}

export default styled(PasswordInputField)`

`