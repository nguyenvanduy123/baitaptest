import React from "react";
import "./style.scss";

function Modal(props) {
  return (
    <div
      onClick={props.onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${props.open ? "visible bg-black/20" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${props.open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          transform ${props.open ? "translate-x-0 w-full" : "translate-x-1/2 w-0"}
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        `}
      >
        <button
          onClick={props.onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          Close
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
