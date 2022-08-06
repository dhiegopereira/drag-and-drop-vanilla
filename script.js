let listAll = document.querySelectorAll('.list');



let listId = null;

const list = ['To', 'In Progress', 'Done'];

const items = [
    {
        text: 'Draggable 1',
        list: 0
    },
    {
        text: 'Draggable 2',
        list: 0
    },
    {
        text: 'Draggable 3',
        list: 0
    }
]

listAll.forEach(item => {
    item.addEventListener('dragover', (e) => e.preventDefault());
    item.addEventListener('drop', onDrop);
});



function buildlist() {
    // listAll.forEach(item => {
    //     item.innerHTML = '';
    // }
    // );
    console.log(items);
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'example-draggable';
        div.innerText = item.text;
        div.draggable = "true";
        div.addEventListener('dragstart', () => listId = item.list);
        listAll[item.list].appendChild(div);
    });
}

buildlist();



function onDrop(event) {
    console.log(event.target.innerText);
    const listIndex = list.findIndex(item => item.trim() === event.target.innerText.trim());
    const itemIndex = items.findIndex(item => item.list === listId);
    items[itemIndex].list = listIndex;
    // console.log(items);
    buildlist();



    // const draggableElement = document.getElementById(id);

    // console.log(id);

    // const dropzone = event.target;

    // dropzone.appendChild(draggableElement);

    // event
    //     .dataTransfer
    //     .clearData();

}