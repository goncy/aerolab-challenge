import React, {useEffect, useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import routes from "../../routes";
import api from "../../api";
import {AuthContext} from "~/context";
import Layout from "../Layout";
import {AuthContextShape} from "../../context";

// interface UserResponse {
//   data: User;
// }

const App: React.FC = () => {
  const [authContext, setAuthContext] = useState<AuthContextShape>({auth: null, isAuth: false});

  useEffect(() => {
    api
      .logInUser()
      .then((res) => {
        setAuthContext({auth: res.data, isAuth: true});
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AuthContext.Provider value={[authContext, setAuthContext]}>
      <Router>
        <Layout>{routes()}</Layout>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
