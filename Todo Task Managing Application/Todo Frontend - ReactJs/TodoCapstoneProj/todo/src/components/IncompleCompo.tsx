import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface TodoStruc {
    todoTitle: string;
    todoDescription: string;
    todoCompleted: boolean;
}

const InComComponent = () => {
    const { id } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await axios.get<TodoStruc>("http://localhost:8080/todo/" + id);
            const { todoTitle, todoDescription } = response.data;

            const task = {
                "todoTitle": todoTitle,
                "todoDescription": todoDescription,
                "todoCompleted": false
            };

            await axios.put("http://localhost:8080/todo/" + id, task);
            navigator('/tasks');
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
        
        </>
    );
};

export default InComComponent;
