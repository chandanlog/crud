import axios from "axios";
import { useState, useEffect } from "react";
import dtoTypeTask from "@/interfaz/dto.taskType";

//const URI: string = "http://localhost:3001"; //Local
const URI: string = "https://crud-api-ind2.onrender.com";  //server

function FormTask() {
  const [title, setTitle] = useState<string | undefined>();
  const [typeTask, setTypeTask] = useState<number | string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [done, setDone] = useState<boolean | undefined>();
  const [typeTasks, setTypeTasks] = useState<dtoTypeTask[]>([]);

  useEffect(() => {
    getTypeTasks();
  }, []);

  const getTypeTasks = async () => {
    const res = await axios.get(`${URI}/type-tasks`);
    setTypeTasks(res.data);
  };

  const postAddTasks = async (e: any) => {
    e.preventDefault();
    await axios.post(`${URI}/tasks/add`, {
      title: title,
      type_task_id: typeTask,
      done: done,
      description: description,
    });
    location.reload();
  };

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-96 bg-white shadow-2xl rounded-2xl p-6">
        <div className="bg-gray-50 shadow-md rounded-xl p-4">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
            Add Task
          </h3>
          <form onSubmit={postAddTasks}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter task title"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Type Task
              </label>
              <select
                id="type_task_id"
                value={typeTask}
                onChange={(e) => setTypeTask(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select type
                </option>
                {typeTasks.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter task description..."
                required
              ></textarea>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="done"
                type="checkbox"
                checked={done || false}
                onChange={(e) => setDone(e.target.checked)}
                className="w-4 h-4 text-blue-600 bg-gray-50 border border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-700">
                Done
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg text-sm py-2.5 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormTask;
