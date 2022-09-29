import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({nombreTarea, borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}
      <Button variant="danger" onClick={()=>(borrarTarea(nombreTarea))}>Borrar</Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
