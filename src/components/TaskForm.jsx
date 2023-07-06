//Importar useContext
import { useState, useContext } from "react"

//Importar context Creado
import { TaskContext } from "../context/TaskContext"




function TaskForm() {
    const { createTask } = useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      createTask({ title, description });
  
      setTitle("");
      setDescription("");
    };
  
    return (
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-600 p-10 mb-4 flex flex-col justify-center items-center"
        >
          <h1 className="text-2xl font-bold text-white mb-3">Añadir tareas</h1>
          <input
            className="bg-slate-300 p-3 w-full mb-2"
            type="text"
            placeholder="Ingresa tu tarea"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
          />
          <textarea
            className="bg-slate-300 p-3 w-full mb-2"
            placeholder="Escribe la descripción de la tarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
        </form>
      </div>
    );
  }

export default TaskForm