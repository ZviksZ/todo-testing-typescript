import {cleanup, fireEvent, render} from "@testing-library/react";
import * as React                   from 'react';
import {Form}                       from "../components/Form";


describe('Form testing', () => {
   afterEach(cleanup);

   it('displays the correct greeting', () => {
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
