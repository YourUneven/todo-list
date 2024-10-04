import '../scss/style.scss'

 const popupText = document.querySelector('#popupText'),
popupButtonApply = document.querySelector('#popupApply'),
 listItems = document.getElementById('lisning');

 
popupButtonApply.addEventListener('click', addItemsBlock);

let todolist = [];

function addItemsBlock() {
  
  let newTodo = {
    todo: popupText.value,
    checked: false,
    importlant: false
  };
todolist.push(newTodo);
displayMessages();
}


function displayMessages() {
  let displayMessage = '';
  todolist.forEach(function(item, i) {
 displayMessage += `
 <li>
<div class="list-items__sub">
<input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}/>
 <label for="${i}"><span>${item.todo}</span></label>
    </div>
    <div class="img-search">
    <a href="#"><img class="img-redact" src="/public/images/Vector (3).png" alt="#"></a>
    <a href="#"><img class="img-delat" src="/public/images/trash-svgrepo-com 1.png" alt=""></a></li>`;
    listItems.innerHTML = displayMessage;

  });
}
//   const item = document.createElement('li')
// item.innerHTML = ``;
//   const listItems = document.getElementById('lisning');
//   lisning.appendChild(item);

listItems.addEventListener('change', function(event) {
 let idInput = console.log(event.target.getAttribute('id'));
 let forLabel = listItems.querySelector('[for=" + idInput +  "]');
  console.log('forLabel', forLabel);
  
});

 
 