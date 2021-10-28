## Ayuditas

1. Rutear las vistas primero para después poder usarlas y hacer la logica
2. Probar siempre las rutas que lleguen al controller con un res.send o un console.log
3. Siempre revisar que datos tenemos en una variable antes de cargarla al json. Usemos console.log

### Flujo de la app
- app.js-> routes -> controllers -> views // Solo enviar vistas
- app.js-> routes -> controllers -> app.js -> routes -> controller -> views // Procesar datos
