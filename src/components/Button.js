import { Button } from "@mantine/core";

import styles from "./Button.module.css";

function ResponseButton(props) {
  const { confirm } = props.state;
  return (
    !confirm && (
      <div className={styles["button-container"]}>
        <Button
          onClick={props.actionProvider.onConfirmation}
          size="md"
          variant={props.variant}
          color={props.color}
        >
          {props.children}
        </Button>
      </div>
    )
  );
}

export default ResponseButton;
