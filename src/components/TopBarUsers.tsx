import React from 'react';
import { AppBar, makeStyles, Typography, Toolbar } from '@material-ui/core/';

const useStyles = makeStyles(() => ({
  appbar: {
    alignItems: 'center',
  },
}));

export default function TopBarUsers(): React.ReactElement {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary" className={classes.appbar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Users
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
