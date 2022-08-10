const input = document.querySelector("#inputTarea")
const btnAgregar = document.querySelector("#agregarBtn")
const total = document.querySelector("#total")
const realizadas = document.querySelector("#realizadas")
const tbody = document.querySelector("tbody")
let idCounter = 4
let tareasCompletadas = 0
const tareas = [{id: 1, nombre:"Dejarla ir", completado:false}, {id:2, nombre:"Ir a terapia", completado:false}, {id:3, nombre:"Ser feliz", completado:false}]
renderTable()

btnAgregar.addEventListener("click", () => {
    if(input.value == ""){
        alert("Debes escribir algo")
    }else{
        const nuevaTarea = {id: idCounter, nombre:input.value, completado:false}
        tareas.push(nuevaTarea)
        input.value = "" 
        idCounter ++
        renderTable()
    }
    
})

function renderTable(){
    total.innerHTML = tareas.length //actualiza el numero total de tareas
    let html = ""
    for (let tarea of tareas){
        html += `<tr id="a${tarea.id}">
                    <td>${tarea.id}</td>
                    <td >${tarea.nombre}</td>
                    <td><input type="checkbox" onchange="completar(${tarea.id})"> </td>
                    <td><span class="iconoEliminar" onclick="borrar(${tarea.id})"> X </span></td>
                </tr>`
    }
    tbody.innerHTML = html
    tacharTareas()
}

function tacharTareas(){ //elimina el checkbox y marca las tareas completadas
    for (let tarea of tareas){
       if (tarea.completado){
        const nombre = document.querySelector("#a" + tarea.id + " :nth-child(2)") //seleccion la celda donde va el nombre
        const checkbox = document.querySelector("#a" + tarea.id + " :nth-child(3)") //selecciona la celda del checkbox
        checkbox.innerHTML = "" //elimina el checkbox de la tarea completada
        nombre.style.textDecoration = "line-through"
        nombre.style.fontStyle = "italic"
    }
}}

function borrar(id){
    const index = tareas.findIndex((tarea) => tarea.id == id)
    tareas.splice(index, 1)
    renderTable()
}

function completar(id){
    const index = tareas.findIndex((tarea) => tarea.id == id) //busca el indice de la tarea seleccionada
    tareas[index].completado = true //cambia el estado del atributo completado de dicha tarea
    //actualiza el contador de tareas completadas:
    tareasCompletadas ++ 
    realizadas.innerHTML = tareasCompletadas
    tacharTareas()
}