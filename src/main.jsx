import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

import { LojaProvider } from "./context/LojaContext.jsx";
import { ProdutoProvider } from "./context/ProdutoContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <SearchProvider>

      <LojaProvider>

        <ProdutoProvider>

          <AuthProvider>

            <App />

          </AuthProvider>

        </ProdutoProvider>

      </LojaProvider>

    </SearchProvider>

  </StrictMode>
);