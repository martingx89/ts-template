import React from "react";
import "./App.css";
import { Message } from "./types";
import { useAppSelector, useAppDispatch } from "./store/store";
import {
  AddMessageActon,
  DeleteMessageAction,
  UpdateMessageAction,
} from "./store/actions";
import { selectMessages } from "./store/selectors";
import shortid from "shortid";

const App = () => {
  const { messages } = useAppSelector(selectMessages);

  const dispatch = useAppDispatch();

  const addMessage = (message: Message) => {
    dispatch(AddMessageActon(message));
  };

  const deleteMessage = (message: Message) => {
    dispatch(DeleteMessageAction(message));
    console.log(message)
  };

  const updateMessage = (message: Message) => {
    dispatch(UpdateMessageAction(message));
  };

  return (
    <div className="App">
      <button
        onClick={() =>
          addMessage({
            id: shortid.generate(),
            level: "info",
            text: "info",
          })
        }
      >
        Add
      </button>
      {messages.map((el) => (
        <div key={el.id}>
          <p>{el.text}</p>
          <button onClick={() => deleteMessage(el)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
