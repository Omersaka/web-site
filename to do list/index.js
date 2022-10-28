let addtodobutton = document.getElementById('addToDo');
let todocontainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearTodo = document.getElementById('clearToDo');


addtodobutton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    todocontainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph);

    });

     clearTodo.addEventListener('click',function(){
        paragraph.remove();
     })
});


