import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from "styled-components";
import messages from './messages';
import { Helmet } from "react-helmet";
import H1 from "../../components/H1";
import { connect } from 'react-redux'

const DashboardPage = ({users, className}) => {
  return (
    <article className={className}>
      <Helmet>
        <title>Dashboard</title> 
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <div>
        <div className="num">
        {users.length}
        </div>
      <label><FormattedMessage {...messages.metric} /></label>
      </div>
    </article>
  );
}

const mapStateToProps = (state) => {
  return {
      users: state.global
  }
}

const DashboardPageConnected = connect(mapStateToProps)(DashboardPage)

export default styled(DashboardPageConnected)`
& > div{
    box-shadow: 0px 0px 12px -1px #ddd;
    padding: 16px;
    background-color:  #fff;
    border-radius: 4px;
    margin-right: 40px;
    margin-bottom: 40px;
    width: 30%
    min-height: 150px;
    text-align: center
    color:#999;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .num{
      color:#4c4c78;
      font-size: 5em;
    }
}
`
