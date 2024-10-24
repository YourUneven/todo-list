import '../scss/style.scss'

 const popupText = document.querySelector('#popupText'),
popupButtonApply = document.querySelector('#popupApply'),
 listItems = document.getElementById('lisning'),
 buttonDefault = document.querySelector('#buttonDef');


popupButtonApply.addEventListener('click', addItemsBlock);

let todolist = [];

if(localStorage.getItem('todo')) {
  todolist = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
}
function addItemsBlock() {
  let newTodo = {
    todo: popupText.value,
    checked: false,
    importlant: false
  };
todolist.push(newTodo);
displayMessages();
localStorage.setItem('todo', JSON.stringify(todolist));
}



function displayMessages() {
  let displayMessage = '';
  todolist.forEach(function(item, i) {
 displayMessage += `
<li id = 'items-${i}'>
<input type="checkbox"id='item_${i}' ${item.checked ? 'checked' : ''}>
  <label for="item_${i}"class="${item.importlant ? 'importlant' : ''}">${item.todo}</label>


<div class="img-search">
  
  <div id = buttonRedly> 
<img  src="/public/images/Vector (3).png" alt="#"></div>
<div onclick = "deleteListItemByIndex(item)" id = buttonDef>
 <img " src="/public/images/trash-svgrepo-com 1.png" alt=""></div></div> 
</li>`;
    listItems.innerHTML = displayMessage;

  });
}

 listItems.addEventListener('change', function(event) {
 let valueLabel = listItems.querySelector('[for=' + event.target.getAttribute('id') +' ]').innerHTML;


  todolist.forEach(function(item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem('todo', JSON.stringify(todolist));
    }
  });
});


function deleteListItemByIndex(item) {
  const attrIdValue = item.target.parentNode.getAttribute('id'); // получаем значение "items-1"
  if (listItems) {
    const index = Number(attrIdValue.replace('items-','')); // из "items-" получаем "1"
    listItems = JSON.parse(listItems).splice(index, 1); // удаляем элемент в массиве по индексу
    localStorage.setItem(keyName, JSON.stringify(listItems)); // записываем новые данные в хранилище
}
const parentNode = item.target.parentNode;
parentNode.removeChild(item.target);

};


