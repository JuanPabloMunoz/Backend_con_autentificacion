# Api con Autentificación.

Este proyecro genera una Api la cual pose dos colecciones, una de "usuarios", a la cual se le implementa proceso de Autentificación.
y otra colección de "servicios", en este proyecto se implementan los metodos "CRUD", se crea base de datos en MongoDB Atlas de forma local,
se crea un cluster en MongoDB Compass, para tener acceso a la base desde internet, a su vez se implementa "CORS" para añadir lista blanca
de sitios que pueden acceder a nuestra Api. Para finalizar se crea documentación de la Api con Postman y se sube elproyecto a "Render",
de Forma adicional se intenta incorporar swagger Autogen (genera archivo "json" de forma automatica)  y swagger UI 
(para desplegar documentación grafica) todo lo correpondiente a swagger se terminara en un futuro cercano.

- Para visualizar la documentacioó de la colección Services, ir a  https://documenter.getpostman.com/view/41936642/2sB3QGtrVq
 ![Image](https://github.com/user-attachments/assets/f4c8a3d2-cea9-464a-ad67-6944531088e9)
- Para visualizar la documentación de la colección Users, ir a https://documenter.getpostman.com/view/41936642/2sB3QGtrVu
 ![Image](https://github.com/user-attachments/assets/6e08c360-3d48-452c-8bf7-10cbb7f7426d)

- Antes de hacer pruebas en Postamn etc. debe desplegar el proyecto desde Render, para ello ir a https://backend-autentificacion.onrender.com
![Image](https://github.com/user-attachments/assets/dfa112ff-c25c-4cb0-be3b-564f1f390856) 
- Para ver la documentación Swagger UI y ejecutar los metodos get que son los unicos implementados, debe agregar al link de Render el siguente endpoint /api-docs
![Image](https://github.com/user-attachments/assets/b776fbea-5da2-4a04-9a8b-e87ce93a48d8)
  
  
