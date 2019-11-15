import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Helmet } from "react-helmet";
import H1 from "../../components/H1";

export default function DashboardPage() {
  return (
    <article>
      <Helmet>
        <title>Dashboard</title> 
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </article>
  );
}
