import dtoTask from "@/interfaz/dto.task";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
//const URI: string = "http://localhost:3001"; //Local
const URI: string = "https://crud-api-ind2.onrender.com";  //server

function CardTask({ tasks }: dtoTask | any) {
  //const [taskss, setTasks] = useState([]);

  const router = useRouter();

  /*
    useEffect(() => {
        getTaskss();
    }, []);
    */

  /*
    const getTaskss = async () => {
        const res = await axios.get(`${URI}/tasks`);
        setTasks(res.data);
    };
    */

  const deleteTask = async (id: number) => {
    await axios.delete(`${URI}/tasks/${id}/delete`);
    location.reload();
    //router.push("/");
    //router.refresh();
    //await getTaskss();
  };

  const editDoneTask = async (id: number) => {
    await axios.patch(`${URI}/tasks/${id}/toggleDone`);
    location.reload();
    //router.refresh();
    //await getTasks();
  };

  return (
    <div
      key={tasks.id}
      className=" border border-[rgb(29 78 216 / var(--tw-text-opacity))] rounded-lg p-3 m-2"
    >
      <h5 className="text-2xl font-semibold text-blue-700 mb-1">
        {tasks.title}
      </h5>
      <p className="mb-1 text-base text-blue-800 dark:text-blue-400">
        Id Task: {tasks.type_task_id}
      </p>
      <p className="mb-1 text-base text-blue-800 dark:text-blue-400">
        {tasks.description}
      </p>
      <div>
        {tasks.done === 0 ? (
          <div className="mb-1 text-base  text-red-800 dark:text-red-500 ">
            UnDone {tasks.done}
          </div>
        ) : (
          <div className="mb-1 text-base text-green-800 dark:text-green-400">
            Done {tasks.done}
          </div>
        )}
      </div>
      {tasks.done === 0 ? (
        <button
          type="button"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => editDoneTask(tasks.id)}
        >
          Done
        </button>
      ) : (
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => editDoneTask(tasks.id)}
        >
          UnDone
        </button>
      )}

      <button
        type="button"
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => deleteTask(tasks.id)}
      >
        Delete
      </button>
      <a
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        href={`/tasks/${tasks.id}/edit`}
      >
        Edit
      </a>
    </div>
  );
}

export default CardTask;
