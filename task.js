let input = document.getElementById("task");
let addBtn = document.getElementById("add");
let showBtn = document.getElementById("show");
let list = document.getElementById("list");

function loadTasks(){
    list.innerHTML = localStorage.getItem("tasks") || "";
    addEvents();
}

loadTasks();


addBtn.addEventListener("click", function(){
    if(input.value === "") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = input.value;

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);

    list.appendChild(li);

    input.value = "";
    saveTasks();
    addEvents();
});


function addEvents(){
    document.querySelectorAll("li").forEach(li=>{
        let span = li.children[0];
        let completeBtn = li.children[1];
        let removeBtn = li.children[2];

        completeBtn.onclick = function(){
            span.classList.toggle("completed");

            if(span.classList.contains("completed")){
                span.innerText = span.innerText.replace(" (Completed)", "") + " (Completed)";
            }else{
                span.innerText = span.innerText.replace(" (Completed)", "");
            }
            saveTasks();
        }

        removeBtn.onclick = function(){
            li.remove();
            saveTasks();
        }
    });
}


function saveTasks(){
    localStorage.setItem("tasks", list.innerHTML);
}