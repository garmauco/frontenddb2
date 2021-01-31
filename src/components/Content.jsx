import React, {useContext} from 'react'
import { Switch, Route, Link } from "react-router-dom";
import {makeStyles, Typography} from '@material-ui/core'
import clsx from 'clsx'
import {Context} from './NavContext'
import ListDept from './departaments/ListDept'


const drawerWidth=240
const useStyles = makeStyles(theme =>({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
}))

function Content() {
    const [abrir, setAbrir] = useContext(Context)
    const classes = useStyles()
    return (
        <main className={clsx(classes.content, {
            [classes.contentShift]: abrir,
          })}>
            <div className={classes.drawerHeader} />
            <Typography variant="h2" color="initial">Departamentos</Typography>
        <Switch>
          <Route exact path={["/list", "/departaments"]} component={ListDept} />
          {/* <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Switch>
        </main>
    )
}

export default Content
