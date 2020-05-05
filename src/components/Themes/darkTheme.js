import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { green, grey, red, yellow, orange } from '@material-ui/core/colors';

export const darkTheme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: orange,
    type: 'dark',
  },
  status: {
    good: green,
    okay: yellow,
    poor: red,
  },
});

export default darkTheme;