import React from "react";
import StaticContent from "./pages/StaticContent/StaticContent";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <StaticContent />
    </Provider>
  );
};

export default App;
