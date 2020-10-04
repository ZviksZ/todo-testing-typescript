import * as React   from "react";
import { useState } from "react";

export const Form: React.FC = () => {
  const [input, setInput] = useState("");

  const submit = e => {

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
    </form>
  );
};
