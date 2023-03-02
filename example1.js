let items = JSON.parse(localStorage.getItem("todo-list")) || [];

function addItem() {
    let inputBox = document.querySelector("#todo-input");
    let item = inputBox.value;

    if(item === "") {
        return alert("Please enter data");
    }

    items.push({
        value: item,
        time: new Date().toLocaleDateString("en-US"),
    });

    localStorage.setItem("todo_list", JSON.stringify(items));

    listItems();

    inputBox.value = "";

}

function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem("todo-list", JSON.stringify(items));
    listItems();
}

function markAsDone(index) {
    items[index].done = !items[index].done;
    localStorage.setItem("todo-list", JSON.stringify(items));
    listItems();
}

