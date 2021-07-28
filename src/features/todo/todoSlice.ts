import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { Todo } from "../../interface/Todo";

const initialState: Todo[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`

    //addtodo actoins
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },

    //removetodo actoins
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },

    //set change complated  or not
    setTodoStatus: (
      state,
      action: PayloadAction<{ complated: boolean; id: string }>
    ) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);

      state[index].complated = action.payload.complated;
    },
  },
});

//export actions
export const { addTodo, removeTodo, setTodoStatus } = todoSlice.actions;

//export selectors
export const selectTodo = (state: RootState) => state.todos;

export default todoSlice.reducer;
