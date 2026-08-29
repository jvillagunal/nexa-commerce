# Nexa Commerce

Sistema web de gestión de ventas e inventarios para tiendas, droguerías, panaderías, ferreterías y otros pequeños negocios. Centraliza productos, existencias, ventas y datos básicos del negocio en una interfaz sencilla.

## Funcionalidades implementadas

- Registro de negocio con tipo configurable.
- Login real contra API con bcrypt y JWT.
- Dashboard con ventas, productos, stock bajo, agotados y valor de inventario desde MySQL.
- CRUD de productos: alta, consulta, búsqueda por nombre/SKU, edición y eliminación con confirmación.
- CRUD de categorías, clientes y proveedores relacionados al negocio.
- Entradas y salidas de inventario con historial persistente.
- Carrito de venta y registro transaccional: detalle, descuento de stock y movimiento tipo VENTA.
- Historial de las últimas ventas.
- Reportes de ventas, stock y productos más vendidos.
- Respuestas JSON consistentes, CORS, variables de entorno y aislamiento por `business_id`.
- Interfaz responsive para escritorio, tablet y móvil.

## Tecnologías

- React 19, Vite y JavaScript/JSX.
- Node.js, Express, MySQL2.
- MySQL 8+, bcryptjs, jsonwebtoken, cors y dotenv.

## Arquitectura

```text
React + Vite -> API REST Express -> MySQL
```

## Instalación

Requiere Node.js 20+, MySQL 8+ y un servidor MySQL local o remoto.

```bash
npm install
copy .env.example .env
```

Edita `.env` con las credenciales de tu base de datos. Después ejecuta `database/schema.sql` desde MySQL Workbench o el cliente de MySQL; el script crea las tablas en la base seleccionada por la conexión.

## Ejecución

En una terminal:

```bash
npm run server
```

En otra:

```bash
npm run dev
```

Frontend: `http://localhost:5173`  
API: `http://localhost:4000`

## Entorno completo con Docker

Con Docker Desktop iniciado, puedes levantar MySQL y la API con:

```bash
docker compose up --build
```

La API quedará en `http://localhost:4000`. Para que GitHub Pages use una API pública, configura el secreto `VITE_API_URL` en `Settings > Secrets and variables > Actions` con una URL que termine en `/api`, por ejemplo `https://api.tudominio.com/api`, y vuelve a ejecutar el workflow.

## Publicación gratuita de la API

El archivo `render.yaml` deja preparada la API para Render Free. Para una prueba pública completa:

1. Crea una cuenta gratuita en Aiven usando GitHub o Google y crea un servicio **MySQL**, base `nexa_commerce`.
2. Ejecuta `database/schema.sql` en la consola SQL de Aiven y copia sus datos de conexión.
3. En Render selecciona **New > Blueprint**, conecta `jvillagunal/nexa-commerce` y acepta `render.yaml`.
4. Completa en Render `DB_HOST`, `DB_USER` y `DB_PASSWORD` con los datos de Aiven.
5. Copia la URL de Render, termina en `/api` y créala como secreto `VITE_API_URL` en GitHub.
6. Ejecuta de nuevo el workflow `Deploy Nexa to GitHub Pages`.

La instancia gratuita de Render puede tardar alrededor de un minuto en despertar después de estar inactiva. La base gratuita de Aiven es adecuada para pruebas y pequeños prototipos, no para producción de alto tráfico.

También están disponibles `npm run build` y `npm run lint`.

## API principal

- `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`
- `GET/POST/PUT/DELETE /api/products`
- `GET/POST/PUT/DELETE /api/categories`
- `GET/POST/PUT/DELETE /api/customers`
- `GET/POST/PUT/DELETE /api/suppliers`
- `GET /api/inventory`, `POST /api/inventory/movement`
- `GET /api/sales`, `POST /api/sales`
- `GET /api/dashboard/stats`, `GET /api/dashboard/top-products`, `GET /api/reports/summary`

Las rutas privadas requieren `Authorization: Bearer <token>`.

## Prueba manual rápida

1. Ejecuta `schema.sql` y levanta API/frontend.
2. Registra una cuenta y un negocio.
3. Crea un producto desde Productos.
4. Agrega stock desde Inventario.
5. Registra una venta desde Ventas.
6. Comprueba el descuento de stock y las estadísticas del Resumen.

