import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@/components/theme-provider";
import UrlRoutes from "./UrlRoutes";

import "./index.css";

export default function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <UrlRoutes />
      </ThemeProvider>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
