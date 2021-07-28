import * as React from "react";
import { useState } from "react";
import { SaveTodo, Todo } from "../interface/Todo";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { addTodo, removeTodo, setTodoStatus } from "../features/todo/todoSlice";
import { v4 as uuidv4 } from "uuid";
import "./Addform.scss";

import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export const Addform = () => {
  const [title, settitle] = useState("");
  const [day, setDay] = useState("");

  const dispatch = useAppDispatch();
  const todolist = useAppSelector;

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date("2021-07-27T21:11:54")
  );

  //date choose handle
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  //submit add task
  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a task");
      return;
    }

    const tdata: Todo = {
      id: uuidv4(),
      title: title,
      complated: false,
      endDate: selectedDate,
      createDate: new Date(),
    };

    dispatch(addTodo(tdata));

    settitle("");
    setDay("");
  };

  return (
    <div className="form-contain">
      <h1 className="text-blue-700 font-bold text-lg uppercase">add task</h1>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>

        <input
          id="button"
          type="submit"
          value="Save Task"
          className="bg-purple-600 hover:bg-purple-700 focus:outline-none"
        />
      </form>
    </div>
  );
};
