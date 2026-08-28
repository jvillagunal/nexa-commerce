# Informe académico: Nexa

## Introducción

Nexa transforma un ejercicio de autenticación en un pequeño producto digital orientado a la claridad y la productividad. El sistema permite crear una cuenta, iniciar sesión y acceder a un espacio privado con información útil del usuario.

## Objetivos

**General:** construir una experiencia de autenticación moderna, accesible, responsive y defendible técnicamente.

**Específicos:** validar datos, controlar credenciales e intentos, proteger la zona privada, gestionar preferencias, registrar actividad y documentar límites de seguridad.

## Tecnologías

React organiza la interfaz en componentes y estados. Vite ofrece desarrollo y compilación rápidos. JavaScript permite una solución fácil de explicar. Web Crypto calcula el digest de contraseñas. CSS nativo construye el sistema visual sin dependencia de UI innecesaria.

## Arquitectura

La presentación vive en `App.jsx` y sus componentes. `services/auth.js` concentra usuarios, registro, login, sesiones, actividad y actualización de perfil. `utils/validation.js` mantiene reglas puras reutilizables. Los estilos se separan entre reglas globales y la identidad completa de la aplicación. Esta separación reduce el acoplamiento y facilita migrar el servicio a una API futura.

## Funcionalidades

Registro avanzado, login por usuario/correo, mostrar contraseña, recordar sesión, bloqueo temporal, recuperación simulada, dashboard, perfil editable, historial, tema claro/oscuro, toasts, estados de carga y diseño responsive.

## Seguridad

No se almacenan contraseñas en texto plano: se guarda un digest SHA-256 local. Se normaliza el correo, se validan entradas, se evitan mensajes que confirmen si un usuario existe durante login, se limitan intentos y se expira la sesión. La protección es demostrativa porque todo corre en el cliente. Para producción son obligatorios backend, hashing lento con salt, cookies seguras, rate limiting del servidor y recuperación por token de un solo uso.

## UX/UI y accesibilidad

Nexa utiliza una paleta carbón, lima, coral, menta y lavanda para crear contraste y una identidad propia. La tipografía Manrope se combina con DM Mono para metadatos. Hay focus visible, labels asociados, `aria-invalid`, `role=status`, botones con texto y responsive real. El dashboard prioriza escaneo: navegación lateral, tarjetas de métricas, actividad y perfil.

## Pruebas

La matriz completa se encuentra en `tests/TEST-CASES.md`. La compilación de producción (`npm run build`) fue validada y el lint (`npm run lint`) queda sin errores ni advertencias. La revisión funcional debe ejecutarse manualmente en navegador para comprobar los veinte flujos listados.

## Uso de Inteligencia Artificial

La IA apoyó la selección tecnológica, la generación de componentes, las validaciones, la documentación y la revisión inicial. El desarrollador tomó las decisiones de alcance, verificó la compilación, corrigió errores de integración y documentó honestamente que la recuperación y la persistencia son académicas.

## Conclusiones

Se obtuvo una experiencia completa y visualmente diferenciada, con arquitectura clara y una base preparada para sustituir el almacenamiento local por una API. El aprendizaje principal es distinguir una demo segura para explicar conceptos de una autenticación de producción, donde la frontera de confianza debe estar en el servidor.