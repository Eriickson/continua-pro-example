import React, { FC } from "react";

interface LockIconProps {
  color?: string;
}

export const LockIcon: FC<LockIconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      viewBox="0 0 14 16"
    >
      <g data-name="Group 30" opacity="0.6" transform="translate(-245.5 -244)">
        <g data-name="Group 29" transform="translate(245.5 244)">
          <g fill={color} data-name="Group 28">
            <circle
              cx="0.938"
              cy="0.938"
              r="0.938"
              data-name="Ellipse 1"
              transform="translate(9.45 9.756)"
            ></circle>
            <path
              d="M258.875 258.125a.625.625 0 00.625-.625v-5.125a2.5 2.5 0 00-2.5-2.5h-.751v-2.2a3.751 3.751 0 00-7.5 0v2.2H248a2.5 2.5 0 00-2.5 2.5v5.125a2.5 2.5 0 002.5 2.5h9a2.5 2.5 0 002.5-2.5.625.625 0 00-1.25 0 1.251 1.251 0 01-1.25 1.25h-9a1.251 1.251 0 01-1.25-1.25v-5.125a1.251 1.251 0 011.25-1.25h9a1.251 1.251 0 011.25 1.25v5.125a.625.625 0 00.625.625zm-3.875-8.25h-5v-2.2a2.5 2.5 0 015 0z"
              data-name="Path 2063"
              transform="translate(-245.5 -244)"
            ></path>
            <circle
              cx="0.938"
              cy="0.938"
              r="0.938"
              data-name="Ellipse 2"
              transform="translate(4.963 9.756)"
            ></circle>
            <circle
              cx="0.937"
              cy="0.937"
              r="0.937"
              data-name="Ellipse 3"
              transform="translate(2.734 9.756)"
            ></circle>
            <circle
              cx="0.938"
              cy="0.938"
              r="0.938"
              data-name="Ellipse 4"
              transform="translate(7.192 9.756)"
            ></circle>
          </g>
        </g>
      </g>
    </svg>
  );
};

LockIcon.defaultProps = {
  color: "#00107d",
};
