import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

/* ReactDOM.render(<App notes={notes} />, rootElement); */
