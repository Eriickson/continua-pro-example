import React, { FC } from "react";
import { colors } from "../../themes/color";
import { IconProps } from "./icons";

export const LogoutIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.138"
      height="19.001"
      viewBox="0 0 19.138 19.001"
    >
      <path
        fill={color}
        stroke={color}
        strokeWidth="1"
        d="M5.946 14.282v1.406A2.816 2.816 0 008.759 18.5h7.067a2.816 2.816 0 002.812-2.812V3.313A2.816 2.816 0 0015.825.5H8.759a2.816 2.816 0 00-2.813 2.813v1.406a.703.703 0 001.406 0V3.313a1.408 1.408 0 011.407-1.407h7.067a1.408 1.408 0 011.406 1.406v12.376a1.408 1.408 0 01-1.406 1.406H8.759a1.408 1.408 0 01-1.406-1.406v-1.406a.703.703 0 00-1.406 0zM1.152 8.293l1.575-1.575a.703.703 0 01.994.994l-1.12 1.12h8.443a.703.703 0 110 1.406H2.601l1.12 1.12a.703.703 0 11-.994.994l-1.575-1.573a1.76 1.76 0 010-2.486zm0 0"
      ></path>
    </svg>
  );
};

LogoutIcon.defaultProps = {
  color: colors.gray["500"],
};
