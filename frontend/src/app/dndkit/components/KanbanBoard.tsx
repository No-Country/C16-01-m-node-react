"use client";
import PlusIcon from "@/app/icons/PlusIcon";
import { useMemo, useState } from "react";
import ColumnContainer from "./ColumnContainer";
import {
  DndContext,
  DragEndEvent,
  // DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { Id, Task } from "@/app/types";
// import { createPortal } from "react-dom";

interface ColumnType {
  id: string | number;
  title: string;
}

export default function KanbanBoard(): any {
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [activeColumn, setActiveColumn] = useState<ColumnType | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const sensor = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );
  function createNewColumn(): any {
    const columnToAdd = {
      id: generateId(),
      title: `Columns ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }

  function generateId(): any {
    return Math.floor(Math.random() * 10001);
  }

  function deleteColumn(id: Id): any {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }

  function deleteTask(id: Id): any {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function createTask(columnId: Id) {
    const newTask: Task = {
      id: generateId(),
      columnId,
      content: `Task ${tasks.length + 1}`,
    };
    setTasks([...tasks, newTask]);
  }

  function onDragStart(event: DragStartEvent) {
    console.log("DRAG START", event);
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }
  }
  function onDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    if (!over) return;
    const activeColumnId = active.id;
    const overColumnId = over.id;
    if (activeColumnId === overColumnId) return;

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex(
        (col) => col.id === activeColumnId
      );
      const overColumnIndex = columns.findIndex(
        (col) => col.id === overColumnId
      );
      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }

  function updateColumn(id: Id, title: string) {
    const newColumns = columns.map((col) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });
    setColumns(newColumns);
  }

  function taskUpdate(id: Id, content: string) {
    console.log("update");
    const updateTask = tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });
    setTasks(updateTask);
  }
  return (
    <div className="px-[20px] m-auto flex min-h-screen justify-center items-center overflow-x-auto overflow-y-hidden">
      <DndContext
        sensors={sensor}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <div className="m-auto flex gap-4">
          <SortableContext items={columnsId}>
            {columns.map((column) => (
              <ColumnContainer
                key={column.id}
                column={column}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                deleteTask={deleteTask}
                taskUpdate={taskUpdate}
                tasks={tasks.filter((task) => task.columnId === column.id)}
              />
            ))}
          </SortableContext>
        </div>

        <div className="absolute top-0 right-0 m-4">
          <button
            className="h-[60px] w-[200px] min-w-[200px] cursor-pointer rounded-lg border-2 flex justify-evenly items-center "
            onClick={() => {
              createNewColumn();
            }}
          >
            {" "}
            <PlusIcon />
            Add Column
          </button>
        </div>

        {/* {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                key={activeColumn.id}
                column={activeColumn}
                deleteColumn={deleteColumn}
              />
            )}
          </DragOverlay>,
          document.body
        )} */}
      </DndContext>
    </div>
  );
}
