import React from "react";

/**
 * Renders scroll.
 * @param {Object} props 
 * @returns {TemplateResult} scroll
 */
const Scroll = (props) => {
  return (
    <div style={{overflowY: "scroll", height: "700px"}}>
      {props.children}
    </div>
  )
};

export default Scroll;