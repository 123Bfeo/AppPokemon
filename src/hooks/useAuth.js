//Este hooks lo que hace es acceder al nuestro context y extraer el value y devolverlo
//importar de react useContext
import {useContext} from 'react';
//importar el contexto creado
import {AuthContext} from '../context/AuthContext';

//extraemos la informacion y la retornamos
export default ()=>useContext(AuthContext);
