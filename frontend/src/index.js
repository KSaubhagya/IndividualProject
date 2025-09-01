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
        signInRedirectURL: "http://localhost:3000",
        signOutRedirectURL: "http://localhost:3000",
        clientID: "8gnCKMv6fPGmV8cif5S9Km7fRxAa",
        baseUrl: "https://api.asgardeo.io/t/kavindi",
        scope: ["openid", "profile", "roles"],
      }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
