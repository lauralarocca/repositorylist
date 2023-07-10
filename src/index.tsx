import { createRoot } from "react-dom/client";
import { App } from "./App";

const contaiter = document.getElementById('root')!; 
const root = createRoot(contaiter);
root.render(<App/>);