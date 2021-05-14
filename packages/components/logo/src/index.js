import { get } from "lodash";
import React from "react";

const logo = () => {
  const test = get(null, "1,2,3");
  return <div>Hello world</div>;
};

export default logo;
