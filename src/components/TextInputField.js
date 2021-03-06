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
        let check
        switch (label) {
            case "Email":
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    setIsValid(true)
                    check = true
                } else {
                    setIsValid(false)
                    check = false
                }
                break;
            default:
                // setIsValid(true)
                check = true
                break;
        }
        return check
    }

    const handleTextChange = e => {
        let val = e.target.value
        setState(val)
        validateIt(label, val)
        return onChangeEvt({
            val,
            isValid: validateIt(label, val)
        })
    }

    return (
        <div className={isValid? className: `error ${className}` }>
            <div className="textinputfield-label">{label} *</div>
            <div>
            <input type={type} onChange={e => handleTextChange(e)} />
            </div>
        </div>
    )
}

export default styled(TextInputField)`
    margin: 12px 0;
    display: flex;
    justify-content: space-between;
    div{
        flex:1
    }
    .textinputfield-label{
        color: #666;
    }
    input{
        border:0
        border-bottom: 1px solid #ddd;
        font-size: 0.76em
        line-height:1    border: 1px solid #ddd;
        font-size: 0.76em;
        line-height: 1;
        width: 100%;
        padding: 4px;
        color: #999;
        box-sizing: border-box;
        :focus{
            outline: 0;
        }
    }
    &.error input{
        border-color: #bf1a1a
      }
      &.error .textinputfield-label{
          color:#bf1a1a
      }
`