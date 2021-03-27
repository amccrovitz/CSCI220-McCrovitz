//add list item from input text
function addItem() {

    var list = document.getElementsByTagName('ul')[0];
    var newLI = document.createElement('li');
    var inputTodo = document.getElementById("todoItem").value;
    var newTodo = document.createTextNode(inputTodo);



    //add to the bottom of the list
    newLI.appendChild(newTodo);
    list.appendChild(newLI);



}
//Clearing the list
function clearList() {
    var row = document.getElementsByTagName("ul");
    row[0].innerHTML = "";
}