import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";

import { App } from "../components/App.jsx";
import renderer from "react-test-renderer";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders correctly", () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
