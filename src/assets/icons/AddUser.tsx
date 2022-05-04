import React, { FC } from "react";
import { colors } from "../../themes/color";
import { IconProps } from "./icons";

export const AddUserIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15.999"
      viewBox="0 0 16 15.999"
    >
      <path
        fill={color}
        d="M-218-1589v-2h-2v-2h2v-2h2v2h2v2h-2v2zm-12 0v-1a4.951 4.951 0 015-5h3v2h-3a2.913 2.913 0 00-2.8 2h5.8v2zm3-11v-1a4.012 4.012 0 014-4 4.012 4.012 0 014 4v1a4.012 4.012 0 01-4 4 4.012 4.012 0 01-4-4zm2-1v1a2.006 2.006 0 002 2 2.006 2.006 0 002-2v-1a2.006 2.006 0 00-2-2 2.006 2.006 0 00-2 2z"
        data-name="icon_add-user"
        transform="translate(230 1605)"
      ></path>
    </svg>
  );
};

AddUserIcon.defaultProps = {
  color: colors.gray["500"],
};
