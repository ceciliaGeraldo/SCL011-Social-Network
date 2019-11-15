
# Cultivate 
  

Te invitamos a ser parte de la comunidad de cultivo más grande en Chile.

En Cultiva-te encontrarás todo lo que necesitas para tus cultivos, desde información de plantas, métodos de cultivo, ranking mejores productos, calendarios de cultivos, eventos de intercambio de semillas y mucho más... ¡Todo esto compartido por mismos miembros de la comunidad!

Únete a Cultivapp y súmate a la conversación.

  

## Preámbulo

En la actualidad debido a los avances de la tecnología y la evolución de la sociedad, nos vemos inmersos en un mundo totalmente digital. Y con ello han llegado las redes sociales dominando el mercado de la comunicación a tal nivel, que muchos hemos hecho un hábito el interactuar con nuestro entorno a través de ellas, entre las más conocidas: Instagram, Facebook, Snapchat, Twiter, Pinterest.

Hay para todos los gustos e intereses, como también para todas las edades. Es por esto que hemos tomado como alternativa, crear nuestra comunidad a base de su propia red social.

  
## Nuestro Enfoque

Crear un espacio seguro y de confianza en donde los usuarios puedan interactuar y compartir entre sí, creando una comunidad de aprendizajes e información útil a la hora de los cultivos.



## Encuestas - Análisis

Hemos realizado esta encuesta a un segmento aleatorio de 64 personas, con el objetivo de conocer y poder crear el perfil de nuestro usuario, como también para saber sus necesidades y poder apuntar a complementarlas en nuestro desarrollo.

A continuación veremos las preguntas aplicadas y su posterior análisis.

**![Gráfico de respuestas de formularios. Título de la pregunta: ¿Cuál es tu edad?. Número de respuestas: 64 respuestas.](https://lh4.googleusercontent.com/tVJ4xq5Cx9MQxu-4KY4KdKIGi6mywJ0LHbEtOR4xve1YQORL-bD8A4ZEzVieAZgpzyMQ51J623RvJxD8k00LsVAG_PyxXawObMIXbvteE_O2sq0jq2QWk3zUzmJQddYb4TFUG7DQ)**
**![Gráfico de respuestas de formularios. Título de la pregunta: ¿Participas en comunidades en torno al cultivo?. Número de respuestas: 64 respuestas.](https://lh6.googleusercontent.com/nyZMK28NkW2V0KTmPGPGCPmdWa8JFZwxAYXRT7q8V_WYo2w6MNBDPoVK9xir4bpe7ZL2a_iHAlxCrbepzt9vLWcBNNZQYQXfgoysbdsgXsrh-h0JzNzQAqFxBySX_GsomoIBXLEQ)**
**![Gráfico de respuestas de formularios. Título de la pregunta: Si contestaste Sí a la pregunta anterior: ¿De qué forma participas en comunidades en torno al cultivo? (puedes marcar más de una opción). Número de respuestas: 13 respuestas.](https://lh5.googleusercontent.com/BkMIVQ1gP6y61D5DimOzLdRdrZPTmUfXdfwOclRLpFC6X1I-ZjMbdWqDeLNPzsIf2B3J845_qIAIDA68jfoymSbomSiXj6fdqCA7qZqdf4ztIXov0VN3Tw79PkoOJKRJRHmXW4Z1)**
**![Gráfico de respuestas de formularios. Título de la pregunta: Si contestaste No a la pregunta anterior: ¿Participarías de una comunidad online?. Número de respuestas: 57 respuestas.](https://lh6.googleusercontent.com/Sa-8QMj5RxIQuLgmg9g0ZaqNmQV-DOT1KhTgdfagdI2eiOWrOilr3XJqxwGXiU_D2ldTLGRIorEcdZSN-wzVhHAr5iD-sOSLv9UmJgE3PrKRjuKNPuspHQZOurKdhAdtwcARGFLi)**
**![Gráfico de respuestas de formularios. Título de la pregunta: ¿Te gustaría participar de eventos o talleres de cultivo?. Número de respuestas: 64 respuestas.](https://lh4.googleusercontent.com/bz0HDO1SmJNMA68JQ-HOWj1EizmOWNOwHlaXp4JE9I069_rKxLlTh8J_2ERPPLTRm0yw1XSbh19yQfeuBe2wSxY4QdgdNVTt1hA-9iquvNADrIV5KyQR8LWO8fttLThw0WHBFoeo)**

**![Gráfico de respuestas de formularios. Título de la pregunta: ¿Cuáles temas te gustaría aprender y/o compartir sobre cultivo? (puedes marcar más de una opción). Número de respuestas: 64 respuestas.](https://lh6.googleusercontent.com/3-xAle13Y-4yWq7IoO-usu8GlFwZ8hhk76wM4YRHyTMVANNuFE4fNWHq63LP1A3XFmrU4zutjlCLVSsRn79yqXjO2RMvgSvQOuo5gFQfCngWyIxsCetfsV0Id9vSgAprVCKA4vxt)**

A partir de los resultados podemos decir que nuestro usuario se encuentra en un rango de edad entre los 25 y 40 años. Le gustaría formar parte de una comunidad sobre cultivo (hay algunos que ya lo hacen, mayoritariamente de forma online) y también está interesado en eventos y/o talleres de forma presencial. 
Los temas de mayor interés son: 
- Plagas/Enfermedades
- Fertilizantes
- Hidrocultivos
- Compostaje
- Calendario Lunar
- Tipo de cultivo según estación climática


## Historias de Usuario

###  HU1: Crear cuenta a través de un formulario
"Yo como usuario quiero poder crear una cuenta con mi correo y contraseña para poder ingresar a la app. "
- [x] Se visualizan campos necesarios para ingresar información de registro.
- [x] El usuario **DEBE** validar su registro mediante un enlace enviado al correo electrónico ingresado antes de poder realizar cualquier acción dentro de la app
- [x] Al hacer click en registrar, el usuario queda posicionado en una pantalla que confirma el registro de su información (instrucción: activar cuenta mediante enlace enviado al mail registrado).
- [x] Los datos del usuario DEBEN quedar guardados en la base de datos (firebase).

### HU2:  Iniciar sesión con cuenta ya creada
"Yo como usuari@ quiero poder ingresar a mi cuenta con el correo y contraseña que he registrado en el formulario. Para poder acceder a las funcionalidades de la app"
- [x] Se visualizan los campos necesarios para ingresar información de inicio de sesión.
- [x] En caso de que el usuario ingrese un correo o contraseña no válidos, arroje un mensaje de error.
- [x] Una vez validada la cuenta se dirige al usuario directamente al feed.


### HU3: Crear cuenta con Google
"Yo como usuari@ quiero poder ingresar a la app a través del registro con mi cuenta de Google."
- [x] Se visualizan los campos necesarios para inicio de sesión con Google.
- [x] Se redirige al usuario mediante un pop-up al inicio de sesión con Google, le da opción al usuario de elegir con qué cuenta ingresar.
- [x] Una vez creada la cuenta con Google se dirige al usuario directamente al feed.

### HU4: Crear cuenta con Facebook
"Yo como usuari@ quiero poder ingresar a la app a través del registro con mi cuenta de Facebook."
- [x] Se visualizan los campos necesarios para inicio de sesión con Google.
- [x] Se redirige al usuario mediante un pop-up al inicio de sesión con Facebook, le da opción al usuario de elegir con qué cuenta ingresar.
- [x] Una vez creada la cuenta con Facebook se dirige al usuario directamente al feed.

### HU5: Crear vista de enviando mail para la confirmación de la cuenta
"Yo como usuario, al terminar de registrarme quiero ver una pantalla que me entregue las instrucciones para completar mi registro"

- [x] Se visualizan los campos necesarios con los textos apropiados entregando mensaje de validación
- [x] Existe la posibilidad de volver al inicio

### HU6: Recuperar contraseña
"Yo como usuario DEBO poder recuperar su contraseña olvidada a través de un link, donde entregando el correo asociado a la cuenta llegará un mail entregando un enlace de cambio de contraseña"




## Planificación
  ### [Trello](https://trello.com/b/D3LahHkl)


## Flujo y Prototipado
 

### Prototipo de Alta Fidelidad  - [Figma](https://www.figma.com/file/k8aztkaX4VTKcyCzNLAXOQ/SCL011-Social-Network-Cultivate-Design?node-id=0:1)
