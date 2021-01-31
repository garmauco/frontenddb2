import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx'

const drawerWidth=240
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },
}));

export default function NavBar(props) {
  const classes = useStyles();
  return (
      <AppBar position="fixed"
        className={clsx(classes.appBar, {
            [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => props.openNav()}
                edge="start"
                className={clsx(classes.menuButton, props.open && classes.hide)}
            >
                <MenuIcon />
            </IconButton>
          <Typography variant="h6" className={classes.title}>
            Departamentos
          </Typography>
          
        </Toolbar>
      </AppBar>
  );
}