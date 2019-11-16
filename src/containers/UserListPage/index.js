import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Helmet } from "react-helmet";
import H1 from "../../components/H1";
import { connect } from 'react-redux'
import UserList from '../../components/UserList';

const UserListPage = ({ users }) => {
  return (
    <article>
      <Helmet>
        <title>User Listing</title>
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <div>
        {users.map((u, i) => <UserList key={i} id={u.id} email={u.email} />)}
      </div>
    </article>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.global
  }
}

export default connect(mapStateToProps)(UserListPage)
