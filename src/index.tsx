import ReactDOM from "react-dom/client";
import App from "./App";
import QueryContextProvider from "./contexts/QueryContext";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryContextProvider>
    <App />
  </QueryContextProvider>
);
