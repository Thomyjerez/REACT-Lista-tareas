import React from "react";
import ItemTarea from "./ItemTarea";
import ListGroup from "react-bootstrap/ListGroup";
// import {ListGroup, Button} from 'react-bootstrap'; (cuando quiero traer varios elementos de bootstrap)

const ListaTarea = () => {
  return (
    <ListGroup>
      <ItemTarea></ItemTarea>
    </ListGroup>
  );
};

export default ListaTarea;
