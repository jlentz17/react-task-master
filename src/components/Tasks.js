import React from "react";
import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task}/>
      ))}
      {/* <Button onClick={setTask}/> */}
    </>
  );
};

export default Tasks;
