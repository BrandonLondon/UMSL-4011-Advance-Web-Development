import React from "react";
import get from "lodash/get";
import "../index.css";

export const Character = props => {
  return <div className="character">{props.character}</div>;
  };