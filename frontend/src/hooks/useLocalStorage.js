import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem(key);
        return savedTasks ? JSON.parse(savedTasks) : initialValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(tasks));
    }, [key, tasks]);
    return [tasks, setTasks];
};

export default useLocalStorage;