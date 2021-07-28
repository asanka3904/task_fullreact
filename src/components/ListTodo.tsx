import React, { useEffect, useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  removeTodo,
  selectTodo,
  setTodoStatus,
} from "../features/todo/todoSlice";

import { Todo } from "../interface/Todo";

import "./ListTodo.scss";

export const ListTodo = () => {
  const dispatch = useAppDispatch();
  const todolist = useAppSelector(selectTodo);
  console.log(todolist);

  const [task, settask] = useState<Todo[]>([]);

  let arr: Todo[] = [];

  useEffect(() => {
    settask(todolist);
  }, [todolist]);

  //short descending

  const sortdes = (e: any) => {
    e.preventDefault();
    settask([]);
    var compareDate = (t1: Todo, t2: Todo) => {
      var t1Date = new Date(t1.createDate);
      var t2Date = new Date(t2.createDate);
      return t1Date > t2Date ? -1 : 1;
    };

    arr = [...todolist].sort(compareDate);

    settask(arr);
  };

  //sort ascending
  const sortas = (e: any) => {
    e.preventDefault();
    settask([]);
    var compareDate = (t1: Todo, t2: Todo) => {
      var t1Date = new Date(t1.createDate);
      var t2Date = new Date(t2.createDate);
      return t1Date > t2Date ? 1 : -1;
    };

    arr = [...todolist].sort(compareDate);

    settask(arr);
  };

  return (
    <div className="todo-list">
      <div className="todo-list-header">
        <div className="line">
          <IconButton edge="end" aria-label="delete" onClick={sortdes}>
            <ArrowUpwardOutlinedIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={sortas}>
            <ArrowDownwardOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <List className="list">
        {task.map((todo) => {
          const labelId = `checkbox-list-label-${todo.id}`;

          return (
            <ListItem key={todo.id} role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  value={todo.complated}
                  onChange={() => {
                    dispatch(
                      setTodoStatus({ complated: !todo.complated, id: todo.id })
                    );
                  }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={todo.title}
                style={{
                  textDecoration: todo.complated ? "line-through" : "none",
                  color: todo.complated ? "rgba(184, 172, 172, 0.89)" : "black",
                }}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    dispatch(removeTodo(todo.id));
                  }}
                >
                  <DeleteOutlinedIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
