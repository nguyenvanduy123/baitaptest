
import React, { useState, useEffect, useRef } from 'react';
import "./style.scss"


function TabTable ({ tabs, activeTab, handleTabClick })  {
    return (
      <div className="tab-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index + 1 ? 'active' : ''}`}
            onClick={() => handleTabClick(index + 1)}
          >
            <img src={tab.icon}/>
            <p>{tab.label}</p>
          </div>
        ))}
      </div>
    );
  };

  export default TabTable;

