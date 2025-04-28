import "@ant-design/v5-patch-for-react-19"; //* Importación de la biblioteca de parches para Ant Design
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
