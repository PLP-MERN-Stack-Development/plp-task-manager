import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import TaskManager from "./components/TaskManager";
import ApiExplorer from "./components/ApiExplorer";

const AppContent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
      {/* Header */}
      <header className="flex justify-between text-center items-center p-4 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-xl text-center sm:text-2xl font-bold text-green-700 dark:text-green-400">
          PLP Task Manager
        </h1>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600">
          {theme === "light" ? " Dark" : " Light"}
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 sm:p-10 space-y-10">
        <TaskManager />
        <ApiExplorer />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-4 text-gray-500 dark:text-gray-400">
        © 2025 PLP Task Manager. All rights reserved.
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}