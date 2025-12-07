import React, { useState } from "react";
import { Flex } from "antd";
import CustomBtn from "../button/CustomBtn";

const CustomTabs = ({ tabsItem }) => {
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  return (
    <>
      <Flex align="center">
        {tabsItem?.map((item, i) => (
          <CustomBtn
            key={i}
            icon={item.icon}
            size="small"
            color={i === isActiveIndex && "primary"}
            variant="outlined"
            onClick={() => setIsActiveIndex(i)}
            style={{ margin: "15px 0" }}
          >
            {item.label}
          </CustomBtn>
        ))}
      </Flex>

      {tabsItem?.map((item, i) => (
        <Flex align="center" key={i}>
          {i === isActiveIndex && item.content}
        </Flex>
      ))}
    </>
  );
};

export default CustomTabs;
