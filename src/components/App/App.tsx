import * as React from "react";

import Layout from "../Layout";
import routes from "../../routes";

const App: React.FC = () => {
  return <Layout>{routes()}</Layout>;
};

export default App;
