import reducer from './reducer';
import React from 'react';
import { useEffect, useReducer } from 'react/cjs/react.development';

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
  });

  useEffect(() => {
    fetch('/chat.json')
      .then((res) => res.json())
      .then((data) => {
        const action = {
          data,
          type: 'DATA_RESPONSE_SUCCESS'
        };
        dispatch(action);
      });
  }, []);

  return (
    <div>
      {state.messages.map((msg) => {
        return (
          <div key={msg.id}>
            <h2>{msg.user.name}</h2>
            <p>{msg.body}</p>
            <p>{msg.createdAt.toString()}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chat;
