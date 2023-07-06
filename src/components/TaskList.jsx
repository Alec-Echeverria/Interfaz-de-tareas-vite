//Importar useContext
import { useContext } from "react"

//Importar context Creado
import { TaskContext } from "../context/TaskContext"


import TaskCard from "./TaskCard";



function TaskList() {
    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return (
            <h1 className="text-white text-4xl font-bold text-center">Sin tareas</h1>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;
