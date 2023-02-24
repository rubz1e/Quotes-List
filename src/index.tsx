import ReactDOM from "react-dom/client";
import "./index.scss";
import { Quotes } from "./quotes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Quotes />);
