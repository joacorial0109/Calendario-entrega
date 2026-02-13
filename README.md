Cómo ejecutar la aplicación:
1. Descargar el proyecto.
2. Pararse en la carpeta del proyecto desde la terminal.

3. Instalar las dependencias:
(npm install)

4. Ejecutar la aplicación:
(npm start)
La aplicación se abre en una ventana de escritorio.

Funcionalidades implementadas
- Registro de nuevos gastos.
- Almacenamiento en base de datos SQLite local.
- Listado de gastos registrados.
- Filtro por mes y año.
- Cálculo automático del total gastado en el mes seleccionado.
- Persistencia de datos entre ejecuciones.

Decisiones de diseño
- La interfaz se mantuvo simple para cumplir con el alcance solicitado.
- La base de datos se crea automáticamente si no existe.
- Se separó la lógica en distintos archivos (main, base de datos y renderizado) para mantener el código ordenado.

Fuera de alcance
- No se implementó edición ni eliminación de gastos.
- No se agregaron gráficos.
- No se implementó autenticación de usuarios.
- No se agregó sincronización en la nube.