import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Task from "./Task";

export default function Todo() {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);
  let [status, stStatus] = useState();
  let succ = useRef();
  let warn=useRef()

  useEffect(() => {
    todos.length !== 0
      ? (succ.current.style.display = "block")
      : (succ.current.style.display = "none");
    setTimeout(() => {
      succ.current.style.display = "none";
    }, 5000);
  }, [todos]);

  const handleAdd = () => {
    if(todo.length<=0){
        warn.current.style.display="block";
        setTimeout(()=>{
            warn.current.style.display="none";
        },3000)
    }
    else{
        stStatus("Successfully New Task is Added!...");
        setTodos((pr) => {
          return [...pr, { id: uuidv4(), task: todo }];
        });
        setTodo("");
    }
  };
  const handleEdit = (id) => {
    stStatus("Task is ready for Editing!...");
    setTodos(
      todos.filter((task) => {
        task.id === id && setTodo(task.task);
        return task.id !== id;
      })
    );
  };
  const handleDelete = (id) => {
    stStatus("Successfully Task is Deleted!...");
    setTodos(
      todos.filter((task) => {
        return task.id !== id;
      })
    );
  };
  return (
    <div>
      <h4
        ref={succ}
        className={`hidden font-semibold transition-transform text-green-500 text-center my-5`}
      >
        {status}
      </h4>
      <div className="md:w-[60%] mx-auto mt-5 p-4 min-h-[85vh] bg-gray-50">
        <div className="addTodos">
          <h2 className="font-bold text-lg mb-4">Add Todo</h2>
          <input
            className="focus:outline-none px-4 lg:w-[265px] py-2 me-6"
            type="text"
            placeholder="Enter Your Task"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            name="newTask"
            id="newTask"
          />
          <button
            onClick={handleAdd}
            className="px-5 py-2 bg-green-500 text-white font-semibold hover:bg-green-600"
            type="submit"
          >
            Add
          </button>
          <p className="hidden text-red-600 font-semibold my-3" ref={warn}>Add some text !..</p>
        </div>

        <h1 className="font-bold text-lg mt-4">Your Todos</h1>
        <ul>
          {todos.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                task={task.task}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
