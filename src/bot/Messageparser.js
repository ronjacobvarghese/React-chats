// in MessageParser.js
import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const { onDateConfirm } = children.props.state;

    if (message.includes("hello")) {
      actions.handleHello();
    }

    if(onDateConfirm && message) {
      actions.handleName(message);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
