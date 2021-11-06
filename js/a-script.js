const animals = document.querySelectorAll('.animal');
const imgs = document.querySelectorAll('.a-img');
const cells = document.querySelectorAll('.cell');

let dragItem = null;
imgs.forEach(cell => {
    cell.addEventListener('dragstart', dragstart);
    cell.addEventListener('dragend', dragend);
});

[...animals, ...cells].forEach(cell => {
    cell.addEventListener('dragover', dragover);
    cell.addEventListener('drop', dragdrop);
});

function dragstart(e){
    dragItem = e.target;
    setTimeout(() => {
        e.target.style.display = 'none'
    }, 0)
}

function dragend(e){
    e.target.style.display = ''
}

function dragover(e){
    e.preventDefault();
}

function dragdrop(e){
    e.preventDefault();
    if(dragItem.dataset.kind == 'predator' && e.target.tagName !== 'IMG'){
        e.target.append(dragItem)
    }
}