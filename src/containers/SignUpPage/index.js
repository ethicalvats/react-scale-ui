import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Helmet } from "react-helmet";
import H1 from "../../components/H1";

export default function SignUpPage() {
  return (
    <article>
      <Helmet>
        <title>Signup</title> 
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </article>
  );
}
