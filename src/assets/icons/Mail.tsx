import React, { FC } from "react";

interface MailIconProps {
  color?: string;
}

export const MailIcon: FC<MailIconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.4"
      height="12.576"
      viewBox="0 0 16.4 12.576"
    >
      <g data-name="Group 27" opacity="0.6" transform="translate(.2 -57.55)">
        <g
          fill={color}
          stroke={color}
          strokeWidth="0.4"
          data-name="Group 26"
          transform="translate(0 57.75)"
        >
          <path
            d="M14.047 0H1.957A1.958 1.958 0 000 1.957v8.263a1.958 1.958 0 001.957 1.957h12.086A1.958 1.958 0 0016 10.22V1.96A1.956 1.956 0 0014.047 0zm1.063 10.22a1.064 1.064 0 01-1.063 1.063H1.957A1.064 1.064 0 01.894 10.22V1.96A1.064 1.064 0 011.957.897h12.086a1.064 1.064 0 011.063 1.063v8.26z"
            data-name="Path 2061"
          ></path>
          <path
            d="M9.779 6.007l3.326-2.833a.35.35 0 00.028-.511.4.4 0 00-.537-.027l-4.587 3.91-.895-.759s-.006-.005-.006-.008a.556.556 0 00-.062-.051l-3.641-3.1a.394.394 0 00-.537.029.348.348 0 00.031.511l3.366 2.857-3.352 2.98a.35.35 0 00-.017.511.4.4 0 00.279.115.392.392 0 00.259-.1l3.4-3.023.923.783a.394.394 0 00.507 0l.948-.807 3.382 3.052a.4.4 0 00.537-.013.35.35 0 00-.014-.511z"
            data-name="Path 2062"
          ></path>
        </g>
      </g>
    </svg>
  );
};

MailIcon.defaultProps = {
  color: "#00107d",
};
