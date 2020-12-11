import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush">
      {/* TodoListItem, todo, index, handleToggle, handleDelete  */}
      {todos.map((todo, i) => (
        <TodoListItem
          todo={todo}
          i={i}
          key={todo.id}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
