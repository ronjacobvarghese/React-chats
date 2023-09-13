import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Footer.module.css";
import { directPage } from "../store/chats-slice";

function Footer() {
  const dispatch = useDispatch();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        dispatch(directPage("final"));
        // You can perform any action here when the countdown reaches 1 or completes.
      }
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup the timer on unmount
    };
  }, [countdown, dispatch]);

  return (
    <div className={styles["footer-container"]}>
      <h2>Thank you. In 5 seconds bot will exit...</h2>
      <h2>{countdown}</h2>
    </div>
  );
}

export default Footer;
