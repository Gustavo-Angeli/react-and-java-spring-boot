import ToDoRowItem from "./ToDoRowItem";

export default function ToDoTable(props) {
  const todos = props.todos;

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <ToDoRowItem
            key={todo.rowNumber}
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            deleteToDo={props.deleteToDo}
          />
        ))}
      </tbody>
    </table>
  );
}
