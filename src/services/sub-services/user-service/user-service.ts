import { openAPI } from "../../service";
import { tokenURL, userURL, authBody } from ".";
import { registrationPayload } from "./token-dto";
import { UserProps } from "./types";

export const UserService = {
  login: () => {
    const data = authBody();
    return openAPI.post(tokenURL, data);
  },
  register: (user: UserProps) => {
    const data = registrationPayload(user);
    return openAPI.post(userURL, data);
  },
};
