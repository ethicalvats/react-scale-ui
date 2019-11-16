import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from "styled-components";
import messages from './messages';
import { Helmet } from "react-helmet";
import H1 from "../../components/H1";
import { connect } from 'react-redux'
import UserList from '../../components/UserList';

const UserListPage = ({ users, className }) => {
  return (
    <article className={className}>
      <Helmet>
        <title>User Listing</title>
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <div>
        {users.length > 0? users.map((u, i) => <UserList key={i} username={u.username} email={u.email} />): <div className="empty-users">
          <img src="avatar.png" />
          <div><FormattedMessage {...messages.empty} /></div>
        </div>}
      </div>
    </article>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.global
  }
}

const UserListPageConnected = connect(mapStateToProps)(UserListPage)

export default styled(UserListPageConnected)`
color: #666;
  & > div{
    display: flex;
    .empty-users{
      display: flex;
      flex-direction: column;
      text-align: center;
      opacity: 0.3;
      margin: 40px auto;
      & > div{
        margin-top: 20px;
      }
    }
  }
`
