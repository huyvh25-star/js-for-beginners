let btnAdd = document.getElementById("add-btn");
let input = document.getElementById("task-input");
let listElement = document.getElementById("task-list");
let task = '';
const tasks = [];
input.addEventListener('input', function () {
    task = this.value;
    document.getElementById("task-value").innerText = task;
})
// save task
btnAdd.addEventListener('click', function () {
    tasks.push(task)
    renderTask();
})

const renderTask = () => {
    listElement.innerText = '';
    tasks.forEach((item, index) => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        let span = document.createElement('span');
        span.innerText = item;
        button.innerText = 'delete'
        button.addEventListener('click', function () {
            tasks.splice(index, 1,);
            renderTask();
        })
        li.appendChild(span)
        li.appendChild(button)
        listElement.appendChild(li);
    })
    console.log(typeof tasks)
    console.log("list task : ", tasks);
}


