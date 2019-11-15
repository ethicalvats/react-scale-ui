/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
`;

export default function NotFound() {
  return (
    <article>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    </article>
  );
}
