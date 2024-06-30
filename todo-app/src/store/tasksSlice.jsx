import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Fetching data from JSONPlaceholder API
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const initialTasks = response.data;
    const localTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const mergedTasks = [...localTasks, ...initialTasks.filter(apiTask => !localTasks.some(localTask => localTask.id === apiTask.id))];
    localStorage.setItem('tasks', JSON.stringify(mergedTasks));
    return mergedTasks;
});

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    taskId: JSON.parse(localStorage.getItem('taskId')) || 201 // Initialize task ID at 201
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            state.taskId += 1; // Increment task ID
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
            localStorage.setItem('taskId', JSON.stringify(state.taskId)); // Save the task ID to local storage
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload;
            const existingTask = state.tasks.find(task => task.id === id);
            if (existingTask) {
                existingTask.title = title;
                existingTask.description = description;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        toggleComplete: (state, action) => {
            const existingTask = state.tasks.find(task => task.id === action.payload);
            if (existingTask) {
                existingTask.completed = !existingTask.completed;
                localStorage.setItem('tasks', JSON.stringify(state.tasks));
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
        });
    },
});

export const { addTask, editTask, deleteTask, toggleComplete } = tasksSlice.actions;

export default tasksSlice.reducer;
