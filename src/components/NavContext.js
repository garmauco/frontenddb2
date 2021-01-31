import {createContext, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export const Context = createContext();

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
}));

const NavContext = ({children}) => {
    const classes = useStyles()
    const [abrir, setAbrir] = useState(false)
    /*
    const desplegar = () =>{
        setAbrir(!abrir)
    }
    */
   return(
       <Context.Provider value={[abrir, setAbrir]}>
           <CssBaseline />
           <div className={classes.root}>
           {children}
           </div>
       </Context.Provider>
   )
}

export default NavContext
