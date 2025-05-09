"use client";

import { useState } from "react";

const ReadMore = ({ text, maxLength = 300 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const formattedText = text
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);

  const shortText = text
    .slice(0, maxLength)
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);

  return (
    <div>
      {isExpanded ? formattedText : shortText}
      {text.length > maxLength && (
        <button onClick={toggleReadMore}>
          <h5>{isExpanded ? "Leer menos" : "Leer más"}</h5>
        </button>
      )}
    </div>
  );
};

export default ReadMore;
