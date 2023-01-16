import React, { useState } from "react";

export default function NewToDoForm(props) {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  const submitToDo = () => {
    if (description !== "" && assigned !== "") {
      props.addToDo(description, assigned);
    }
  };

  return (
    <div className="mt-5">
      <form action="">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Assigned
          </label>
          <input
            onChange={(e) => setAssigned(e.target.value)}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            rows={3}
            required
          ></textarea>
        </div>
        <button
          onClick={submitToDo}
          type="button"
          className="btn btn-primary mt-3"
        >
          Add ToDo
        </button>
      </form>
    </div>
  );
}
