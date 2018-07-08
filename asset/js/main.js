const drop = document.getElementsByClassName('dropdown-toggle');

function dropUse() { // añadir función onclick="toggleMenu()" al botón del nav bar y al botón cerrar.
  if (drop.className.indexOf("menu_closed") >= 0) { // primero revisamos si la clase d-none esta
    openDrop();  // si esta la clase quiere decir que el menú esta cerrado, asi que llamamos la funcion para abrirlo
  } else {
    closeDrop(); //si no esta la clase, le indicamos que cierre el menu
  }
}

function openDrop() {
  menuDrop.classList.remove('d-none'); // quitando clase display-none
  menuDrop.classList.add('d-none');
}
function closeDrop() {
  menuDrop.classList.add('d-none'); // quitando clase display-none
  menuDrop.classList.remove('d-none');
}