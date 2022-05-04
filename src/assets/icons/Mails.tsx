import React, { FC } from "react";
import { colors } from "../../themes/color";
import { IconProps } from "./icons";

export const MailsIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.5"
      height="17.48"
      viewBox="0 0 18.5 17.48"
    >
      <g transform="translate(.25 .25)">
        <path
          fill={color}
          stroke={color}
          strokeWidth="0.5"
          d="M13.781 14.2H8.438a.703.703 0 010-1.406h5.344a2.816 2.816 0 002.813-2.812V4.219a2.816 2.816 0 00-2.812-2.812H4.219A2.816 2.816 0 001.407 4.22v5.414a.352.352 0 00.352.352h2.108a.703.703 0 010 1.406H1.758A1.76 1.76 0 010 9.633V4.219A4.224 4.224 0 014.219 0h9.563A4.224 4.224 0 0118 4.219v5.766a4.224 4.224 0 01-4.219 4.215zm-7.453-.7a.7.7 0 00-.7-.7H.7a.7.7 0 000 1.4h4.925a.7.7 0 00.703-.7zm2.109 2.778a.7.7 0 00-.7-.7H.7a.703.703 0 000 1.406h7.034a.7.7 0 00.704-.707zm3.137-7.93l3.405-2.584a.703.703 0 00-.85-1.12l-3.406 2.585a2.819 2.819 0 01-3.409 0l-3.3-2.548a.703.703 0 10-.86 1.113l3.3 2.549h0a4.228 4.228 0 005.116 0z"
          data-name="messages"
        ></path>
      </g>
    </svg>
  );
};
MailsIcon.defaultProps = {
  color: colors.gray["500"],
};
