import * as React from "react";

import Layout from "../Layout";
import routes from "../../routes";

const App: React.FC = () => {
  return (
    <div>
      <Layout>{routes()}</Layout>
    </div>
  );
};

export default App;
