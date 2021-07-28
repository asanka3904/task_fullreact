import React from "react";

import renderer from "react-test-renderer";
import { Addform } from "../Addform";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import ReactDOM from "react-dom";

//Snapshot test
test("Addtodo", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Addform />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

//this is the dom test

describe("test render element", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
      <Provider store={store}>
        <Addform />
      </Provider>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("test input feild", () => {
    const input = container.querySelectorAll("input");
    expect(input).toHaveLength(3);
  });
});
