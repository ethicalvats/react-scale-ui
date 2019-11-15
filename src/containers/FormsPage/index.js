import React from "react";
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class FormsPage extends React.Component {
    state
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            cpassword: '',
            error: false
        }
    }

    ValidateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    }

    handleTextChange = (evt, label) => {
        let values = {}
        values[label] = evt.target.value
        this.setState({ ...values })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { email, password, cpassword, username } = this.state
        if (!this.ValidateEmail(email) || password !== cpassword){
            this.setState({
                error:true
            })
        }else{
            this.setState({
                error: false
            })
            this.props.onNext({email, username, password})
        }
    }

    render() {
        const { error, username, email, password, cpassword } = this.state
        return <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <fieldset style={{color:'red'}}><pre>{error ? <FormattedMessage {...messages.error} /> : null}</pre></fieldset>
                <fieldset>
                    <label>Username</label>
                    <input onChange={e => this.handleTextChange(e, 'username')} value={username} />
                </fieldset>
                <fieldset>
                    <label>Email</label>
                    <input onChange={e => this.handleTextChange(e, 'email')} value={email} />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <input onChange={e => this.handleTextChange(e, 'password')} value={password} />
                </fieldset>
                <fieldset>
                    <label>Confirm Password</label>
                    <input onChange={e => this.handleTextChange(e, 'cpassword')} value={cpassword} />
                </fieldset>
                <fieldset>
                    <input type="submit" value="Next" />
                </fieldset>
            </form>
        </div>
    }
}

export default FormsPage