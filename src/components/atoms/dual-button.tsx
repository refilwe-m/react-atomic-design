import React from "react";
import { Button } from "..";

type DualBtnProps = {
  texts: string[];
};

export const DualButton = ({ texts }: DualBtnProps) => {
  return (
    <section className="flex gap-6">
      <Button
        className="bg-indigo-500 w-25 text-white p-2 w-20"
        text={texts[0]}
      />
      <Button
        className="border-red-600 border text-red-600 w-20"
        text={texts[1]}
        variant="outline"
      />
    </section>
  );
};
