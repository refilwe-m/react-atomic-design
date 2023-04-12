import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Formik, FormikValues } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { AuthPanel, Button, Header, InputField } from "..";
import { FormValues } from "./types";

export const RegisterForm = () => {
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const navigate = useNavigate();
  const initialValues: FormValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const schema = z
    .object({
      username: z.string().email(),
      password: z
        .string()
        .min(8)
        .regex(/[A-Z]/g, "Must contain an uppercase letter")
        .regex(
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
          "Must contain a special character"
        ),
      confirmPassword: z
        .string()
        .min(8)
        .regex(/[A-Z]/g, "Must contain an uppercase letter")
        .regex(
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g,
          "Must contain a special character"
        ),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const submit = (values: FormValues) => {
    console.log("Registered:", values);
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
        validationSchema={toFormikValidationSchema(schema)}
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
                console.log("Errors:", errors);
                if (submitEnabled) {
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
