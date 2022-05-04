import React, { FC } from "react";
import { colors } from "../../themes/color";
import { IconProps } from "./icons";

export const CalendarIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.5"
      height="18.463"
      viewBox="0 0 18.5 18.463"
    >
      <path
        fill={color}
        stroke={color}
        strokeWidth="0.5"
        d="M2.965 18.213A2.725 2.725 0 01.25 15.499V4.225A2.727 2.727 0 012.965 1.51H4.15v-.5a.764.764 0 111.528 0v.5h7.108v-.5a.764.764 0 011.528 0v.5h1.223a2.722 2.722 0 012.713 2.715v11.314a2.774 2.774 0 01-2.751 2.674zM1.778 4.188v11.311a1.193 1.193 0 001.187 1.187h12.57a1.193 1.193 0 001.187-1.187h0V4.228a1.193 1.193 0 00-1.187-1.187h-1.219v.5a.783.783 0 01-.764.727.768.768 0 01-.764-.764v-.462H5.679v.492a.735.735 0 01-.764.727.768.768 0 01-.765-.764v-.5H2.965a1.193 1.193 0 00-1.187 1.191zm11.733 10.738a.764.764 0 010-1.528h.918a.768.768 0 01.764.764.821.821 0 01-.764.764zm-4.739 0a.764.764 0 010-1.528h.918a.764.764 0 110 1.528zm-4.7 0a.764.764 0 110-1.528h.918a.768.768 0 01.764.764.821.821 0 01-.764.764zm9.441-3.211a.764.764 0 010-1.528h.918a.768.768 0 01.764.764.789.789 0 01-.764.764zm-4.739 0a.764.764 0 010-1.528h.918a.768.768 0 01.764.764.743.743 0 01-.764.764zm-4.7 0a.764.764 0 110-1.528h.918a.768.768 0 01.758.763.789.789 0 01-.764.764zm9.441-3.17a.764.764 0 010-1.528h.918a.766.766 0 01.764.764.821.821 0 01-.764.764zm-4.739 0a.764.764 0 010-1.528h.918a.764.764 0 110 1.528zm-4.7 0a.764.764 0 110-1.528h.918a.766.766 0 01.764.764.821.821 0 01-.764.764z"
      ></path>
    </svg>
  );
};

CalendarIcon.defaultProps = {
  color: colors.gray["500"],
};