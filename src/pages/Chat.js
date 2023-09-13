import Chatbot from "react-chatbot-kit";

import MessageParser from "../bot/Messageparser";
import ActionProvider from "../bot/ActionProvider";
import config from "../bot/config.js";

function ChatPage() {
  return (
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
  );
}

export default ChatPage;
