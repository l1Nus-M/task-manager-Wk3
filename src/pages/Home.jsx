import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Card className="max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Task.M</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          A modern, responsive React app demonstrating component architecture, state management, hooks, and API integration with Tailwind CSS.
        </p>
        <Link to="/tasks">
          <Button variant="primary">Go to Task Manager</Button>
        </Link>
      </Card>
    </div>
  );
}
