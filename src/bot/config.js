import { createChatBotMessage } from "react-chatbot-kit";

import ChatHeader from "../components/ChatHeader";
import Button from "../components/Button";
import DateTimePicker from "../components/DateTimePicker";
import AgeDropDown from "../components/AgeDropDown";
import Footer from "../components/Footer";

const config = {
  initialMessages: [
    createChatBotMessage("Hello, Welcome to Student Info System!", {
      widget: "Confirmation",
    }),
  ],
  customComponents: {
    header: () => <ChatHeader />,
  },

  state: {
    confirm: false,
    onDateConfirm: false,
    name: null,
    age: null,
  },
  widgets: [
    {
      widgetName: "Confirmation",
      widgetFunc: (props) => (
        <Button color="indigo" {...props}>
          {" "}
          Got it{" "}
        </Button>
      ),
    },
    {
      widgetName: "datetime-picker",
      widgetFunc: (props) => <DateTimePicker {...props} />,
      
    },
    {
      widgetName: "age-picker",
      widgetFunc: (props) => <AgeDropDown {...props} />,
    },
    {
      widgetName:'reroute-page',
      widgetFunc: (props) => <Footer {...props} />
    }
  ],
};

export default config;
