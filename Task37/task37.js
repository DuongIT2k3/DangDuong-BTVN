function addItem(){
    let idElement = document.getElementById("list");
    let newItem = document.createElement("div");
    newItem.className = "item"
    newItem.innerHTML = `Phần tử ${idElement.children.length + 1}` 
    idElement.appendChild(newItem);
    console.log(newItem);
}

function removeItem(){
    let idElement = document.getElementById("list");
    if(idElement.children.length > 0){
        idElement.removeChild(idElement.lastChild);
    }else{
        alert("Không còn phần tử nào để xoá!")
    }
    
}