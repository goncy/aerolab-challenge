import React from "react";

import {User} from "./types";

interface AuthContextShape {
  isAuth: boolean;
  auth: User | null;
}

export const AuthContext = React.createContext<AuthContextShape>({isAuth: false, auth: null});
