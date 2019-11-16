import React from "react";
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

    checkDisabled = (valid) =>{
        if(!valid){
            this.setState({
                isDisabled: true
            })
        }else{
            const { email, password, username } = this.state
            if(email === "" || password === "" || username === ""){
                this.setState({
                    isDisabled: true
                })
            }else{
                this.setState({
                    isDisabled: false
                })
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password, username } = this.state
        this.props.onNext({email, username, password})
    }

    render() {
        const { isValid, isDisabled } = this.state
        return <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <fieldset style={{color:'red'}}><pre>{isValid ? null : <FormattedMessage {...messages.error} />}</pre></fieldset>
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
                <fieldset>
                    <input disabled={isDisabled} type="submit" value="Next" />
                </fieldset>
            </form>
        </div>
    }
}

export default FormsPage