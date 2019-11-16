
import { defineMessages } from 'react-intl';

export const scope = 'scaleui.containers.UserList';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'User Listing',
  },
  empty: {
    id: `${scope}.empty`,
    defaultMessage: 'There are no users!',
  },
});
