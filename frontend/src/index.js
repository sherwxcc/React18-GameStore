import "@fontsource/cooper-hewitt/400.css";
import "@fontsource/cooper-hewitt/500.css";
import "@fontsource/cooper-hewitt/700.css";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AccountProvider } from "contexts/AccountContext";
import { ColorProvider } from "contexts/ColorContext";
import { MessageProvider } from "contexts/MessageContext";
import App from "App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorProvider>
      <AccountProvider>
        <MessageProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MessageProvider>
      </AccountProvider>
    </ColorProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
