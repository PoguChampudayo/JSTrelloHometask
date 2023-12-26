import Controller from "./Controller";
import { saveToStorage, loadFromStorage } from "./localStorage";
import Card from "./Card";

const controller = new Controller();
controller.init();

document.body.addEventListener("mousedown", controller.onMouseDown);
document.body.addEventListener("mouseup", controller.onMouseUp);
document.body.addEventListener("mousemove", controller.onMouseMove);

window.addEventListener("beforeunload", saveToStorage);

document.addEventListener("DOMContentLoaded", loadFromStorage);
