import React, { FC } from "react";

interface UpdateUserProps {
  user: any;
}

export const UpdateUser: FC<UpdateUserProps> = ({ user }) => {
  console.log(user);

  return <div>UpdateUser</div>;
};
