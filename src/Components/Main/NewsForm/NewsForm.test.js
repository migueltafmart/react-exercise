import React from "react";
import { shallow } from "enzyme";
import NewsForm from "./NewsForm";

describe("NewsForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NewsForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
