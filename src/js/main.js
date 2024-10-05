import '../scss/style.scss'

 const popupText = document.querySelector('#popupText'),
popupButtonApply = document.querySelector('#popupApply'),
 listItems = document.getElementById('lisning'),
 buttonDefault = document.querySelector('.img-default');


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
<li>
<input type="checkbox"id='item_${i}' ${item.checked ? 'checked' : ''}>
  <label for="item_${i}">${item.todo}</label>


<div class="img-search">
  
  <a class="img-redact" href="#">
<img  src="/public/images/Vector (3).png"onClick="editTask(${item}) alt="#"></a>
<a class="img-defauit" href="#"><img " src="/public/images/trash-svgrepo-com 1.png"onClick="deleteTask(${item}) alt=""></a> 
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



