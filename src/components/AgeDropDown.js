import { useState } from "react";
import { Select, Button } from "@mantine/core";

import styles from "./AgeDropDown.module.css";

function AgeDropDown(props) {
  const data = [];
  const [userAge, setUserAge] = useState(null);

  for (let i = 18; i <= 40; i++) {
    data.push({
      value: i,
      label: `${i}`,
    });
  }

  const onSubmitAge = () => {
    props.actionProvider.handleAge(userAge);
  };
  const { age } = props.state;

  return (
    !age && (
      <div className={styles["age-container"]}>
        <Select
          value={userAge}
          onChange={setUserAge}
          placeholder="Select Age"
          data={data}
        />
        <Button onClick={onSubmitAge}>Confirm</Button>
      </div>
    )
  );
}

export default AgeDropDown;
