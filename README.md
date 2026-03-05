# Product Manager (CRUD) - React & Firebase

Aplicación web para la gestión de productos e inventario. Este proyecto es un CRUD (Create, Read, Update, Delete) completo que demuestra la integración de un frontend en React con una base de datos NoSQL en la nube.

🚀 **Live Demo:** [Ver proyecto funcionando en Vercel](https://crud-firebase-react-five.vercel.app/)

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React.js
* **Enrutamiento:** React Router DOM (Navegación SPA)
* **Base de Datos:** Firebase Cloud Firestore
* **Estilos & UI:** Bootstrap, FontAwesome
* **Feedback/Alertas:** SweetAlert2

## ✨ Funcionalidades Principales

* **Gestión de Inventario:** Listado en tiempo real de productos y su stock disponible.
* **Validaciones de Frontend:** Prevención de envíos de formularios con campos vacíos o valores de stock negativos.
* **Experiencia de Usuario (UX):** Alertas asíncronas para confirmar la creación, edición o eliminación de documentos. Navegación fluida y botones de retroceso entre las distintas vistas.
* **Manejo de Estados:** Uso intensivo de Hooks (`useState`, `useEffect`) para controlar el renderizado y las peticiones a la base de datos.

## 💻 Instalación y Uso Local

Si querés clonar el repositorio y correrlo en tu entorno local, seguí estos pasos:

1. Cloná el proyecto:
```bash
git clone [https://github.com/Lautcosta/crud-firebase-react.git](https://github.com/Lautcosta/crud-firebase-react.git)
```

2. Instalá las dependencias:
```bash
npm install
```

3. Creá un archivo de configuración para Firebase (vas a necesitar tus propias credenciales en `src/firebaseconfig/firebase.js`).

4. Levantá el servidor de desarrollo:
```bash
npm start
```