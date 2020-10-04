import * as React                                from 'react';
import { mount } from "enzyme";
import App2 from "../components/App2";

describe("Counter Testing", () => {
   let wrapper;
   beforeEach(() => {
      wrapper = mount(<App2 />);
   });
   test("render snapshot", () => {
      expect(wrapper).toMatchSnapshot();
   });
   test("render the title of counter", () => {
      expect(wrapper.find("h1").text()).toContain("This is counter app");
   });

   test("render a button with text of `increment`", () => {
      expect(wrapper.find("#increment-btn").text()).toBe("Increment");
   });

   test("render the initial value of state in a div", () => {
      expect(wrapper.find("#counter-value").text()).toBe("0");
   });

   test("render the click event of increment button and increment counter value", () => {
      wrapper.find("#increment-btn").simulate("click");
      expect(wrapper.find("#counter-value").text()).toBe("1");
   });

   test("render the click event of decrrment button and decrement counter value", () => {
      wrapper.find("#increment-btn").simulate("click");
      expect(wrapper.find("#counter-value").text()).toBe("1");
      wrapper.find("#decrement-btn").simulate("click");
      expect(wrapper.find("#counter-value").text()).toBe("0");
   });
});
