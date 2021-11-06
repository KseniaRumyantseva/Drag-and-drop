const animals = document.querySelectorAll('.animal');
const imgs = document.querySelectorAll('.a-img');
const cells = document.querySelectorAll('.cell');
const text = document.querySelector('.t_content');
const kol = document.querySelector('.kol');

let dragItem = null;
let dragSourse = null;
let count = cells.length;

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
    dragSourse = e.target.closest('.cell');
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
    if(e.target.tagName !== 'IMG'){
        e.target.append(dragItem)
        if(dragItem.dataset.kind == 'predator'){
            changeVisualRes(dragSourse, e.target.closest('.cell'), 'cell-right')

            if(getCountRes() === count){
                text.textContent ='Поздравляем! Задача решена!'
                text.classList.add('res')
            }else{
                text.textContent = 'Найдите хищников и перетащите их клетки!'
                text.classList.remove('res')
            }
            kol.textContent = `Количество хищников в клетках: ${getCountRes()}`;
        }
    }
}

function getCountRes(){
    return document.querySelectorAll('.cell>img[data-kind="predator"]').length
}

function changeVisualRes(elSourse, elRes, classRes){
    if(elRes != null) elRes.classList.add(classRes);
    if(elSourse != null) elSourse.classList.remove(classRes); 
}