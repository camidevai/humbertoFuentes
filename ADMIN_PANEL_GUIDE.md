# 🔐 Panel de Administración - Guía de Uso

## Acceso al Panel

Para acceder al panel de administración, visita:
```
http://localhost:5173/admin
```

O en producción:
```
https://tu-dominio.com/admin
```

## Credenciales por Defecto

- **Usuario:** `humbertoFuentes`
- **Contraseña:** `123456`

⚠️ **IMPORTANTE:** Cambia la contraseña inmediatamente después del primer inicio de sesión.

## Características del Panel

### 1. Información Básica
Actualiza tu información personal:
- Nombre completo
- Handle de redes sociales (@usuario)
- Ubicación

### 2. Métricas de Redes Sociales
Gestiona las estadísticas de tus plataformas:

**Instagram:**
- Seguidores (actualmente: 165,000)
- Crecimiento en 30 días (%)
- Vistas en 30 días
- Alcance en 30 días
- Interacciones en 30 días

**TikTok:**
- Seguidores (actualmente: 172,000)
- Métricas adicionales disponibles en el editor

### 3. Información de Contacto
Actualiza tus datos de contacto:
- Email
- WhatsApp (URL completa: https://wa.me/56XXXXXXXXX)
- Tiempo de respuesta (horas)

### 4. Paquetes y Add-ons
Gestiona tus servicios:
- Paquete Starter
- Paquete Performance
- Paquete Full
- Add-ons (servicios adicionales)

### 5. Casos de Éxito
Administra tu portafolio:
- Título del caso
- Número de vistas
- Plataforma (Instagram, TikTok, YouTube, Otro)
- Enlace al contenido

### 6. Testimonios
Gestiona las reseñas de clientes:
- Nombre del cliente
- Empresa
- Calificación (1-5 estrellas)
- Testimonio

### 7. Cambiar Contraseña
Actualiza tu contraseña de acceso:
- Contraseña actual
- Nueva contraseña (mínimo 6 caracteres)
- Confirmar nueva contraseña

## Funcionalidades Adicionales

### Vista Previa
- Haz clic en "Vista Previa" para ver un resumen de tus datos actuales
- La vista previa se actualiza en tiempo real

### Restaurar Valores
- El botón "Restaurar" restablece todos los datos a los valores por defecto
- ⚠️ Esta acción no se puede deshacer

### Guardar Cambios
- Cada sección tiene su propio botón "Guardar Cambios"
- Los cambios se guardan en localStorage del navegador
- Verás una confirmación cuando los cambios se guarden exitosamente

## Almacenamiento de Datos

### LocalStorage
Todos los datos se almacenan localmente en tu navegador:
- **Credenciales:** `admin_credentials`
- **Contenido:** `media_kit_content`
- **Sesión:** `isAuthenticated`

### Persistencia
- Los datos persisten entre sesiones del navegador
- Los cambios son inmediatos y no requieren recarga de página
- El sitio principal muestra automáticamente los datos actualizados

## Seguridad

### Recomendaciones
1. **Cambia la contraseña por defecto** inmediatamente
2. **No compartas tus credenciales** con nadie
3. **Cierra sesión** cuando termines de editar
4. **Usa contraseñas seguras** (mínimo 6 caracteres, combina letras, números y símbolos)

### Limitaciones
- Las credenciales se almacenan en localStorage (solo accesible desde tu navegador)
- No hay recuperación de contraseña automática
- Si olvidas tu contraseña, necesitarás limpiar localStorage manualmente

## Solución de Problemas

### No puedo iniciar sesión
1. Verifica que estés usando las credenciales correctas
2. Si olvidaste la contraseña, abre la consola del navegador (F12) y ejecuta:
   ```javascript
   localStorage.removeItem('admin_credentials');
   ```
3. Recarga la página - se restaurarán las credenciales por defecto

### Los cambios no se guardan
1. Asegúrate de hacer clic en "Guardar Cambios" en cada sección
2. Verifica que no haya errores en la consola del navegador
3. Intenta limpiar la caché del navegador

### La vista previa no se actualiza
1. Haz clic en "Guardar Cambios" primero
2. La vista previa se actualiza automáticamente después de guardar

## Flujo de Trabajo Recomendado

1. **Accede al panel** en `/admin`
2. **Inicia sesión** con tus credenciales
3. **Cambia la contraseña** (primera vez)
4. **Actualiza las métricas** de redes sociales regularmente
5. **Agrega nuevos casos de éxito** cuando completes proyectos
6. **Actualiza testimonios** cuando recibas feedback de clientes
7. **Guarda los cambios** en cada sección
8. **Cierra sesión** cuando termines

## Soporte

Para problemas técnicos o preguntas:
- Revisa esta guía primero
- Verifica la consola del navegador para errores
- Contacta al desarrollador si el problema persiste

---

**Desarrollado con ❤️ para mantener tu Media Kit siempre actualizado**

