import React from "react";
import ItemTarea from "./ItemTarea";
import ListGroup from "react-bootstrap/ListGroup";
// import {ListGroup, Button} from 'react-bootstrap'; (cuando quiero traer varios elementos de bootstrap)
// puedo utilizar props entre parentesis o el nombre del props
const ListaTarea = ({arregloTarea, borrarTarea}) => {

  return (
    <ListGroup>
        {
            arregloTarea.map((tarea, posicion)=> <ItemTarea key={posicion} nombreTarea ={tarea} borrarTarea={borrarTarea}></ItemTarea>)
        }
      {/*utilizamos key porque cada child tiene que tener un nombre distinto ,
      tarea representa cada elemento del arreglo, representa cada posicion 
      de ese elemento en el arreglo */}
      {/* key y nombreTarea son props */}
    </ListGroup>
  );
};

export default ListaTarea;
