import {
  createMuiTheme,
} from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#aa00ff',
      contrastText: 'white',
    },
    secondary: {
      main: '#ea80fc',
    },
    text: {
      primary: '#aa00ff',
      secondary: 'white',
    },
  },
  typography: {
    fontFamily: [
      'proxima-nova',
      'helvetica',
      'arial',
      'sans-serif',
    ].join(','),
    fontWeight: 400,
  },
});
