import React from 'react'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/FormatListNumbered';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme)  => ({
    LinkText:{
        textDecoration:'none',
        color:'rgba(0, 0, 0, 0.87)'
    }
}))

export default function ListDrawer() {
    const classes= useStyles()
 return (
     <>
        <Divider />
        <List>
            <Link to={"/list"} className={classes.LinkText}>
                <ListItem button key="Listar">
                    <ListItemIcon><ListIcon /></ListItemIcon>
                    <ListItemText primary="Listar" />  
                </ListItem>
            </Link>
            <Link to={"/add"} className={classes.LinkText}>
                <ListItem button key="Agregar"> 
                    <ListItemIcon><AddIcon /></ListItemIcon>  
                    <ListItemText primary="Agregar" />
                </ListItem>
            </Link>
            <Link to={"/edit"} className={classes.LinkText}>
                <ListItem button key="Editar">
                    <ListItemIcon><EditIcon /></ListItemIcon>
                    <ListItemText primary="Editar" />  
                </ListItem>
            </Link>
            <Link to={"/delete"} className={classes.LinkText}>
                <ListItem button key="Eliminar">
                    <ListItemIcon><DeleteIcon /></ListItemIcon>
                    <ListItemText primary="Eliminar" />  
                </ListItem>
            </Link>
    
        </List>
    </>
    )
}