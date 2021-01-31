import React, {useEffect, useState} from 'react'
import DataDept from '../../services/service'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const ListDept = () => {
    const [departaments, setDepartaments] = useState([]);
    useEffect(() => {
        retrieveDepartaments();//llamamos a la funcion 
    }, []);

    const retrieveDepartaments = () =>{
        DataDept.getAll()////Función para obtener todos los registros
        .then(response => {
            setDepartaments(response.data);//cargamos los registros en la variable departaments
            console.log(response.data)
        })
        .catch(e =>{
            console.log(e)
        })
    }
    return(
        <>  
            <List dense={false}>
            {departaments && departaments.map((departament) => (
                <ListItem key={departament.CODE}>
                  <ListItemText
                    primary={departament.NAME}
                  />
                </ListItem>
            ))}
            </List>
        </>
    )
}

export default ListDept;