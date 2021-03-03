import React from "react";

import {User} from "./types";

export interface AuthContextShape {
  isAuth: boolean;
  auth: User | null;
}

export const AuthContext = React.createContext<
  [AuthContextShape, React.Dispatch<React.SetStateAction<AuthContextShape>>]
>([{isAuth: false, auth: null}, () => null]);
