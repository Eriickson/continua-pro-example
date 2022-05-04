import React, { FC } from "react";
import { colors } from "../../themes/color";
import { IconProps } from "./icons";

export const CheckboxIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      data-name="Checkbox Button - Focused"
      viewBox="0 0 22 22"
    >
      <g fill="#fff" stroke={color} strokeWidth="2" data-name="Rectangle 729">
        <rect width="22" height="22" stroke="none" rx="2"></rect>
        <rect width="20" height="20" x="1" y="1" fill="none" rx="2"></rect>
      </g>
    </svg>
  );
};

CheckboxIcon.defaultProps = {
  color: colors.primary["400"],
};
