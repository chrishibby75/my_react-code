import React from "react";
import Section from "../Section/Section";
import TaskForm from "../TaskForm/TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = props => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

    const createTask = (taskText, taskData) => {
        const generatedId = taskData.name;
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
    };

    const enterTaskHandler = taskText => {
        sendTaskRequest({
            url: "https://custom-hooks-tasks-7ff27-default-rtdb.firebaseio.com/tasks.json",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: { text: taskText }
        }, createTask.bind(null, taskText)
        );
    };

    return (
        <Section>
            <TaskForm onEnteredTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;