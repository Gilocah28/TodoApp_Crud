import React from "react";
import { FetchContext } from "./FetchContext";

const FetchProvider = ({ children }) => {
  return <FetchContext.Provider>{children}</FetchContext.Provider>;
};

export default FetchProvider;
