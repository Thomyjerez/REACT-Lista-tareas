import React from "react";
import ItemTarea from "./ItemTarea";
import ListGroup from "react-bootstrap/ListGroup";
// import {ListGroup, Button} from 'react-bootstrap'; (cuando quiero traer varios elementos de bootstrap)
// puedo utilizar props entre parentesis o el nombre del props
const ListaTarea = ({arregloTarea}) => {

  return (
    <ListGroup>
        {
            arregloTarea.map((tarea, posicion)=> <ItemTarea key={posicion} nombreTarea ={tarea}></ItemTarea>)
        }
      {/*utilizamos key porque cada child tiene que tener un nombre distinto ,
      tarea representa cada elemento del arreglo, representa cada posicion 
      de ese elemento en el arreglo */}
    </ListGroup>
  );
};

export default ListaTarea;
