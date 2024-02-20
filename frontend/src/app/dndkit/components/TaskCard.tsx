"use client";
import TrashIcon from "@/app/icons/TrashIcon";
import { Id, Task } from "@/app/types";
import { useState } from "react";

interface props {
  task: Task;
  deleteTask: (id: Id) => void;
  taskUpdate: (id: Id, content: string) => void;
}

export default function TaskCard({ task, deleteTask, taskUpdate }: props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function toogleEditMode() {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  }

  if (editMode) {
    return (
      <div className="relative p-2 m-2 h-[120px] min-h-[120px] bg-zinc-900 rounded-md items-center flex hover:ring-inset hover:ring-1 hover:ring-white">
        <textarea
          value={task.content}
          className="text-white w-full border-none rounded-md focus:outline-none bg-transparent h-[90%]"
          onBlur={toogleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) toogleEditMode();
          }}
          onChange={(e) => taskUpdate(task.id, e.target.value)}
        />
      </div>
    );
  }

  return (
    <div
      className="relative p-2 m-2 h-[120px] min-h-[120px] bg-zinc-900 rounded-md items-center flex hover:ring-inset hover:ring-1 hover:ring-white"
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      onClick={() => toogleEditMode()}
    >
      {task.content}
      {mouseIsOver && (
        <button
          className="cursor-pointer stroke-gray-600 hover:stroke-white absolute right-1 top-1/2 mr-2 -translate-y-1/2"
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
}
