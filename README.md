# TaskFlow Pro

Sistema de gestión de tareas y proyectos con colaboración en equipo.

## Descripción

TaskFlow Pro es una aplicación para gestionar proyectos y tareas en equipos de desarrollo. Permite crear proyectos, asignar tareas, hacer seguimiento del progreso y colaborar en tiempo real.

## Características

- Gestión de proyectos y tareas
- Asignación de tareas a miembros del equipo
- Tableros Kanban (TODO, En Progreso, Completado)
- Comentarios en tareas
- Notificaciones en tiempo real
- Reportes de progreso
- API RESTful

## Requisitos

- Node.js >= 14.0.0
- npm >= 6.0.0
- PostgreSQL >= 12.0

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/DevKevs/TaskFlowPro.git
cd TaskFlowPro

# Instalar dependencias
npm install

# Crear archivo de configuración
cp .env.example .env

# Ejecutar migraciones
npm run db:migrate

# Iniciar el servidor
npm start
```

## Configuración

Edita el archivo `.env` con tus configuraciones:

```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=taskflow_user
DB_PASSWORD=tu_contraseña
DB_NAME=taskflow_db
JWT_SECRET=tu_clave_secreta
```

## Uso

```bash
# Modo desarrollo con hot-reload
npm run dev

# Modo producción
npm run build
npm start

# Ejecutar tests
npm test
```

## Estructura del Proyecto

```
TaskFlowPro/
├── src/
│   ├── controllers/    # Controladores
│   ├── models/         # Modelos de datos
│   ├── routes/         # Rutas de la API
│   ├── services/       # Lógica de negocio
│   └── app.js          # Aplicación principal
├── tests/              # Pruebas
├── config/             # Configuraciones
├── package.json        # Dependencias
└── README.md           # Este archivo
```

## API Endpoints

- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `POST /api/tasks` - Crear tarea
- `GET /api/tasks` - Obtener tareas
- `PUT /api/tasks/:id` - Actualizar tarea
- `DELETE /api/tasks/:id` - Eliminar tarea

## Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/MiCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar MiCaracteristica'`)
4. Push a la rama (`git push origin feature/MiCaracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo licencia MIT. Ver archivo [LICENSE](./LICENSE).

## Soporte

Para reportar bugs o sugerencias, abre un issue en GitHub.
