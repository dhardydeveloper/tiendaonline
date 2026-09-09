// Verificar si el usuario ha iniciado sesión como admin
if (localStorage.getItem('isAdmin') !== 'true') {
    alert('Acceso denegado. Debes iniciar sesión como Administrador.');
    window.location.href = 'login.html';
}