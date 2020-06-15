import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography, Button, Toolbar, Box } from '@material-ui/core';

interface TopBarChatProps {
  handleLogoff: () => void;
}

export default function TopBarChat(props: TopBarChatProps): React.ReactElement {
  const { handleLogoff } = props;

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          flexGrow={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" color="inherit">
            Chat Window
          </Typography>
          <Button variant="contained" color="primary" onClick={handleLogoff}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
