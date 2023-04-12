import React from "react";
import { useNavigate } from "react-router-dom";

import { AuthPanel, Button, InputField, Header } from "..";

export const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <AuthPanel className="p-12">
      <Header
        className="text-3xl font-extrabold text-white my-8 text-center font-mono"
        title="Codehesion Rockets"
      />
      <form className="text-black flex flex-col items-center justify-center gap-8">
        <InputField color="text-black" className="p" placeholder="Username" />
        <section>
          <InputField
            color="text-gray-600"
            placeholder="Password"
            type="password"
            className="mb-2"
          />
          <section className="flex justify-between text-xs">
            <label className="text-white" htmlFor="remember-me">
              <input className="mr-3" name="remember-me" type="checkbox" />
              Keep me signed in
            </label>
            <Button
              onClick={() => navigate("/register")}
              className="text-blue-700 hover:text-blue-500 text-xs"
              variant="text"
              text="Forgot Password?"
            />
          </section>
        </section>

        <Button
          className="w-60 text-3xl hover:bg-green-700"
          text="Login"
          onClick={() => navigate("/profile")}
        />
      </form>
    </AuthPanel>
  );
};
