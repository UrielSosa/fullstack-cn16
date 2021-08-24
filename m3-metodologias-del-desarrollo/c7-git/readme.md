# GIT Y GITHUB

- Git es la herramienta que utilizamos localmente en nuestra maquina para manejar el versionado de nuestro repo, siempre pensando en **local**. (_Hasta que se hace un push_)
- Github es el sitio web que aloja todos los repositorios, tanto nuestros como de otros usuarios.

## Algunos comandos a tener en cuenta

¿Como saber si tenemos git?
```
git --version
```
¿Como iniciamos un repo local con git?
```
git init
```
¿Como chequear el estado del repositorio?
```
git status
```
¿Como agregar cambios? 
```
git add . 
(agrega TODOS los cambios)
```
Para preparar esos cambios y agregarles un mensaje
```
git commit -m 'Mensaje a eleccion'
```
Para poder vincular un repo local a nuestro usuario de github usamos
```
git config --global user.name "nombreusuario"
git config --global user.email "tuemail"
```
Para subir los cambios al repositorio remoto
```
git push origin master
o 
git push origin main
```
¿Como vincular el repo remoto al local?
```
git add origin URldelRepositorio
```
Si hay cambios en el repositorio remoto los traigo con
```
git pull origin nombreRama (master o main)
```