[logo]: https://raw.githubusercontent.com/vifergonza/vfg-angular/master/src/assets/angular-vfg.png
 ![alt text][logo]

# VfgAngular

Esta es un simple aplicación para desarrollar probar y experimentar con Angular, Bootstrap y todas las técnologias web con las que voy practicando.
[Aqui se encuentra el proyecto desplegado](https://vifergonza.github.io/vfg-angular/home "vfg-angular").

## vfg-common module.

Módulo con componentes de uso genérico.

### Componentes.

#### vfg-check-list

A partir de una lista de elementos de cualquier tipo se crea un formulario reactivo con tantos *checks* como elementos tenga dicha lista. Cada *check* esta acompañado de una etiqueta que se informa con el valor de la propiedad del objeto que se le indique. Estos son los parámetros que admite el componente:
- **list**: Lista de objetos con los que se elaborará la lista de *checks*.
- **label**: Propiedad de los objetos de la lista que se usará para etiquetar cada *check*.
- **update**: Salida del evento que se dispará cada vez que se pulsa uno de los *checks*. Con el evento llega la lista de elementos cuyos *checks* han sido seleccionados.

#### vfg-default

Componente básico.

#### vfg-dropdown-list

Dada una lista de elementos el componente muestra de manera destacada el primer elemento de la lista. El resto de elementos permanecen ocultos hasta que se hace click en el elemento visible. Presionando de nuevo los elementos que no son el primero se vuelven a ocultar.

- **list**: lista de objetos con los que trabaja el componente.

#### vfg-header

Ejemplo de cabecera con Bootstrap.

### Services

#### ArrayUtilsService

Servicio que ofrece diversas operaciones sobre arrays.

- **getUpdateArray(arrayX: Array<any>, arrayY: Array<any>, areEquals: (x: any, y: any) => boolean): Array<any>**: Crea un nuevo array con los siguientes elementos:
  - elementos que estén en *arrayX* y en *arrayY*.
  - elementos que estén en *arrayY* y no estén en *arrayX*.
  - *areEqual* es la función que se usará para determinar si dos elementos son iguales.

- **removeElement(theArray: Array<any>, theItem: any, areEquals: (x: any, y: any) => boolean): void**: Elimina todas las ocurrencias de *theItem* en *theArray* usando *areEquals* para determinar si dos elementos son iguales.

- **public updateArray(originalArray: Array<any>, newArray: Array<any>, areEquals: (x: any, y: any) => boolean): void**: Actualiza los elementos del *orginalArray* con los de *newArray*:
  - añade los elementos que estén en *newArray* y no estén en *originalArray*.
  - elimina los elementos que estén en el *originalArray* y no estén en *newArray*.
  - Al final de la ejecucion, newArray tendrá los elementos añadidos al originalArray.

### Pipes

#### mapIterablePipe

A partir de un mapa se genera un array de objetos con campos *key* y *value* correspondientes a cada entrada del mapa. Este array puede ser iterado, por ejemplo, en un *ngFor*.

#### flatArrayPipe

Retorna una cadena de texto compuesta por la contatenacion de los valores de cada elemento del array que recibe. El argumento *field* permite especificar el campo del objeto que se quiere mostrar.

### Clases.

Apartado para colecciones o estructuras de datos genéricas.

### Queue

Implementación de una cola FIFO (inserta al final extrae al principio) con una capacidad limitada de elementos.

## develop module.

Módulo con componentes destinados a probar los desarrollos del módulo vfg-common.

## Enlaces
- [Tutorial para desplegar aplicaciones Angular en GitHup Pages](https://alligator.io/angular/deploying-angular-app-github-pages/ "alligator.io").

   Con algunas versiones de AngularCli el comando `$ ng build --prod` retorna un error por cada campo privado que tengamos declarado. Para evitarlo basta con reemplazar `--prod` por `--env=prod`.   
