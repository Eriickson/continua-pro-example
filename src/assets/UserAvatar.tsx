import React, { FC } from "react";
import { colors } from "../themes/color";

interface UserAvatarProps {
  backgroudColor?: string;
}

export const UserAvatar: FC<UserAvatarProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="49"
      height="55"
      viewBox="0 0 49 55"
    >
      <defs>
        <clipPath id="clip-path">
          <circle
            cx="24.5"
            cy="24.5"
            r="24.5"
            fill={colors.primary["500"]}
            data-name="Ellipse 11"
            transform="translate(0 .499)"
          ></circle>
        </clipPath>
      </defs>
      <circle
        cx="24.5"
        cy="24.5"
        r="24.5"
        fill={colors.primary["500"]}
        data-name="Ellipse 10"
        transform="translate(0 6)"
      ></circle>
      <ellipse
        cx="2.423"
        cy="2.448"
        fill="#d98f67"
        data-name="Ellipse 6"
        rx="2.423"
        ry="2.448"
        transform="translate(32.845 14.748)"
      ></ellipse>
      <ellipse
        cx="2.423"
        cy="2.448"
        fill="#d98f67"
        data-name="Ellipse 7"
        rx="2.423"
        ry="2.448"
        transform="translate(11.846 14.748)"
      ></ellipse>
      <path
        fill="#d98f67"
        d="M22.773 39L17 32v-7h11.546v7z"
        data-name="Path 4"
        transform="translate(1.863 -.507)"
      ></path>
      <path
        fill="#e59e76"
        d="M33.782 13.794c0-8.864-20.782-5.832-20.782 0v8.164a10.391 10.391 0 1020.782 0z"
        data-name="Path 5"
        transform="translate(1.244 -3.297)"
      ></path>
      <path
        fill="#000001"
        d="M23.545 4C16.5 4 12 9.715 12 16.83v2.683l2.309 1.987v-5.836L28.164 11l4.618 4.665V21.5l2.309-1.983V16.83c0-4.665-1.155-9.331-6.927-10.5L27.009 4h-3.464z"
        data-name="Path 6"
        transform="translate(1.09 -4)"
      ></path>
      <g
        clipPath="url(#clip-path)"
        data-name="Mask Group 1"
        transform="translate(0 5.501)"
      >
        <path
          fill="#ffa101"
          d="M30.246 31a13.891 13.891 0 01-5.773 1.166A13.891 13.891 0 0118.7 31S6 33.333 6 46.163l19.881 21.9 17.065-21.9c0-12.83-12.7-15.163-12.7-15.163z"
          data-name="Path 7"
          transform="translate(.163 -5.01)"
        ></path>
      </g>
    </svg>
  );
};
