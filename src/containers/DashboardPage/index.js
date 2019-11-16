import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Helmet } from "react-helmet";
import H1 from "../../components/H1";
import { connect } from 'react-redux'

const DashboardPage = ({users}) => {
  return (
    <article>
      <Helmet>
        <title>Dashboard</title> 
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <label>Total number of users: {users.length}</label>
    </article>
  );
}

const mapStateToProps = (state) => {
  return {
      users: state.global
  }
}

export default connect(mapStateToProps)(DashboardPage)
