import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "@asgardeo/auth-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider
      config={{
        signInRedirectURL: process.env.REACT_APP_ASGARDEO_SIGN_IN_REDIRECT_URL,
        signOutRedirectURL:
          process.env.REACT_APP_ASGARDEO_SIGN_OUT_REDIRECT_URL,
        clientID: process.env.REACT_APP_ASGARDEO_CLIENT_ID,
        baseUrl: process.env.REACT_APP_ASGARDEO_BASE_URL,
        scope: ["openid", "profile", "roles"],
      }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
