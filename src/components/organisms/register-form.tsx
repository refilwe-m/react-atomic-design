import React from "react";

import { AuthPanel, Button, Header, InputField } from "..";

export const RegisterForm = () => {
  return <AuthPanel className="p-12">
  <Header
    className="text-3xl font-extrabold text-white my-8 text-center font-momo"
    title="Codehesion Rockets"
  />
  <form className="text-black flex flex-col justify-center gap-8">
    <InputField
      color="text-black"
      className="placeholder:font-extrabold placeholder:text-gray-600"
      placeholder="Username"
    />
    <InputField
        color="text-gray-600"
        placeholder="Password"
        type="password"
        className="placeholder:font-extrabold placeholder:text-gray-600"
      />
    <section>
      <InputField
        color="text-gray-600"
        placeholder="Confirm Password"
        type="password"
        className="placeholder:font-extrabold placeholder:text-gray-600 mb-2"
      />
      <section className="flex justify-between text-xs">
        <Button
          className="text-blue-600 text-xs"
          variant="text"
          text=" Already have an acoount?"
        />
      </section>
    </section>

  <Button className="w-60 text-3xl" text="Register" />
  </form>
</AuthPanel>
};
