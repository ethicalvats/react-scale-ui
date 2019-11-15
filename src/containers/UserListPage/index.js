import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Helmet } from "react-helmet";
import H1 from "../../components/H1";

export default function UserListPage() {
  return (
    <article>
      <Helmet>
        <title>User Listing</title> 
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </article>
  );
}
