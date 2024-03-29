"use client";

import Datetime from "react-datetime";
import styles from "./datepicker.module.css";
import { MdCalendarMonth } from "react-icons/md";
import "react-datetime/css/react-datetime.css";

const DatePicker = () => {
  return (
    <div className={styles.container}>
      <MdCalendarMonth className="text-2xl ml-3"/>
      <Datetime className="bg-white-200 transform -translate-x-10 -translate-y-[-20] shadow rounded appearance-none rounded py-3 px-2 text-gray-darker" />
    </div>
  );
};

export default DatePicker;
