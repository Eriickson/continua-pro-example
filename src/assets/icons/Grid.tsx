import React, { FC } from "react";
import { colors } from "../../themes/color";
import { IconProps } from "./icons";

export const GridIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <rect
        width="8"
        height="8"
        fill={color}
        data-name="Rectangle 5"
        rx="3"
      ></rect>
      <rect
        width="8"
        height="8"
        fill={color}
        data-name="Rectangle 6"
        rx="3"
        transform="translate(10)"
      ></rect>
      <rect
        width="8"
        height="8"
        fill={color}
        data-name="Rectangle 7"
        rx="3"
        transform="translate(10 10)"
      ></rect>
      <rect
        width="8"
        height="8"
        fill={color}
        data-name="Rectangle 8"
        rx="3"
        transform="translate(0 10)"
      ></rect>
    </svg>
  );
};

GridIcon.defaultProps = {
  color: colors.gray["500"],
};
