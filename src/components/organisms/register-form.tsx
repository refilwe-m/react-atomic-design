import React from "react";
import { useNavigate } from "react-router";
import { Formik } from "formik";

import { AuthPanel, Button, Header, InputField } from "..";
import { FormValues } from "./types";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const initialValue: FormValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const submit = (values: FormValues) => {
    console.log("Registered:", values);
  };
  return (
    <AuthPanel className="p-12">
      <Header
        className="text-3xl font-extrabold text-white my-8 text-center font-mono"
        title="Codehesion Rockets"
      />
      <Formik initialValue={initialValue} onSubmit={submit}>
        {({ values }) => (
          <form className="text-black flex flex-col items-center justify-center gap-8">
            <InputField
              name="username"
              color="text-black"
              className="placeholder:font-extrabold placeholder:text-gray-600"
              placeholder="Username"
            />
            <InputField
              name="password"
              color="text-gray-600"
              placeholder="Password"
              type="password"
              className="placeholder:font-extrabold placeholder:text-gray-600"
            />
            <section>
              <InputField
                name="confirmPassword"
                color="text-gray-600"
                placeholder="Confirm Password"
                type="password"
                className="placeholder:font-extrabold placeholder:text-gray-600 mb-2"
              />
              <section className="flex justify-between text-xs mt-2">
                <Button
                  onClick={() => navigate("/login")}
                  className="text-blue-700 hover:text-blue-500 text-xs"
                  variant="text"
                  text=" Already have an acoount?"
                />
              </section>
            </section>

            <Button
              onClick={() => {
                submit(values);
                navigate("/login");
              }}
              className="w-60 text-3xl hover:bg-green-700"
              text="Register"
            />
          </form>
        )}
      </Formik>
    </AuthPanel>
  );
};
