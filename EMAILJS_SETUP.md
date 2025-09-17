# 📧 Configuración EmailJS - Media Kit Humberto Fuentes

## ✅ **Configuración Completada**

### **Credenciales Confirmadas:**
- **Service ID:** `service_li3iwwg` ✅
- **Template ID:** `template_mcw05gm` ✅
- **Public Key:** `17Cz9YT1BpsKndYRo` ✅

---

## 🔧 **Pasos para Completar la Configuración**

### **1. Obtener la Public Key**
1. Ve a [EmailJS Dashboard](https://dashboard.emailjs.com/admin/account)
2. En la sección **"API Keys"**, copia la **"Public Key"**
3. Reemplaza `your_public_key_here` en el archivo `.env`

### **2. Variables de Template Configuradas**
El formulario envía las siguientes variables que deben estar en tu template:

```javascript
{
  titulo: "Nueva consulta de [Empresa]",
  from_name: "Nombre del contacto",
  from_email: "email@contacto.com", 
  from_company: "Nombre de la empresa",
  budget: "Presupuesto del proyecto",
  objective: "Objetivo de la colaboración",
  deadline: "Plazo del proyecto",
  message: "Mensaje completo",
  nombre: "Nombre (variable adicional)",
  email: "Email (variable adicional)",
  to_email: "humberto@email.com"
}
```

### **3. Template HTML Recomendado**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>{{titulo}}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #D4AF37, #2F7BFF); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; padding: 10px; background: white; border-left: 4px solid #D4AF37; }
        .label { font-weight: bold; color: #2F7BFF; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Nueva Consulta Comercial</h1>
            <p>Media Kit - Humberto Fuentes</p>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">👤 Contacto:</div>
                <strong>{{from_name}}</strong><br>
                <a href="mailto:{{from_email}}">{{from_email}}</a><br>
                <strong>Empresa:</strong> {{from_company}}
            </div>
            <div class="field">
                <div class="label">💼 Proyecto:</div>
                <strong>Presupuesto:</strong> {{budget}}<br>
                <strong>Objetivo:</strong> {{objective}}<br>
                <strong>Plazo:</strong> {{deadline}}
            </div>
            <div class="field">
                <div class="label">💬 Mensaje:</div>
                <p>{{message}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## 🧪 **Prueba de Funcionamiento**

### **Ejemplo que Funcionó:**
```javascript
emailjs.send("service_li3iwwg", "template_mcw05gm", {
  titulo: "prueba",
  from_name: "prueba",
  from_email: "camidevai@gmail.com",
  from_company: "camideva",
  budget: 500000,
  objective: "prueba",
  deadline: "n",
  message: "s",
  nombre: "c",
  email: "camidevai@gmail.com"
});
```

### **Variables del Formulario Actual:**
✅ Todas las variables del ejemplo están implementadas en `Contact.tsx`  
✅ Template ID actualizado en variables de entorno  
✅ Service ID confirmado  

---

## 📁 **Archivos Modificados**

### **1. `.env.example`**
```env
VITE_EMAILJS_SERVICE_ID=service_li3iwwg
VITE_EMAILJS_TEMPLATE_ID=template_mcw05gm
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### **2. `.env`** (Archivo local - NO subir a Git)
```env
VITE_EMAILJS_SERVICE_ID=service_li3iwwg
VITE_EMAILJS_TEMPLATE_ID=template_mcw05gm
VITE_EMAILJS_PUBLIC_KEY=17Cz9YT1BpsKndYRo
```

### **3. `src/components/Contact.tsx`**
- ✅ Variables actualizadas para coincidir con el ejemplo
- ✅ Template ID configurado
- ✅ Service ID configurado

---

## 🚀 **Para Activar el Formulario**

1. **Completa el archivo `.env`** con tu Public Key real
2. **Reinicia el servidor** de desarrollo
3. **Prueba el formulario** desde el Media Kit
4. **Verifica** que lleguen los emails correctamente

---

## 🔍 **Troubleshooting**

### **Si no llegan los emails:**
- Verifica que la Public Key sea correcta
- Revisa la consola del navegador para errores
- Confirma que el template tenga todas las variables
- Verifica que el servicio esté activo en EmailJS

### **Si hay errores de CORS:**
- Agrega el dominio a la lista blanca en EmailJS
- Para desarrollo local: `http://localhost:3000`
- Para producción: tu dominio real

---

## ✅ **Estado Actual**
- [x] Service ID configurado
- [x] Template ID configurado
- [x] Variables de template actualizadas
- [x] Formulario React actualizado
- [x] Public Key configurada ✅
- [x] Configuración completa ✅

**✅ CONFIGURACIÓN COMPLETADA:** El formulario de contacto está listo para usar. Reinicia el servidor de desarrollo y prueba el formulario desde http://localhost:3000
