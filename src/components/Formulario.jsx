import ListaTarea from "./ListaTarea";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
  // busco los datos del locastorage
  const tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareaKey')) || [];
  // aqui va la logica
  const [tarea, setTarea] = useState(""); //para guardar la tarea
  const [arregloTarea, setArregloTarea] = useState(tareasLocalStorage); //para guardar lo del arreglo
  // ciclo de vida
  useEffect(()=>{
    //  console.log('Prueba de ciclo de vida del componente')
    //  guardar en localstorage
    localStorage.setItem('arregloTareaKey', JSON.stringify(arregloTarea))

  }, [arregloTarea])

  const handleSubmit = (e) => {
    e.preventDefault();
    // no podemos usar el push con el state
    // operador spreed(...) para agregar nuevas tareas asi concatena las tareas mientras las voy agregando
    setArregloTarea([...arregloTarea, tarea]);
    // limpiar el input
    setTarea('');
  };

  const borrarTarea = (nombre)=>{
    let arregloModificado = arregloTarea.filter((item)=>(item !== nombre))
    // actualizo el state
    setArregloTarea(arregloModificado);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => {
              setTarea(e.target.value) }}
              value = {tarea}/>
          {/* // lo que escribo en el input lo guarda en el state Tarea */}
          <Button variant="success" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTarea={arregloTarea} borrarTarea={borrarTarea}></ListaTarea>
    </div>
  );
};

export default Formulario;
