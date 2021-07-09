import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/store";

import { AppWithState } from "./containers/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={Store}>
      <AppWithState />
    </Provider>
  </StrictMode>,
  rootElement
);
