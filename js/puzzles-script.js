const imgs = document.querySelectorAll('.p-img');
const places = document.querySelectorAll('.place');
const puzzles = document.querySelectorAll('.puzzle');
const text = document.querySelector('.t_content');

let dragItem = null;
let count = places.length;
let i = 0;

imgs.forEach(img => {
    img.addEventListener('dragstart', dragstart);
    img.addEventListener('dragend', dragend);
});

[...places, ...puzzles].forEach(place => {
    place.addEventListener('dragover', dragover)
    place.addEventListener('drop', drop)
});

function dragstart(e) {
    dragItem = e.target;
    e.dataTransfer.setData('id', dragItem.dataset.target)
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0);
}

function dragend(e) {
    e.target.style.display = '';
}

function dragover(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (e.target.tagName !== 'IMG') {
        if (e.target.id === e.dataTransfer.getData('id')) {
            i++;
        }
        if (i === count) {
            text.textContent = 'Поздравляем! Задача решена!'
        }
        e.target.append(dragItem);
    }
}