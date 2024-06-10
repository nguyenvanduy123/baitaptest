import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import "./style.scss";
import TimePicker from 'react-time-picker';
function TimePickerWithIcon() {
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="time-picker-wrapper">
      <FaClock className="time-picker-icon" />
      <input
        type="time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
        className="time-picker-input"
        placeholder="Select a time"
      />
    </div>
  );
}

export default TimePickerWithIcon;
