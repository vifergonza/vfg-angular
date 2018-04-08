[logo]: https://raw.githubusercontent.com/vifergonza/vfg-angular/master/src/assets/angular-vfg.png
 ![alt text][logo]

# VfgAngular

Esta es un simple aplicación para desarrollar probar y experimentar con Angular, Bootstrap y todas las técnologias web con las que voy practicando.[Aqui se encuentra el proyecto desplegado](https://vifergonza.github.io/vfg-angular/home "vfg-angular").

## vfg-common module.

Módulo con componentes de uso genérico.

### vfg-check-list

A partir de una lista de elementos de cualquier tipo se crea un formulario reactivo con tantos *checks* como elementos tenga dicha lista. Cada *check* esta acompañado de una etiqueta que informa con el valor de la propiedad del objeto que se le indique. Estos son los parámetros que admite el componente:

- **list**: Lista de objetos con los que se elaborará la lista de *checks*.
- **label**: Propiedad de los objetos de la lista que se usará para etiquetar cada *check*.
- **update**: Salida del evento que se dispará cada vez que se pulsa uno de los *checks*. Con el evento llega la lista de elementos cuyos *checks* han sido seleccionados.

### mapIterablePipe

A partir de un mapa se genera un array de objetos con campos *key* y *value* corespondientes a cada entrada del mapa. Este esun array que puede ser iterado por ejemplo en un *ngFor*.

### flatArrayPipe

Retorna una cadena de texto compuesta por la contatenacion de los valores de cada elemento del array que recibe. El argumento *field* permite especificar el campo del objeto que se quiere mostrar.

### vfg-header

Ejemplo de cabecera.

## develop module.

Módulo con componentes destinados a probar los desarrollos del módulo vfg-common.

### checklistexample

Componente para ilustrar el uso de **vfg-check-list**.

## Enlaces
- [Tutorial para desplegar aplicaciones Angular en GitHup Pages](https://alligator.io/angular/deploying-angular-app-github-pages/ "alligator.io").

   Con algunas versiones de AngularCli el comando `$ ng build --prod` retorna un error por cada campo privado que tengamos declarado. Para evitarlo basta con reemplazar `--prod` por `--env=prod`.   


