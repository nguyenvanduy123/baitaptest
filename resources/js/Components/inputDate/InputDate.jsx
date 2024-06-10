import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import "./style.scss";

function DatePickerWithIcon() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="date-picker-wrapper">
      <FaCalendarAlt className="date-picker-icon" />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        className="date-picker-input"
        placeholderText="Select a date"
      />
    </div>
  );
}

export default DatePickerWithIcon;
