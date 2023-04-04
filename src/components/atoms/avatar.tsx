import React from "react";

type AvatarProps = {
  imgSrc: string;
  onlineStatus?: "Online" | "Offline";
};

export const Avatar = ({ imgSrc, onlineStatus }: AvatarProps) => {
  return (
    <section className="avatar">
      <img src={imgSrc} alt="Avatar" />
      <p>{onlineStatus}</p>
    </section>
  );
};
