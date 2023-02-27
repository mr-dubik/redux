import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";

import { toggleTodo } from "../../store/actions/creators/todo";
import { removeTodo } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoItem = () => {
    dispatch(toggleTodo(todo.id));
  };

  const removeTodoItem = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li>
      <span className={styles.item} onClick={toggleTodoItem}>
        {todo.completed ? "👌" : "👋"}{" "}
        <span
          className={cx({
            [styles.completed]: todo.completed,
          })}
        >
          {todo.content}
        </span>
      </span>
      <span
        style={{ color: "red", cursor: "pointer" }}
        onClick={removeTodoItem}
      >
        {" "}
        &times;
      </span>
    </li>
  );
};
