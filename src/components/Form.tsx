import * as React   from "react";
import { useState } from "react";

interface Props {
   submitFn?: (text: string) => void
}

export const Form: React.FC<Props> = ({submitFn}) => {
  const [input, setInput] = useState("");

  const submit = e => {
     submitFn(input)
  }

  return (
    <form onSubmit={submit}>
       <span data-testid="change-input-greeting">
        Welcome, {input === "" ? "Anonymous User" : input}!
      </span>
       <br />
      <input
        type="text"
        aria-label="user-name"
        placeholder="Your name"
        name="input"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button type="submit">Send form</button>
    </form>
  );
};
