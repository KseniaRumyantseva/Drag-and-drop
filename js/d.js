let dragitem = document.getElementById('white');
let zones = document.querySelectorAll('.red');
dragitem.addEventListener('dragstart', dragstart);
dragitem.addEventListener('dragend', dragend);
zones.forEach(zona => {
    zona.addEventListener('dragenter', dragenter)
    zona.addEventListener('dragleave', dragleave)
    zona.addEventListener('dragover', dragover)
    zona.addEventListener('drop', dragdrop)
});

function dragstart (e){
    e.target.classList.add('drag-start');
    e.dataTransfer.setData('id', dragitem.dataset.target)

    //1 способ 
    //e.target.style.opacity = 0.01;
    //2 способ
    setTimeout(() =>{
        e.target.style.display = 'none';
    }, 0);
}

function dragend (e){
    e.target.classList.remove('drag-start');
    e.target.style.display = '';
}

function dragenter (e){
    e.preventDefault();
    e.target.classList.add('drag-zone');
}

function dragleave (e){
    e.preventDefault();
    e.target.classList.remove('drag-zone');
    e.target.classList.remove('good');
}

function dragover (e){
    e.preventDefault();
}

function dragdrop(e){
    e.preventDefault();
    e.target.classList.remove('drag-zone');
    if(e.target.id === e.dataTransfer.getData('id')){
        e.target.classList.add('good');
    }
    e.target.append(dragitem);
}