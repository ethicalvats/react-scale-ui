import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TextInputField = ({ label, type, onChangeEvt, className, isValidFromParent }) => {

    const [state, setState] = useState("")
    const [isValid, setIsValid] = useState(true)

    useEffect(() => {
        if (isValidFromParent !== undefined) {
            setIsValid(isValidFromParent)
        }
    }, [isValidFromParent])

    useEffect(() => {
        if (state !== "") {
            onChangeEvt({
                val: state,
                isValid
            })
        }
    }, [isValid])

    const validateIt = (label, value) => {
        switch (label) {
            case "Email":
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    setIsValid(true)
                } else {
                    setIsValid(false)
                }
                break;
            default:
                setIsValid(true)
                break;
        }
    }

    const handleTextChange = e => {
        let val = e.target.value
        setState(val)
        validateIt(label, val)
        return onChangeEvt({
            val,
            isValid
        })
    }

    return (
        <fieldset className={className}>
            <label>{label}</label>
            <input className={isValid ? null : 'error'} type={type} onChange={e => handleTextChange(e)} />
        </fieldset>
    )
}

export default styled(TextInputField)`

`