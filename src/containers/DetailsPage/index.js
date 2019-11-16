import React from "react";
import { connect } from 'react-redux'
import { addUser } from "./actions";
import { withRouter } from "react-router";
import TextField from "../../components/TextField";

class DetailsPage extends React.Component{
    state
    constructor(props){
        super(props)
        this.state = {...props.data}
    }

    handleSubmit = () =>{
        const {dispatch, history} = this.props
        const { email, username, password} = this.state
        dispatch(addUser({ email, username, password}))
        history.push('/users')
    }

    render(){
        const { email, username, password} = this.state
        return <div>
            <div className='show-form-data'>
                <TextField 
                    label="Username"
                    value={username} />
                <TextField 
                    label="Email"
                    value={email} />
                <TextField 
                    label="Password"
                    value={password} />
                <fieldset>
                    <input type="button" value="Submit" onClick={() => this.handleSubmit()} />
                </fieldset>
            </div>
        </div>
    }
}

export default connect()(withRouter(DetailsPage))