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
});

// =========================
// CARRITO DE COMPRAS
// =========================
let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio){
  carrito.push({ nombre, precio });
  total += precio;
  mostrarCarrito();
}

function mostrarCarrito(){
  const lista = document.getElementById("carrito");
  const totalSpan = document.getElementById("total");

  if(!lista || !totalSpan) return; // si no existe el carrito en la página

  lista.innerHTML = "";

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.nombre}</span>
      <span>$${item.precio}</span>
      <button onclick="eliminarDelCarrito(${index})">❌</button>
    `;
    lista.appendChild(li);
  });

  totalSpan.textContent = total;
}

function eliminarDelCarrito(indice){
  total -= carrito[indice].precio;
  carrito.splice(indice, 1);
  mostrarCarrito();
}

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
