import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { green, grey, orange, red, yellow } from '@material-ui/core/colors';

const lightTheme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: orange,
    type: 'light',
  },
  status: {
    good: green,
    okay: yellow,
    poor: red,
  },
});

export default lightTheme;