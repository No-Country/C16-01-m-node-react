"use client";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import CardItem from "./components/card";

export default function Page() {
  const todoItems = [
    "Schedule perm",
    "Rewind VHS tapes",
    "Make change for the arcade",
    "Get disposable camera developed",
    "Learn C++",
  ];
  const inProgressItems = ["Return Nintendo Power Glove"];
  const doneItems = ["Pickup new mix-tape from Beth"];

  const [todoList, todos] = useDragAndDrop<HTMLUListElement, string>(
    todoItems,
    {
      group: "todoList",
      draggable: (el) => {
        return el.id !== "no-drag";
      },
      dragHandle: ".kanban-handle",
    }
  );

  const [inProgressList, inProgress] = useDragAndDrop<HTMLUListElement, string>(
    inProgressItems,
    {
      group: "todoList",
      draggable: (el) => {
        return el.id !== "no-drag";
      },
      dragHandle: ".kanban-handle",
    }
  );

  const [doneList, dones] = useDragAndDrop<HTMLUListElement, string>(
    doneItems,
    {
      group: "todoList",
      draggable: (el) => {
        return el.id !== "no-drag";
      },
      dragHandle: ".kanban-handle",
    }
  );
  function newTask() {
    console.log("nueva tarea");
  }
  return (
    <div className="kanban-board flex justify-center gap-5 p-5">
      <button
        onClick={newTask}
        className="bg-yellow-200 rounded-lg m-2 hover:bg-yellow-400 h-[40px]"
      >
        {" "}
        <span className="p-2"> Nueva Tarea</span>
      </button>
      <div>
        <div className="bg-red-200 w-[320px] min-h-[300px] flex flex-col rounded-md">
          <ul ref={todoList}>
            <div
              id="no-drag"
              className="flex justify-center items-center rounded-md bg-red-400 m-1 h-[30px]"
            >
              Por Realizar
            </div>
            {todos.map((todo) => (
              <CardItem todo={todo} key={todo} />
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="bg-blue-200 w-[320px]   min-h-[300px] flex flex-col rounded-md ">
          <ul ref={inProgressList}>
            <div
              id="no-drag"
              className="flex justify-center items-center rounded-md bg-blue-400 m-1 h-[30px]"
            >
              En Progreso
            </div>
            {inProgress.map((progress) => (
              <CardItem todo={progress} key={progress} />
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="bg-green-200 w-[320px]  min-h-[300px] flex flex-col rounded-md ">
          <ul ref={doneList}>
            <div
              id="no-drag"
              className="flex justify-center items-center rounded-md bg-green-400 m-1 h-[30px]"
            >
              Finalizado
            </div>
            {dones.map((done) => (
              <CardItem todo={done} key={done} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
