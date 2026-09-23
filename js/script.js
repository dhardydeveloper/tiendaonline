// =========================
// LOGIN CON ROLES
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const formLogin = document.getElementById("formLogin");
  if(formLogin){
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const correo = document.getElementById("correo").value;
      const password = document.getElementById("password").value;

      // Simulación de roles
      if(correo === "admin@tienda.com" && password === "1234"){
        window.location.href = "admin.html";
      } else if(correo === "vendedor@tienda.com" && password === "1234"){
        window.location.href = "admin_productos.html";
      } else {
        window.location.href = "index.html"; // cliente
      }
    });
  }

  // Al cargar la página, recuperar carrito guardado
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
    calcularTotal();
    mostrarCarrito();
  }
});


// =========================
// VALIDACIONES FORMULARIOS
// =========================
const formRegistro = document.getElementById("formRegistro");
if(formRegistro){
  formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    if(password.length < 4 || password.length > 10){
      alert("La contraseña debe tener entre 4 y 10 caracteres");
      return;
    }

    alert(`Usuario ${nombre} registrado con éxito`);
    window.location.href = "login.html";
  });
}

const formContacto = document.getElementById("formContacto");
if(formContacto){
  formContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
    formContacto.reset();
  });
}

// =========================
// movimiento banner
// =========================
const banners = document.querySelectorAll(".banner");

let indice = 0;

setInterval(function() {

    // Ocultar banner actual
    banners[indice].classList.remove("activo");

    // Pasar al siguiente
    indice++;

    // Si llega al último, volver al primero
    if (indice >= banners.length) {
        indice = 0;
    }

    // Mostrar siguiente banner
    banners[indice].classList.add("activo");

}, 4000);


// =========================
// CARRITO
// =========================

// Arreglo donde se guardarán los productos
let carrito = [];


// Agregar producto al carrito
function agregarAlCarrito(nombre, precio) {

    // Crear objeto del producto
    const producto = {
        nombre: nombre,
        precio: precio
    };

    // Agregar producto al arreglo
    carrito.push(producto);

    // Guardar carrito en el navegador
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Mostrar mensaje
    alert("Producto agregado al carrito");
}


