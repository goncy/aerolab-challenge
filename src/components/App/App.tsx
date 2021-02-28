import React, {useEffect, useState} from "react";

import routes from "../../routes";
import api from "../../api";
import {AuthContext} from "~/context";
import {User} from "~/types";
import Layout from "../Layout";

// interface UserResponse {
//   data: User;
// }

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [auth, setAuth] = useState<User | null>(null);

  useEffect(() => {
    api
      .logInUser()
      .then((res) => {
        setAuth(res.data);
        setIsAuth(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AuthContext.Provider value={{auth, isAuth}}>
      <Layout>{routes()}</Layout>
    </AuthContext.Provider>
  );
};

export default App;
