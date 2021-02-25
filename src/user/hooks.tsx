import React from "react";

import UserContext, {Context} from "./context";

export function usePoints(): [Context["state"]["user"]["points"], Context["actions"]["addPoints"]] {
  const {
    state: {user},
    actions: {addPoints},
  } = React.useContext(UserContext);

  return [user.points, addPoints];
}

export function useUser(): Context["state"]["user"] {
  const {
    state: {user},
  } = React.useContext(UserContext);

  return user;
}

export function useRedeem(): Context["actions"]["redeem"] {
  const {
    actions: {redeem},
  } = React.useContext(UserContext);

  return redeem;
}
