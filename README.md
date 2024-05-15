# To-Do List Application

This is a simple To-Do List application built with HTML, CSS, JavaScript, Express.js, Node.js, and MongoDB. It allows users to create, edit, delete, and mark tasks as completed.

## Features

- **Create Task:** Users can add new tasks to the To-Do list.
- **Edit Task:** Users can edit existing tasks.
- **Mark Task as Completed:** Users can mark tasks as completed.
- **Delete Task:** Users can delete tasks from the list.
- **Responsive Design:** The application is responsive and works well on different screen sizes.

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  - Fetch API for AJAX requests

- **Backend:**
  - Express.js
  - Node.js
  
- **Database:**
  - MongoDB
  
## Installation

1. **Clone the repository:**
   - Run the following command in your terminal to clone the repository:
     ```
     git clone https://github.com/Rizz-33/to-do-list-app
     ```

2. **Navigate to the project directory:**
   - Use the `cd` command to navigate into the cloned repository:
     ```
     cd to-do-list-app
     ```

3. **Install dependencies:**
   - Install project dependencies by running:
     ```
     npm install
     ```

4. **Start the development of frontend and admin:**
   - Start the development servers for frontend and admin by running:
     ```
     npm run dev
     ```

5. **Start the development of backend:**
   - Start the development server for the backend by running:
     ```
     nodemon .\index.js
     ```

6. **Open the application in your browser:**
   - Once the servers are running, open your web browser and visit:
     ```
     http://localhost:3000/todos
     ```
   - This will allow you to view the application locally.



## API Endpoints

- **GET /tasks:** Get all tasks.
- **POST /tasks:** Create a new task.
- **PUT /tasks/:id:** Update a task.
- **DELETE /tasks/:id:** Delete a task.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, feel free to open an issue or submit a pull request.
