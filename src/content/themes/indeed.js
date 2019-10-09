import {
  createMuiTheme,
} from '@material-ui/core/styles';

import baseTheme from './baseConfiguration';

export default createMuiTheme(
  {
    ...baseTheme,
    ...{
      overrides: {
        MuiTooltip: {
          tooltip: {
            fontSize: '1em',
          },
        },
      },
    },
    typography: {
      fontSize: 10,
    },
  },
);
