import React, { FC } from "react";
import { colors } from "../../themes/color";
import { IconProps } from "./icons";

export const StatisticsIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <g fill="none" stroke={color} strokeWidth="2" data-name="Rectangle 10">
        <rect width="18" height="18" stroke="none" rx="3"></rect>
        <rect width="16" height="16" x="1" y="1" rx="2"></rect>
      </g>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        d="M0 0L0 6"
        data-name="Line 1"
        transform="translate(5.5 7.5)"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        d="M0 0L0 4"
        data-name="Line 3"
        transform="translate(13.5 9.5)"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
        d="M0 0L0 9"
        data-name="Line 2"
        transform="translate(9.5 4.5)"
      ></path>
    </svg>
  );
};

StatisticsIcon.defaultProps = {
  color: colors.gray["500"],
};
