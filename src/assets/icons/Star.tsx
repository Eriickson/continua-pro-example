import React, { FC } from "react";
import { colors } from "src/themes/color";
import { IconProps } from "./icons";

export const StarIcon: FC<IconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.349"
      height="20.38"
      viewBox="0 0 20.349 20.38"
    >
      <path
        fill={color}
        d="M19.972 8.8a1.2 1.2 0 00-.592-2.031l-5.586-.846L11.423.762a1.238 1.238 0 00-2.285 0L6.6 5.925l-5.672.846A1.2 1.2 0 00.335 8.8L4.4 13.035v.085l-.933 5.67a1.313 1.313 0 001.862 1.439l4.74-2.709h.085l4.74 2.624a1.313 1.313 0 001.862-1.439l-.931-5.671v-.084z"
        data-name="Path 335"
        transform="translate(.021)"
      ></path>
    </svg>
  );
};

StarIcon.defaultProps = {
  color: colors.gray["500"],
};
