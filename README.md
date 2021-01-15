# Redux

Redux es una herramienta muy util, para tener una arquitectura de datos homogenea, ya que sobre todo en las aplicaciones grandes se manejan muchos componentes los cuales deben recibir y enviar informacion para mostrar ya sea cargada por el usuario o que venga desde el Back-End, y cuando las aplicaciones son muy grandes éste envio de la informacion se vuelve un "pasamanos" donde la informacion va de un componente a otro y a otro y a otro.

Lo que nos permite Redux es que toda la informacion se guarde en un solo lugar, el STORE y desde aqui todos los componentes reciben la informacion directamente y asi mismo todos envian informacion directo al STORE, sin pasarla de un componente a otro.
En redux tenemos los Actions, los Reducers y el STORE.

## Actions

Los actions son las funciones que se realizan con la informacion en los action puedes hacer un GET al Back-End, para solicitar informacion, puedes hacer un POST o un PUT al Back-End con la informacion que envia el usuario, puedes recibir informacion de un estado para guardarlo en el STORE, etc. 

## Reducers

En los reducers se crean los estados iniciales y se organiza la informacion que llega desde las Actions para guardar en los estados lo que sea necesario.

## Store

El store se encarga de guardar toda la informacion para que cualquier componente que la solicite.

En el caso del el Ejercicio que desarrollé para ustedes, tal vez no era necesario usar Redux sin embargo me animé a utilizarlo ya que es importante para ésta vacante, utilicé solo 2 actions (Crear y eliminar usuarios), 2 reducers y 1 solo initialState para la lista de usuarios.

en cuanto a los comandos para iniciar el proyecto solo son:
### `npm install`
para instalar las dependencias
### `npm start`
para iniciar el proyecto

