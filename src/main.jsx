import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import FetchProvider from "./context/FetchProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FetchProvider>
      <App />
    </FetchProvider>
  </StrictMode>
);
