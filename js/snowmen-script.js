let x = 0, 
y = 0, 
dragItem = null;
document.body.addEventListener('dragstart', moveStart);
document.body.addEventListener('dragend', moveEnd);
document.body.addEventListener('dragover', moveDragOver);
document.body.addEventListener('drop', moveDrop);

function moveStart(e){
    dragItem = e.target;
    x = e.offsetX;
    y = e.offsetY;

    resetZIndex();
    dragItem.style.zIndex = 10;
    setTimeout(()=>{dragItem.style.display = 'none';},0);
}

function moveEnd(e){
    dragItem.style.display = '';
}

function moveDragOver(e){
    e.preventDefault();
}
 
function moveDrop(e){
    e.preventDefault();
    dragItem.style.left = (e.pageX - x) + 'px';
    dragItem.style.top = (e.pageY - y) + 'px';
}

function resetZIndex(){
    dragItem.style.zIndex = 5;
}
