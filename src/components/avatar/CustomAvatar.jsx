import React, { useState } from "react";
import { Avatar } from "antd";

const CustomAvatar = ({ src, falbackText, ...props }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <Avatar
      {...props}
      src={!imgError ? src : null}
      onError={() => {
        setImgError(true);
        return false;
      }}
    >
      {falbackText?.charAt(0).toUpperCase()}
    </Avatar>
  );
};

export default CustomAvatar;
