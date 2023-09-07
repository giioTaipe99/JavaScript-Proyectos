const input = document.getElementById("ingresar-tareas");
const boton = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");
const tareasCreadas = [];
function agregarTarea() {
  if (input.value) {
    //crear tarea nueva
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");

    //texto ingresado por el usuario
    let texto = document.createElement("p");
    texto.innerText = input.value;
    let existTask = tareasCreadas.find((el) => el === input.value);
    if (!existTask) {
      tareaNueva.appendChild(texto);

      //contenedor de iconos
      let iconos = document.createElement("div");
      iconos.classList.add("iconos");
      tareaNueva.appendChild(iconos);

      //iconos
      let completar = document.createElement("i");
      completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
      completar.addEventListener("click", completarTarea);

      let eliminar = document.createElement("i");
      eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
      eliminar.addEventListener("click", eliminarTarea);

      iconos.append(completar, eliminar);

      //Agregamos a la lista de tareas
      listaDeTareas.appendChild(tareaNueva);
      tareasCreadas.push(texto.textContent);
    }
  } else {
    alert("Porfavor ingrega una tarea");
  }
}
function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  //toggle nos permirte alternar clases
  tarea.classList.toggle("completada");
}
function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener("click", agregarTarea);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});
