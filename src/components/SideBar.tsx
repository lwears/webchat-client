import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { User } from '../redux/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

interface Props {
  users: User[];
}

export default function SideBar({ users }: Props): React.ReactElement {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      {users.map((user) => {
        return (
          <ListItem key={user.id}>
            <ListItemAvatar>
              <Avatar>{user.username?.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={`${user.username}`} />
          </ListItem>
        );
      })}
    </List>
  );
}
