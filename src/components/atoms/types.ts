import { ReactNode } from "react";

export type panelProps = {
  children: React.ReactNode;
  title?: string;
};

export type AvatarProps = {
  imgSrc: string;
  onlineStatus?: "Online" | "Offline";
};

export type ErrorTextProps = { message: string };

export type HeaderProps = {
  title: string;
  className: string;
};

export type ButtonProps = {
  text: string;
  className?: string;
  children?: ReactNode;
  variant?: "container" | "outline" | "text";
  func?: "edit" | "delete" | "add";
  action?: () => {};
};
