import React from "react";
import Card from "../components/Card";
import TaskManager from "../components/TaskManager";

export default function Tasks() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <TaskManager />
    </div>
  );
}
