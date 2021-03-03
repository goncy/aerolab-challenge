import React from "react";

import {User} from "./types";

export interface AuthContextShape {
  isAuth: boolean;
  auth: User | null;
}

export const AuthContext = React.createContext([]);
