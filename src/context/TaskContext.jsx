import { createContext, useState, useEffect } from "react"
import  data from "../data/task.json";


export const TaskContext = createContext()

export function TaskcontextProvider(props) {

    const [tasks, setTasks] = useState([]);

    //crear tareas - para recibir del form
    function createTask(task) {
        const newTask = {
            id: tasks.length,
            title: task.title,
            description: task.description
        }
        setTasks([...tasks, newTask])
    }

    function deleteTask(taskId) {
        console.log(taskId)

        //renderizamos el nuevo estado del hock sin el eliminado
        setTasks(tasks.filter(task => task.id !== taskId))

    }

    //Leer Json de tareas
    useEffect(() => {
        setTasks(data)
    }, [])


    /*
    Si fuera Un Json traido con HTTP
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setTask(data))
        .catch(error => {
          console.error("Error al obtener el archivo JSON:", error);
        });
    }, []);
    */

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
