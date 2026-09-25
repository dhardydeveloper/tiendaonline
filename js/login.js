document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const rolSeleccionado = document.getElementById('tipoUsuario').value;
            const usuarioInput = document.getElementById('correo').value.trim().toLowerCase();
            const passwordInput = document.getElementById('password').value.trim();

            if (rolSeleccionado === 'admin') {
                // Validación para Administrador
                if ((usuarioInput === 'admin' || usuarioInput === 'admin@aura.com') && passwordInput === 'admin123') {
                    localStorage.setItem('isAdmin', 'true');
                    localStorage.setItem('userRole', 'admin');
                    localStorage.setItem('isLoggedIn', 'true');
                    
                    alert('¡Bienvenido Administrador!');
                    window.location.href = 'admin.html';
                } else {
                    alert('Credenciales de Administrador incorrectas.\nUsuario: admin | Clave: admin123');
                }
            } else {
                // Lista de dominios permitidos para el Cliente
                const dominiosValidos = ['@hotmail.com', '@duocuc.cl', '@gmail.com'];
                const esCorreoValido = dominiosValidos.some(dominio => usuarioInput.endsWith(dominio));

                // Validación para Cliente / Comprador
                if (!esCorreoValido) {
                    alert('Por favor ingresa un correo válido finalizado en:\n- @hotmail.com\n- @duocuc.cl\n- @gmail.com');
                    return;
                }

                if (passwordInput === '') {
                    alert('Por favor ingresa tu contraseña.');
                    return;
                }

                // Guardar sesión de cliente
                localStorage.setItem('isAdmin', 'false');
                localStorage.setItem('userRole', 'cliente');
                localStorage.setItem('userEmail', usuarioInput);
                localStorage.setItem('isLoggedIn', 'true');
                
                alert('¡Bienvenido a AURA Perfumes!');
                window.location.href = 'productos.html';
            }
        });
    }
});