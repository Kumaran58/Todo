import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface TodoStruc {
    todoTitle: string;
    todoDescription: string;
    todoCompleted: boolean;
}

const TaskComponent: React.FC = () => {
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const [todoCompleted, setTodoCompleted] = useState(false);
    const { id } = useParams();
    const navigator = useNavigate();


    const [errors, setErrors] = useState({
        todoTitle: '',
        todoDescription: '',
        todoCompleted: ''
    });

    useEffect(() => {
        if (id) {
            getTask();
        }
    }, [id]);

    async function getTask() {
        try {
            const response = await axios.get<TodoStruc>("http://localhost:8080/todo/" + id);
            setTodoTitle(response.data["todoTitle"]);
            setTodoDescription(response.data["todoDescription"]);
            setTodoCompleted(response.data["todoCompleted"]);
        } catch (error) {
            console.log(error);
        }
    }

    function saveOrUpdateTask(e: React.FormEvent) {
        e.preventDefault();
        if (validateStruc()) {
            const task = {
                todoTitle, 
                todoDescription, 
                todoCompleted 
            };

            if (id) {
                updateTask(id, task);
            } else {
                addTask(task);
            }
        }
    }

    async function addTask(task: TodoStruc) {
        try {
            await axios.post("http://localhost:8080/todo", task);
            navigator('/tasks');

        } catch (error) {
            console.log(error);
        }
    }

    async function updateTask(id: String, task: TodoStruc) {
        try {
            await axios.put("http://localhost:8080/todo/"+id, task);
            navigator('/tasks');

        } catch (error) {
            console.log(error);
        }

    }

    function validateStruc() {
        var correctstruc = true;
        const errorsCopy = { ...errors };

        if (!todoTitle.trim()) {
            errorsCopy.todoTitle = "Empty Title !";
            correctstruc = false;
        } else {
            errorsCopy.todoTitle = '';
        }

        if (!todoDescription.trim()) {
            errorsCopy.todoDescription = "Empty Description !";
            correctstruc = false;
        } else {
            errorsCopy.todoDescription = '';
        }

        setErrors(errorsCopy);
        return correctstruc;
    }

    return (
        <div className='container'>
            <div className='row'>
                
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add / Update Task</h2>
                    <div className='card-body'>
                        <form onSubmit={saveOrUpdateTask}>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Title</label>
                                <input type='text' placeholder='Enter Task title' value={todoTitle} className={"form-control" +(errors.todoTitle ? ' is-invalid' : '')}
                                    onChange={(e) => setTodoTitle(e.target.value)}
                                />
                                {errors.todoTitle && <div className='invalid-feedback'>{errors.todoTitle}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Description</label>
                                <input type='text' placeholder='Enter Task Description' value={todoDescription} className={"form-control"+ (errors.todoDescription ? ' is-invalid' : '')}
                                    onChange={(e) => setTodoDescription(e.target.value)}
                                />
                                {errors.todoDescription && <div className='invalid-feedback'>{errors.todoDescription}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Task Completed Status</label>
                                <select
                                    value={todoCompleted.toString()} className={"form-control"}
                                    onChange={(e) => setTodoCompleted(e.target.value == 'true')}
                                >
                                    <option value='true'>Completed</option>
                                    <option value='false' selected>Not Completed</option>
                                </select>
                                
                            </div>
                            <br />

                            <button className='btn btn-success' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskComponent;


