import React from "react";
import { useDispatch } from "react-redux";

import { createClientMessage } from "react-chatbot-kit";
import { updateName, updateAge, updateDate } from "../store/chats-slice";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const onConfirmation = () => {
    const userMessage = createClientMessage("Got it!");
    const botMessage = createChatBotMessage("Pick a slot", {
      widget: "datetime-picker",
    });

    setState((prev) => ({
      ...prev,
      confirm: true,
      messages: [...prev.messages, userMessage, botMessage],
    }));
  };

  const handleDateTime = (date) => {
    const userMessage = createClientMessage(date);
    const botMessage = createChatBotMessage("Enter your name:");

    setState((prev) => ({
      ...prev,
      onDateConfirm: true,
      messages: [...prev.messages, userMessage, botMessage],
    }));

    dispatch(updateDate(date));
  };

  const handleName = (name) => {
    const botMessage = createChatBotMessage("Enter Your Age:", {
      widget: "age-picker",
    });
    setState((prev) => ({
      ...prev,
      name,
      messages: [...prev.messages, botMessage],
    }));

    dispatch(updateName(name));
  };

  const handleAge = (age) => {
    const finalMessage = createClientMessage(age, {
      widget: "reroute-page",
    });

    setState((prev) => ({
      ...prev,
      age,
      messages: [...prev.messages, finalMessage],
    }));

    dispatch(updateAge(age));
  };
  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            onConfirmation,
            handleDateTime,
            handleName,
            handleAge,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
