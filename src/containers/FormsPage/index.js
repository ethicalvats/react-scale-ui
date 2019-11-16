import React from "react";
import styled from "styled-components";
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TextInputField from "../../components/TextInputField";
import PasswordInputField from "../../components/PasswordInputField";

class FormsPage extends React.Component {
    state
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            isValid: true,
            isDisabled: true
        }
    }

    handleTextChange = (res, label) => {
        let values = {}
        values[label] = res.val
        values['isValid'] = res.isValid
        this.checkDisabled(res.isValid)
        this.setState({ ...values })
    }

    checkDisabled = (valid) => {
        if (!valid) {
            this.setState({
                isDisabled: true
            })
        } else {
            const { email, password, username } = this.state
            if (email === "" || password === "" || username === "") {
                this.setState({
                    isDisabled: true
                })
            } else {
                this.setState({
                    isDisabled: false
                })
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password, username } = this.state
        this.props.onNext({ email, username, password })
    }

    render() {
        const { isValid, isDisabled } = this.state
        return <div className={this.props.className}>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="form-header">
                    {isValid ? <div className="form-message"><FormattedMessage {...messages.instruction} /></div> : <div className="form-message--error"><FormattedMessage {...messages.error} /></div>}
                </div>
                <TextInputField
                    label="Username"
                    type="text"
                    onChangeEvt={(res) => this.handleTextChange(res, 'username')} />
                <TextInputField
                    label="Email"
                    type="text"
                    onChangeEvt={res => this.handleTextChange(res, 'email')} />
                <PasswordInputField
                    onChangeEvt={res => this.handleTextChange(res, 'password')} />
                <div className="form-footer">
                    <fieldset>
                        <input disabled={isDisabled} type="submit" value="Next" />
                    </fieldset>
                </div>
            </form>
            <div className="pair_programming">
                <img src="pair_programming.svg" />
            </div>
        </div>
    }
}

export default styled(FormsPage)`
    max-width: 500px;
    padding:16px;
    form{
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 12px -1px #ddd;
        padding: 16px;
        background-color:  #fff;
        border-radius: 4px;
        fieldset{
            border:0;
            padding:0;
        }
        .form-header{
            min-height: 81px;
            border-bottom: 1px #f1f1f1 solid;
            margin-bottom: 40px;
            .form-message{
                background-color: #4c4c78;
                color: #fff;
                padding: 18px 10px;
                border-radius: 4px;
                border: 2px solid #474157;
                margin-bottom: 20px;
                font-family: monospace;
                animation: fadeIn 1s;
            }
            .form-message--error{
                background-color: #bf1a1a;
                color: #fff;
                padding: 18px 10px;
                border-radius: 4px;
                border: 2px solid #a71414;
                margin-bottom: 20px;
                font-family: monospace;
                animation: fadeIn 1s;
            }
        }
        .form-footer{
            padding-top: 20px;
            border-top: 1px #f1f1f1 solid;
            margin-top: 40px;
            input{
                background-color: rgb(62, 166, 255);
                color: #fff;
                border-radius: 4px;
                border: 0;
                box-shadow: 1px 1px 1px 0px #eee;
                padding: 10px 40px;
                font-size: 1.2em;
                :disabled{
                    background-color: rgba(62, 166, 255, 0.4);
                    :hover{
                        background-color: rgba(62, 166, 255, 0.4);
                        cursor: default;
                    }
                }
                :hover{
                    background-color: rgb(62, 133, 255);
                    cursor: pointer;
                }
            }
        }
    }
`