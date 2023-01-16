import React, { useState } from "react";
import "./App.css";
import ToDoTable from "./components/ToDoTable";
import NewToDoForm from "./components/NewToDoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  const [showAddToDoForm, setShowAddToDoForm] = useState(false);

  const addToDo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    const newToDo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    if (todos.length === 0) {
      setTodos((todos) => [newToDo]);
    }
    if (todos.length > 0) {
      setTodos((todos) => [...todos, newToDo]);
    }
  };

  const deleteToDo = (deleteToDoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteToDoRowNumber;
    });
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <ToDoTable todos={todos} deleteToDo={deleteToDo} />
          <button
            onClick={() => setShowAddToDoForm(!showAddToDoForm)}
            className="btn btn-primary"
          >
            {showAddToDoForm ? "Close" : "New ToDo"}
          </button>
          {showAddToDoForm && <NewToDoForm addToDo={addToDo} />}
        </div>
      </div>
    </div>
  );
}
