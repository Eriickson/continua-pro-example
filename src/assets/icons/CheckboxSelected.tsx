import React from "react";
import { colors } from "../../themes/color";

export const CheckboxSelectedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      data-name="Checkbox Button - Selected"
      viewBox="0 0 22 22"
    >
      <g
        fill="#fff"
        stroke={colors.primary["400"]}
        strokeWidth="2"
        data-name="Rectangle 722"
      >
        <rect width="22" height="22" stroke="none" rx="2"></rect>
        <rect width="20" height="20" x="1" y="1" fill="none" rx="2"></rect>
      </g>
      <path
        fill={colors.primary["400"]}
        d="M6.5 10.8L0 4.3l2.1-2.1 4.4 4.3L13 0l2.1 2.1z"
        data-name="Path 320"
        transform="translate(3.5 6)"
      ></path>
    </svg>
  );
};
