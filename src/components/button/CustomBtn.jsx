import React from "react";
import { Button} from "antd";

const CustomBtn = ({ children, ...props }) => {
  return <Button {...props} >{children}</Button>;
};

export default CustomBtn;
