import "./style.css";
import { Home } from "@pages/Home";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = Home();
