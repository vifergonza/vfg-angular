import { Pipe, PipeTransform } from '@angular/core';

/*
 * Retorna una cadena de texto compuesta por la contatenacion de los valores de cada
 * elemento del array que recibe.
 * El argumento field permite especificar el campo del objeto que se quiere mostrar.
 * Uso:
 *    [ { nombre: 'Victor', musica: 'Rock'}, { nombre: 'Bea', musica: 'Country'}] | flatArrayPipe: 'nombre' 
 *    Retorna: "Victor, Bea"
*/
@Pipe({
  name: 'flatArrayPipe'
})
export class FlatArrayPipe implements PipeTransform {

	transform(value: Array<any>, field: string): string {
		let text: string = "";  	
		if (null != value && 0<value.length) {
			value.forEach( item => {
				if ( typeof item === 'string') {
					text = text.concat(", ").concat(item);
				} else {
					text = text.concat(this.getPropertie(item, field));
				}
			});
			return text.substr(2);
		}
		return text;
	}

	private getPropertie(item, propertie): string {
	  for (let [key, value] of Object.entries(item)) {  
	    if (key === propertie) {
	      return ", ".concat(value as string);
	    }
	  }
	  return "";
	}
}
