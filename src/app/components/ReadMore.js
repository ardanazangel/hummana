'use client'

import React, { useState } from "react";

const ReadMore = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p style={{paddingTop:'1em'}}>
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      </p>
      <button
        onClick={toggleReadMore}
        className="read-more"
      >
        <p>{isExpanded ? "Leer menos" : "Leer más"}
        </p>
      </button>
    </div>
  );
};

export default ReadMore;
