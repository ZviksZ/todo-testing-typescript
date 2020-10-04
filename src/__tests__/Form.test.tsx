import {cleanup, fireEvent, render} from "@testing-library/react";
import * as React                   from 'react';
import {shallow}                    from 'enzyme';
import {Form}                       from "../components/Form";


describe('Form testing', () => {
   afterEach(cleanup);

   it('correct change useState input value', () => {
      const submitFn = jest.fn();
      const form = shallow(<Form submitFn={submitFn}/>);
      form.simulate('submit')

      expect(submitFn).toHaveBeenCalledTimes(1)

   });

   it('correct change useState input value', () => {
      const {getByLabelText, getByTestId} = render(<Form/>);
      const input: HTMLInputElement = getByLabelText("user-name") as HTMLInputElement;
      const greeting = getByTestId("change-input-greeting");

      expect(input.value).toBe("");

      expect(greeting.textContent).toBe("Welcome, Anonymous User!")
      fireEvent.change(input, {target: {value: "Rafael"}});
      expect(input.value).toBe("Rafael");
      expect(greeting.textContent).toBe("Welcome, Rafael!");
   });

})
