import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import Section from "../Section/Section";
import styles from  "./Tasks.module.css";

const Tasks = props => {
    let taskList = <h2>You have no tasks in your list.</h2>;
    if (props.items.length > 0) {
        taskList = (
            <ul>
                {props.items.map(task => (
                    <TaskItem key={task.id}>{task.text}</TaskItem>
                ))}
            </ul>
        );
    }

    let content = taskList;
    
    if (props.error) {
        content = <button onClick={props.onFetch}>Try again</button>;
    }

    if (props.loading) {
        content = "Loading tasks...";
    }

    return (
        <Section>
            <div className={styles.container}>{content}</div>
        </Section>
    );
};

export default Tasks;