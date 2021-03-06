/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Helmet } from "react-helmet";
import H1 from "../../components/H1";

export default function NotFound() {
  return (
    <article>
      <Helmet>
        <title>404</title> 
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </article>
  );
}
