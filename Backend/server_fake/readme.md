1.¿Que significa status 201 created? En donde aparece
2.¿como verifica la actualizacion de los datos por medio de la terminal?
3.¿cuales son los status existentes y comunes?
4.¿cuando hacer una peticion de tipo patch?
5.¿que es SOAP, cuales son las diferencias de REST?
6.¿que es GraphQL, cuales son las diferencias con REST?

respuestas
1.Es un codigo HTTP que indica que la peticion fue creada correctamente en el servidor. Aparece como respuesta a una peticion
2.la verificacion aparece en la terminal como la respuesta del estado(ej. 200,201) y los datos actualizados en formato JSON. Ademas, se puede confirmar haciendo una peticion get despues de modificar los datos
3.200 OK(todo salio bien), 201 CREATED (recurso creado), 500 INTERNAL SERVER ERROR (error del servidor)
4.se usa PATCH cuando quieres actualizar solo una parte de un recurso, no todo.
A diferencia de PUT que remplaza todo, PATCH modifica solo una parte
5.SOAP (Simple Object Access Protocol) es un protocolo que usa XML y es mas seguro pero complejo. Rest es un estilo mas simple, rapido y usa JSON. La diferencia principal es que SOAP es mas pesado y estructurado, mientras REST es mas felixible y facil de usar
6.GraphQL es un lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan, evitando recibir informacion innecesaria.Funciona a traves de una sola URL y ofrece mayor eficiencia  en el manejo de los datos.
Por otro lado, REST es n estilo de arquitectura que utiliza multiples rutas para acceder a diferentes recursos y generalmente devuelve datos predefinidos, lo que puede incluir informacion que no siempre se necesita.
La principal diferencia es que GraphQL es mas flexible y eficiente al permitir consultas especificas, mientras que REST es mas simole y tradicional, pero menos adaptable a las necesidades exactas del cliente