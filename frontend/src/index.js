import { Provider } from "react-redux";
import { render } from "react-dom";
import { StrictMode } from "react";
import store from "store";
import "reset.module.scss";
import "index.module.scss";
import App from "App";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
