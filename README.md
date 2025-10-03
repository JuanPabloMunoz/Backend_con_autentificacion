# Api con Autentificación.

Este proyecro genera una Api la cual pose dos colecciones, una de "usuarios", a la cual se le implementa proceso de Autentificación.
y otra colección de "servicios", en este proyecto se implementan los metodos "CRUD", se crea base de datos en MongoDB Atlas de forma local,
se crea un cluster en MongoDB Compass, para tener acceso a la base desde internet, a su vez se implementa "CORS" para añadir lista blanca
de sitios que pueden acceder a nuestra Api. Para finalizar se crea documentación de la Api con Postman y se sube elproyecto a "Render",
de Forma adicional se intenta incorporar swagger Autogen (genera archivo "json" de forma automatica)  y swagger UI 
(para desplegar documentación grafica) todo lo correpondiente a swagger se terminara en un futuro cercano.

- Para visualizar la documentacioó de la colección Services, ir a  https://documenter.getpostman.com/view/41936642/2sB3QGtrVq
- Para visualizar la documentación de la colección Users, ir a https://documenter.getpostman.com/view/41936642/2sB3QGtrVu

- Antes de hacer pruebas en Postamn etc. debe desplegar el proyecto desde Render, para ello ir a https://backend-autentificacion.onrender.com
- 
- Para ver la documentación Swagger UI y ejecutar los metodos get que son los unicos implementados, debe agregar al link de Render el siguente endpoint /api-docs
  
  
