import React from "react";

import { AuthPanel, Button, InputField, Header } from "..";

export const LoginForm = () => {
  return (
    <AuthPanel className="p-12">
      <Header
        className="text-3xl font-extrabold text-white my-8 text-center font-momo"
        title="Codehesion Rockets"
      />
      <form className="text-black flex flex-col items-center justify-center gap-8">
        <InputField
          color="text-black"
          className="placeholder:font-extrabold placeholder:text-gray-600"
          placeholder="Username"
        />
        <section>
          <InputField
            color="text-gray-600"
            placeholder="Password"
            type="password"
            className="placeholder:font-extrabold placeholder:text-gray-600 mb-2"
          />
          <section className="flex justify-between text-xs">
            <label className="text-white" htmlFor="remember-me">
              <input className="mr-3" name="remember-me" type="checkbox" />
              Keep me signed in
            </label>
            <Button
              className="text-blue-600 text-xs"
              variant="text"
              text="Forgot Password?"
            />
          </section>
        </section>

        <Button className="w-60 text-3xl" text="Login" />
      </form>
    </AuthPanel>
  );
};
