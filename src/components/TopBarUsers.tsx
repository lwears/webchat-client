import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Toolbar } from '@material-ui/core';

export default function TopBarUsers(): React.ReactElement {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Users
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
