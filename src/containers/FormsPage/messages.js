
import { defineMessages } from 'react-intl';

export const scope = 'scaleui.containers.FormsPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Sign Up Form',
  },
  error: {
    id: `${scope}.error`,
    defaultMessage: 'There is an error! \nPlease check email format is valid also password and confirm password should match.',
  },
});
