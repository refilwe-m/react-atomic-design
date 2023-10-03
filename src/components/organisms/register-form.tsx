import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Formik, FormikValues } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { AuthPanel, Button, Header, InputField } from "@project/components";
import { FormValues } from "./types";
import { registerSchema } from "../../schemas";
import { UserService } from "../../services";

export const RegisterForm = () => {
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const navigate = useNavigate();
  const initialValues: FormValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const submit = async (values: FormValues) => {
    //call register api [POST]
    const { data } = await UserService.register(values);
    console.table(data);
    //To-Do: Acknowledge success or failure
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
        validationSchema={toFormikValidationSchema(registerSchema)}
      >
        {({ values, errors }) => (
          <form className="text-black flex flex-col items-center justify-center gap-8">
            <InputField
              name="username"
              color="text-black"
              className="placeholder:font-extrabold placeholder:text-gray-600"
              placeholder="Username"
              hasError={!!errors.username}
              errorMsg={errors.username}
            />
            <InputField
              name="password"
              color="text-gray-600"
              placeholder="Password"
              type="password"
              className="placeholder:font-extrabold placeholder:text-gray-600"
              hasError={!!errors.password}
              errorMsg={errors.password}
            />
            <section>
              <InputField
                name="confirmPassword"
                color="text-gray-600"
                placeholder="Confirm Password"
                type="password"
                className="placeholder:font-extrabold placeholder:text-gray-600 mb-2"
                hasError={!!errors.confirmPassword}
                errorMsg={errors.confirmPassword}
              />
              <section className="flex justify-between text-xs mt-2">
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                  className="text-blue-700 hover:text-blue-500 text-xs"
                  variant="text"
                  text=" Already have an acoount?"
                />
              </section>
            </section>

            <Button
              onClick={(e) => {
                e.preventDefault();
                submit(values);
                if (Object.keys(errors).length == 0) {
                  navigate("/login");
                }
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
