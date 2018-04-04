# VfgAngular

Esta es un simple aplicación para desarrollar probar y experimentar con Angular, Bootstrap y todas las técnologias web con las que voy practicando.

## vfg-common module.

Módulo con componentes de uso genérico.

### vfg-check-list

A partir de una lista de elementos de cualquier tipo se crea un formulario reactivo con tantos *checks* como elementos tenga dicha lista. Cada *check* esta acompañado de una etiqueta que informa con el valor de la propiedad del objeto que se le indique. Estos son los parámetros que admite el componente:

- **list**: Lista de objetos con los que se elaborará la lista de *checks*.
- **label**: Propiedad de los objetos de la lista que se usará para etiquetar cada *check*.
- **update**: Salida del evento que se dispará cada vez que se pulsa uno de los *checks*. Con el evento llega la lista de elementos cuyos *checks* han sido seleccionados.

### vfg-header

Ejemplo de cabecera.

## develop module.

Módulo con componentes destinados a probar los desarrollos del módulo vfg-common.

### checklistexample

Componente para ilustrar el uso de **vfg-check-list**.
