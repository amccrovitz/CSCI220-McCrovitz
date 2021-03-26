function AddItem() {
    var list = document.getElementsByTagName('ul')[0];
    var newLI = document.createElement('li');
    var inputTodo = document.getElementById("todoItem").value;
    var newTodo = document.createTextNode(inputTodo);


    newLI.appendChild(newTodo);
    list.appendChild(newLI);


}