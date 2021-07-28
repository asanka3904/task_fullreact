import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { ListTodo } from "../ListTodo";
import { Provider } from "react-redux";
import { store } from "../../app/store";

//test the list unit
test("ListTodo", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ListTodo />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
