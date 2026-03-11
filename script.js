function adicionarTarefa(){

let tarefa = document.getElementById("tarefa").value 

if(tarefa === ""){
alert("Digite uma tarefa")
return
}

let li = document.createElement("li")

li.innerText = tarefa 

li.onclick = function(){

li.style.textDecoration = "line-through"

}

document.getElementById("lista").appendChild(li)

document.getElementById("tarefa").value = ""

}
