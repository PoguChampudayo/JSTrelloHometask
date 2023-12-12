console.log("app.js is bundled");

import Board from "./board";
import { saveToStorage, loadFromStorage } from "./localStorage";

const board = new Board();
if (board) console.log(board)

window.addEventListener("beforeunload", saveToStorage);

document.addEventListener("DOMContentLoaded", loadFromStorage);

window.dragElem = null;
window.placetoInsertExists = false;
