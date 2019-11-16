import React from "react";
import { connect } from 'react-redux'
import styled from "styled-components";
import { addUser } from "./actions";
import { withRouter } from "react-router";
import TextField from "../../components/TextField";
import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
        return <div className={this.props.className}>
            <form>
            <div className="form-header">
                    <div className="form-message"><FormattedMessage {...messages.success} /></div>
                </div>
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
               <div className="form-footer">
               <fieldset>
                    <input type="button" value="Submit" onClick={() => this.handleSubmit()} />
                </fieldset>
               </div>
            </div>
            </form>
        </div>
    }
}

const DetailsPageWithRouterConnected = connect()(withRouter(DetailsPage))

export default styled(DetailsPageWithRouterConnected)`
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
            background-color: #3ab125;
            color: #fff;
            padding: 18px 10px;
            border-radius: 4px;
            border: 2px solid #319420;
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