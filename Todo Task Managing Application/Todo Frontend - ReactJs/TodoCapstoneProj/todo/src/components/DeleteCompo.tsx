import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteComponent = () => {
    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        deleteTask(id);
    }, [id]);

    async function deleteTask(id: any) {
        try {
            const response = await axios.delete("http://localhost:8080/todo/" + id);
            if (response.status === 200) {
                alert("Task deleted successfully");
                navigator("/tasks");
            }
        } catch (error) {
            console.log("Error deleting task:", error);
        }
    }

    return null;
};

export default DeleteComponent;
