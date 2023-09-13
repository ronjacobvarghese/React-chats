import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { Button, MantineProvider } from "@mantine/core";

import styles from "./DateTimePicker.module.css";

function DateTimePicker(props) {
  const [date, setDate] = useState(null);

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const onClickTime = (time) => {
    let dateString = `${date.getDate()} ${monthNames[date.getMonth()]}, ${
      daysOfWeek[date.getDay()]
    } ${time}`;

    props.actionProvider.handleDateTime(dateString);
  };

  const { onDateConfirm: confirm } = props.state;

  return (
    !confirm && (
      <div className={styles["datetime-container"]}>
        <div className={styles["date-container"]}>
          <MantineProvider theme={{ colorScheme: "dark" }}>
            <DatePicker size="xs" value={date} onChange={setDate} />
          </MantineProvider>
        </div>
        {date && (
          <>
            <section>
              <h4>Morning</h4>
              <ul>
                {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"].map((item) => (
                  <li>
                    <Button
                      onClick={() => onClickTime(item)}
                      variant="outline"
                      size="xs"
                      color="indigo"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h4>Afternoon</h4>
              <ul>
                {["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"].map((item) => (
                  <li>
                    <Button
                      onClick={() => onClickTime(item)}
                      variant="outline"
                      size="xs"
                      color="indigo"
                    >
                      {item}
                    </Button>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </div>
    )
  );
}

export default DateTimePicker;
