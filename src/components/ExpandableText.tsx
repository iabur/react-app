import React, { useState } from "react";

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}

const ExpandableText = ({ text, maxLength = 100 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <h1>{text.length}</h1>
      <p>
        {text.slice(0, isExpanded ? undefined : maxLength)}
        {isExpanded ? "" : "..."}
      </p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
