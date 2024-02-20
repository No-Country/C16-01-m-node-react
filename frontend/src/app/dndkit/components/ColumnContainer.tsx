import PlusIcon from "@/app/icons/PlusIcon";
import TrashIcon from "@/app/icons/TrashIcon";
import { Column, Id, Task } from "@/app/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import TaskCard from "./TaskCard";

type props = {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createTask: (columnId: Id) => void;
  deleteTask: (id: Id) => void;
  taskUpdate: (id: Id, content: string) => void;
  tasks: Task[];
};

export default function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  deleteTask,
  tasks,
  taskUpdate,
}: props) {
  const [editMode, setEditMode] = useState(false);
  const {
    setNodeRef,
    attributes,
    transform,
    listeners,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="w-[320px] h-[600px] max-h-[600px] flex flex-col rounded-md overflow-auto"
      ref={setNodeRef}
      style={style}
    >
      <div
        className="bg-zinc-900 rounded-md h-[40px] min-h-[40px] flex justify-between items-center p-2 hover:ring-inset hover:ring-1 hover:ring-white"
        {...attributes}
        {...listeners}
      >
        <div className=" flex items-center p-1  ">
          <div className="m-2 px-2 py-1 rounded-full text-sm  bg-slate-950">
            0
          </div>
          <div onClick={() => setEditMode(!editMode)}>
            {editMode && (
              <input
                className="bg-zinc-900 rounded-md  outline-none"
                value={column.title}
                onChange={(e) => updateColumn(column.id, e.target.value)}
                type="text"
                autoFocus
                onBlur={() => setEditMode(!editMode)}
                onKeyDown={(e) => {
                  if (e.key !== "Enter") return;
                  setEditMode(!editMode);
                }}
              />
            )}
            {!editMode && column.title}
          </div>
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="cursor-pointer stroke-gray-600 hover:stroke-white"
        >
          <TrashIcon />
        </button>
      </div>

      <div className="flex flex-grow flex-col bg-slate-800 p-2 rounded-md my-2">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            taskUpdate={taskUpdate}
          />
        ))}
      </div>

      <button
        className="flex items-center p-2 bg-slate-900 rounded-md hover:ring-inset hover:ring-1 hover:ring-white"
        onClick={() => createTask(column.id)}
      >
        <div>
          {" "}
          <PlusIcon />
        </div>
        <div className="ml-3">Add Task</div>
      </button>
    </div>
  );
}
