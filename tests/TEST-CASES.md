# Casos de prueba

| ID | Objetivo | Precondición | Pasos y datos | Resultado esperado |
|---|---|---|---|---|
| TC-01 | Registro correcto | Usuario no registrado | Completar datos válidos y contraseña `Nexa2025!` | Cuenta creada y dashboard visible |
| TC-02 | Campos vacíos | Pantalla de registro | Enviar formulario vacío | Mensajes específicos por campo |
| TC-03 | Correo inválido | Registro abierto | Usar `correo-invalido` | Se marca el correo y no se envía |
| TC-04 | Contraseña débil | Registro abierto | Usar `abc123` | Reglas visibles y envío bloqueado |
| TC-05 | Confirmación diferente | Registro abierto | Password `Nexa2025!`, confirmación `Nexa2025?` | Se informa que no coinciden |
| TC-06 | Usuario duplicado | Existe `ana.torres` | Registrar ese usuario | Mensaje de usuario en uso |
| TC-07 | Correo duplicado | Existe `demo@nexa.app` | Registrar ese correo | Registro rechazado sin exponer detalles sensibles |
| TC-08 | Login por usuario | Cuenta demo creada | `ana.torres` + `Nexa2025!` | Acceso al dashboard |
| TC-09 | Login por correo | Cuenta demo creada | `demo@nexa.app` + `Nexa2025!` | Acceso al dashboard |
| TC-10 | Credenciales incorrectas | Login visible | Contraseña incorrecta | Mensaje seguro y sin acceso |
| TC-11 | Mostrar contraseña | Login visible | Pulsar Mostrar | Input cambia a texto |
| TC-12 | Ocultar contraseña | Contraseña visible | Pulsar Ocultar | Input vuelve a password |
| TC-13 | Recordar sesión | Login visible | Activar casilla, entrar y recargar | Sesión se conserva dentro de su expiración |
| TC-14 | Cierre de sesión | Usuario autenticado | Pulsar Cerrar sesión | Se limpia sesión y vuelve al login |
| TC-15 | Protección dashboard | Sin sesión | Recargar o abrir la app | No se muestra contenido privado |
| TC-16 | Recuperación | Login visible | Abrir enlace, enviar correo válido | Confirmación académica explícita |
| TC-17 | Cambio de perfil | Dashboard abierto | Editar nombre y guardar | Nuevo nombre aparece y persiste |
| TC-18 | Cambio de tema | App abierta | Pulsar tema en login o configuración | Cambia claro/oscuro y persiste |
| TC-19 | Historial | Login exitoso | Abrir Actividad | Aparece el acceso reciente |
| TC-20 | Bloqueo | Login visible | Fallar 5 veces con mismo identificador | Bloqueo temporal y contador visible |