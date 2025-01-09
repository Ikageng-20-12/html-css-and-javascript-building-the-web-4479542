function dragElement(Element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  Element.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = stopElementDrag;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    Element.style.top = (Element.offsetTop - pos2) + "px";
    Element.style.left = (Element.offsetLeft - pos1) + "px";
  }

  function stopElementDrag() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));