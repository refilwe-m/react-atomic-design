import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { AuthPanel, Button, InputField, Header } from "..";
import { FormValues } from "./types";
import { loginSchema } from "../../schemas";

export const LoginForm = () => {
  const navigate = useNavigate();

  const submit = (values: FormValues) => {
    console.log("Logged In:", values);
  };

  const initialValues: FormValues = {
    username: "",
    password: "",
  };

  return (
    <AuthPanel className="p-12">
      <Header
        className="text-3xl font-extrabold text-white my-8 text-center font-mono"
        title="Codehesion Rockets"
      />
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={toFormikValidationSchema(loginSchema)}
      >
        {({ values, errors }) => (
          <form className="text-black flex flex-col items-center justify-center gap-8">
            <InputField
              name="username"
              color="text-black"
              className="p"
              placeholder="Username"
              hasError={!!errors.username}
              errorMsg={errors.username}
            />
            <section>
              <InputField
                name="password"
                color="text-gray-600"
                placeholder="Password"
                type="password"
                hasError={!!errors.password}
                errorMsg={errors.password}
              />
              <section className="flex justify-between text-xs mt-2">
                <label className="text-white" htmlFor="remember-me">
                  <input className="mr-3" name="remember-me" type="checkbox" />
                  Keep me signed in
                </label>
                <Button
                  onClick={() => navigate("/register")}
                  className="text-xs"
                  variant="text"
                  text="Forgot Password?"
                />
              </section>
            </section>

            <Button
              className="w-60 text-3xl"
              text="Login"
              onClick={(e) => {
                e.preventDefault();
                submit(values);
                if (Object.keys(errors).length === 0) navigate("/profile");
              }}
            />
          </form>
        )}
      </Formik>
    </AuthPanel>
  );
};
