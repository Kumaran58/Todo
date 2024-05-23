import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TodoStruc {
    id: number;
    todoTitle: string;
    todoDescription: string;
    todoCompleted: boolean;
}

const ListTodo: React.FC = () => {
    const [tasks, setTasks] = useState<TodoStruc[]>([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllTask();
    }, []);

    async function getAllTask() {
        try {
            const response = await axios.get<TodoStruc[]>("http://localhost:8080/todo");
            setTasks(response.data);
        } catch (error) {
            console.log("Error fetching tasks:", error);
        }
    }

    function addNewTask() {
        navigator("/add-task");
    }

    function updateTask(id: number) {
        navigator("/edit-task/"+ id);
    }

    function deleteTask(id: number) {
        navigator("/delete-task/"+id);
    }

    function complete(id: number) {
        navigator("/com-task/"+id);
    }

    function incomplete(id: number) {
        navigator("/incom-task/"+id);
    }


    return (
        <>
            <div className="containered">
                <h2 className="heading text-center">List Of ToDo Tasks</h2>
                <br />
                <button onClick={addNewTask} className="btn btn-primary"> Add Task </button>
                <br />
                <br />
                <table className="table">
                    <thead className="theadtag">
                        <tr>
                            <th>Task Title</th>
                            <th>Task Description</th>
                            <th>Task Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((temp) => (
                            <tr key={temp.id}>
                                <td>{temp.todoTitle}</td>
                                <td>{temp.todoDescription}</td>
                                <td>{temp.todoCompleted ? 'Yes':'No'}</td>
                                <td className="up">
                                    <button className="btn btn-info" onClick={() => updateTask(temp.id)}> Update </button>
                                    <button className="btn btn-danger" onClick={() => deleteTask(temp.id)}style={{marginLeft:"10px"}}> Delete </button>
                                    <button className="btn btn-success" onClick={() => complete(temp.id)} style={{marginLeft:"10px"}}> Complete </button>
                                    <button className="btn btn-warning" onClick={() => incomplete(temp.id)} style={{marginLeft:"10px"}}> InComplete </button>
                                    
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ListTodo;
