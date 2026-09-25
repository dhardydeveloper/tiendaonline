// =========================
// MENÚ SEGÚN ROL DE USUARIO
// Muestra el carrito de compras (y el acceso a Admin) según el rol
// guardado en localStorage al iniciar sesión. Se usa en todas las
// páginas para que el carrito no aparezca solo en productos.html.
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const userRole = localStorage.getItem('userRole'); // 'cliente', 'admin' o null

  // Busca el <span id="menu-usuario"> dentro del <nav> de cada página
  const contenedorUsuario = document.getElementById('menu-usuario');

  if (!contenedorUsuario) return;

  if (userRole === 'cliente') {
    // Muestra el Carrito + opción Cerrar Sesión para Comprador
    contenedorUsuario.innerHTML = `
      <a href="carrito.html" style="color: #c5a059; font-size: 1.2rem; margin-left: 10px;" title="Mi Carrito de Compras">
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
      <a href="#" id="btn-logout" style="color: #ff4d4d; font-weight: bold; margin-left: 10px;">Cerrar Sesión</a>
    `;
  } else if (userRole === 'admin') {
    // Muestra Admin + Carrito + Cerrar Sesión para Administrador
    contenedorUsuario.innerHTML = `
      <a href="admin.html" style="color: #c5a059; font-weight: bold;">Admin</a>
      <a href="carrito.html" style="color: #c5a059; font-size: 1.2rem; margin-left: 10px;" title="Ver Carrito">
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
      <a href="#" id="btn-logout" style="color: #ff4d4d; font-weight: bold; margin-left: 10px;">Cerrar Sesión</a>
    `;
  } else {
    // Visitante no registrado (Muestra Registro, Login y Carrito por defecto)
    contenedorUsuario.innerHTML = `
      <a href="registro.html">Registro</a>
      <a href="login.html">Login</a>
      <a href="carrito.html" style="color: #c5a059; font-size: 1.2rem; margin-left: 10px;" title="Mi Carrito de Compras">
        <i class="fa-solid fa-cart-shopping"></i>
      </a>
    `;
  }

  // Lógica de Cierre de Sesión
  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btn-logout') {
      e.preventDefault();
      localStorage.removeItem('userRole');
      alert('Has cerrado sesión correctamente.');
      window.location.href = 'login.html';
    }
  });
});
