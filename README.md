# To-Do-List Application

A To-Do-List Application using ReactJS and Redux for state management, featuring task addition, editing, deletion, and completion marking. The application integrates with the JSONPlaceholder API and persists tasks in local storage.

## Project Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Features

- **Add Task**
  - Add new tasks with a title and description.
- **Edit Task**
  - Edit existing tasks.
- **Delete Task**
  - Remove tasks from the list.
- **Mark Task as Completed**
  - Toggle tasks as completed or pending.
- **Fetch Tasks from API**
  - Fetch tasks from the JSONPlaceholder API.
- **Persist Tasks in Local Storage**
  - Save tasks to local storage to persist between sessions.
- **Filter Tasks**
  - Filter tasks by all, completed, and pending status.



## State Management Approach

This project uses Redux for state management to efficiently handle the state of tasks across the application. Redux Toolkit is used to simplify the configuration and management of the Redux store.


### Why Redux?
Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. 


#### Benefits of Using Redux:
1. **Predictability**: Redux's strict rules help maintain consistency and predictability in the application state.
2. **Ease of Testing**: With Redux, you can easily test your state logic.
3. **Centralized State**: All the state of the application is kept in one place, making debugging and state management straightforward.
4. **Middleware**: Redux allows using middleware to handle asynchronous actions (e.g., API calls), logging, and crash reporting.
5. **Developer Tools**: Redux DevTools offer a powerful way to trace changes in the application state, making debugging easier.


### How It’s Implemented:
1. **Store**: The Redux store holds the entire state tree of the application.
2. **Reducers**: Functions that specify how the application's state changes in response to actions sent to the store. In this project, `tasksSlice.js` contains the reducers.
3. **Actions**: Plain objects that represent the intention to change the state. They are dispatched to the Redux store.
4. **Selectors**: Functions that extract, derive, and format specific pieces of state from the Redux store.
5. **Thunk Middleware**: Used for handling asynchronous actions like fetching tasks from an API. The `fetchTasks` function in `tasksSlice.js` is an example.


### Example:
In the `tasksSlice.js`, we define the initial state, reducers for handling various actions (e.g., `addTask`, `editTask`), and asynchronous thunks (e.g., `fetchTasks`).



## API Integration

Tasks are fetched from the JSONPlaceholder API and integrated into the application. The fetched tasks are merged with any tasks saved in local storage to ensure persistence.

## Bonus Features

- **Persistent Storage**
  - Tasks are persisted in local storage to retain data between sessions.
- **Snackbar Notifications**
  - Visual feedback for task actions using `notistack` for snackbar notifications.
- **Modal for Adding Tasks**
  - A modal dialog for adding new tasks, enhancing user experience.
- **Filtering Options**
  - Easily filter tasks by their completion status (All, Completed, Pending).
- **Basic Styling**
  - Basic styling and theming using Material-UI for better UI/UX.

## Technologies Used

- **ReactJS**
- **Redux & Redux Toolkit**
- **Material-UI**
- **Framer Motion** (for animations)
- **Axios** (for API calls)
- **notistack** (for snackbar notifications)

## Installation

To run the application locally, follow the steps in the Project Setup section above.


## Project Folder Structure

Here's an overview of the main project directories:
```
to-do-list-app/
|-- node_modules/
|-- public/
| |-- index.html
|-- src/
| |-- assets/
| | |-- logo.png
| |-- components/
| | |-- AddTask.jsx
| | |-- EditTaskModal.jsx
| | |-- HamburgerMenu.jsx
| | |-- TaskItem.jsx
| | |-- TaskList.jsx
| |-- store/
| | |-- store.js
| | |-- tasksSlice.js
| |-- App.css
| |-- App.jsx
| |-- index.css
| |-- main.jsx
|-- .gitignore
|-- package-lock.json
|-- package.json
|-- README.md
```


## Usage

1. **Viewing Tasks**
   - By default, all tasks are displayed. Use the filter menu to switch between all, completed, and pending tasks.

2. **Adding a Task**
   - Click on the floating action button (FAB) to open the Add Task modal. Fill in the title and description, then click "Add Task".
   - Click the hamburger icon to open the sidebar, and you can navigate to add task component.Fill in the title and description, then click "Add Task".
3. **Editing a Task**
   - Click the edit icon on a task to open the Edit Task modal. Make changes and save.

4. **Deleting a Task**
   - Click the delete icon on a task to remove it from the list.

5. **Marking a Task as Completed**
   - Use the switch to mark a task as completed or pending.

