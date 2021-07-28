import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Addform } from "../components/Addform";

import { store } from "../app/store";
import { Provider } from "react-redux";

export default {
  title: "Addtask to Addfrom",
  component: Addform,
} as ComponentMeta<typeof Addform>;

const Template: ComponentStory<typeof Addform> = () => (
  <Provider store={store}>
    <Addform />
  </Provider>
);

export const checkadd = Template.bind({});
