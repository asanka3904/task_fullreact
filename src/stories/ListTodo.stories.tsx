import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ListTodo } from "../components/ListTodo";
import { store } from "../app/store";
import { Provider } from "react-redux";

export default {
  title: "listTodo task",
  component: ListTodo,
} as ComponentMeta<typeof ListTodo>;

const Template: ComponentStory<typeof ListTodo> = () => (
  <Provider store={store}>
    <ListTodo />
  </Provider>
);

export const checkListtask = Template.bind({});
