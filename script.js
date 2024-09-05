let name = document.getElementById("name");
let profession = document.getElementById("profession");
let age = document.getElementById("age");
let addBtn = document.getElementById("submit");
let tableBody = document.getElementById("employees");
let msg = document.getElementById("msg");
let empty_msg = document.getElementById("empty-msg");

let list = [];
id = 0;

addBtn.addEventListener("click", function() {
    // id += 1;
    id = 1;
    if(list.length > 0){
        id  = list[list.length - 1].id+1;
        console.log(id);
    }
    let person = {
        id : id,
        name: name.value,
        profession: profession.value,
        age: age.value
    };

    if(person.name === "" || person.profession === "" || person.age === ""){
        msg.style.display = "block";
        msg.innerText = `Error : Please Make sure All the fields are filled before adding in an employee !`;
        msg.style.color = "red";
        return;
    }
    else{
        list.push(person);
        msg.style.display = "block";
        msg.innerText = `Success : Employee Added!`;
        msg.style.color = "green";
    }

    let row = document.createElement("tr");
    row.setAttribute("id", `row-${person.id}`);

    let div = document.createElement("div");
    div.setAttribute("class", "data");
    
    div.innerHTML = `<div id="cell">${person.id}.</div>
                    <div id="cell">Name : ${person.name}</div>
                    <div id="cell">Profession : ${person.profession}</div>
                    <div id="cell">Age : ${person.age}</div>`;
    
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() { deleteRow(person.id); };

    
    row.appendChild(div);
    row.appendChild(deleteButton);
    
    tableBody.appendChild(row);

    // clear i/p fields
    name.value = "";
    profession.value = "";
    age.value = "";

    //hide message in table
    empty_msg.style.display = "none";


});

function deleteRow(id){
    // remove from table

    let row = document.getElementById(`row-${id}`);
    row.remove();

    // remove from list
    list = list.filter(person => person.id!== id);
}