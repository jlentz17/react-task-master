import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Sherman appointment",
      day: "October 20th at 2:30am",
      reminder: true,
    },
    {
      id: 2,
      text: "Interview w/ YellowBird",
      day: "October 20th at 10:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Gig w/ JFunk",
      day: "October 20th at 10:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Go on tour",
      day: "October 21st at 5:30pm",
      reminder: true,
    },
    {
      id: 5,
      text: "Relax for the first day",
      day: "October 22nd at 2:30pm",
      reminder: true,
    },
  ]);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks onDelete={deleteTask} tasks={tasks} /> : "No tasks made yet!"}
    </div>
  );
}

export default App;
