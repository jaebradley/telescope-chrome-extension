import {
  createMuiTheme,
} from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ea0adf',
      contrastText: 'white',
    },
    secondary: {
      main: '#d6fbea',
    },
    text: {
      primary: '#ea0adf',
      secondary: '#d6fbea',
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
