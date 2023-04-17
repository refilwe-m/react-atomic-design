import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import {
  AppLayout,
  AuthLayout,
  FormPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  ReportPage,
} from "../components";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<AuthLayout children={<LoginPage />} />} />
          <Route
            path="login"
            element={<AuthLayout children={<LoginPage />} />}
          />
          <Route
            path="register"
            element={<AuthLayout children={<RegisterPage />} />}
          />
          <Route
            path="profile"
            element={<AppLayout children={<ProfilePage />} />}
          >
            <Route path="report" element={<ReportPage />} />
            <Route path="form" element={<FormPage />} />
          </Route>

          <Route
            path="*"
            element={
              <AppLayout
                children={
                  <h1 className="text-3xl text-white">
                    Oops Page doesn't exist
                  </h1>
                }
              />
            }
          />
        </Route>
        path=""
      </Routes>
    </Router>
  );
};
