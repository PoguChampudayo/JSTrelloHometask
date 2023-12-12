let placeToInsert;

export function startDragCard() {
  console.log("dragstart");
  window.dragElem = this;
}

export function endDragCard() {
  console.log("dragend");
  window.dragElem = null;
}

export function dragContainerOver(e) {
  e.preventDefault();
}

export function dragContainerEnter(e) {
  console.log("dragenter");
  e.preventDefault();

  if (!window.placeToInsertExists) {
    let insertBeforeElement = document.elementFromPoint(e.clientX, e.clientY);
    if (
      insertBeforeElement.classList.contains("card") ||
      insertBeforeElement.classList.contains("add-container")
    ) {
      let placeToInsert = document.createElement("div");
      placeToInsert.classList.add("place-to-insert");
      placeToInsert.textContent = "Drop me here...";
      placeToInsert.style.width = window.dragElem.offsetWidth + "px";
      placeToInsert.style.height = window.dragElem.offsetHeight + "px";
      insertBeforeElement.parentElement.insertBefore(
        placeToInsert,
        insertBeforeElement
      );
      window.placeToInsertExists = true;
    }
  }
}

export function dragContainerLeave() {
  if (window.placeToInsertExists) {
    setTimeout(() => {
      window.placeToInsertExists = false;
      placeToInsert = document.querySelector(".place-to-insert");
      if (placeToInsert) placeToInsert.remove();
    }, 1000);
  }
}

export function dropInContainer() {
  console.log("drop");

  if (window.placeToInsertExists) {
    placeToInsert = document.querySelector(".place-to-insert");
    placeToInsert.parentElement.insertBefore(window.dragElem, placeToInsert);
    placeToInsert.remove();
    window.placeToInsertExists = false;
  }
}
