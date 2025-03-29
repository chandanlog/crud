"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import dtoTask from "@/interfaz/dto.task";
import CardTask from "@/components/CardTask";

//const URI: string = "http://localhost:3001"; //Local
const URI: string = "https://crud-api-ind2.onrender.com";  //server

function ShowTasks() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const res = await axios.get(`${URI}/tasks`);
    setTask(res.data);
  };

  return (
    <div className="bg-white p-6 shadow-xl rounded-lg">
      <div className="mb-1 text-center">
        <h3 className="text-2xl font-semibold text-blue-700 text-center">
          Tasks
        </h3>
      </div>
      <div className="bg-gray-50 p-6 shadow-md rounded-lg">
        {tasks?.length ? (
          <div className="container mx-auto flex flex-wrap justify-around">
            {tasks.map((task: dtoTask, index) => (
              <CardTask tasks={task} key={index} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
              No tasks
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShowTasks;
