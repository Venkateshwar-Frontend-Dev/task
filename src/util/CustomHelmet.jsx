import React from "react";
import { Helmet } from "react-helmet";

const CustomHelmet = ({ title }) => {
  return (
    <Helmet>
      <title>{process.env.REACT_APP_NAME + " - " + title}</title>
    </Helmet>
  );
};

export default CustomHelmet;
