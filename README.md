//Inglés or English but in translate for lazy purposes
# Notes:
This is my first program in Node
1) To use it or you can download the repo where it says code there in http copies the link
2) From there go to your terminal or your windows powershell
3) Go to a folder where you want the program and write
-git clone *here the link*, without asterisks, that is, it would be:
       git clone https://github.com/nerexrs/GOD_FIRST-NodeJs-MultiplyTable.git
3) to install the necessary packages which are yargs and colors just type npm install

4) to run the program type node app -h or node app --help to see all the commands

An example of the table of 5 that goes to 10 for example would be

node app -b 5 -h 10 -l or node app --base 5 --up to 10 --list

--base or -b is the base number, --up to or -h is the limit and --list or -l is to show you the table in the console

If you do not want your table to be displayed in the console, your table will still be saved in a folder called output

```
Options:
       --help Show help [boolean]
       --version Show version number [boolean]
   -b, --base Is the base of the multiplication table [number] [required]
   -h, --to This is the number to which you want the table
                                                           [number] [default: 10]
   -l, --listar Display table in console [boolean] [default: false]
```
//Español o Spanish, esto sí lo escribí yo xd
# Notas:
Este es mi primer programa en Node
1)Para usarlo o puedes descargar el repo donde dice code ahí en http copias el link

2)De ahí ve a tu terminal o tu windows powershell 

3)Ve a una carpeta donde quieres el programa y escribe

-git clone *aquí el link*, sin asteriscos es decir sería:

      git clone https://github.com/nerexrs/GOD_FIRST-NodeJs-MultiplyTable.git
      
3) para instalar los paquetes necesarios que son yargs y colors solo escribe npm install

4) para correr el programa escribe node app -h o node app --help para ver todos los comandos

Un ejemplo de la tabla del 5 que vaya hasta el 10 por ejemplo sería

node app -b 5 -h 10 -l o node app --base 5 --hasta 10 --listar

--base o -b es el número base, --hasta o -h es el limite y --listar o -l es que te muestre en la consola la tabla

Si no quieres que se muestre en consola tu tabla de igual forma se va a guardar tu tabla en una carpeta llamada salida

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Es la base de la tabla de multiplicar       [number] [required]
  -h, --hasta    Este es el número hasta donde quieres la tabla
                                                          [number] [default: 10]
  -l, --listar   Muestra la tabla en consola          [boolean] [default: false]
```
