import { Injectable } from '@angular/core';

/**
 * Servicio que ofrece diversas operaciones sobre arrays.
 *
 */
@Injectable()
export class ArrayUtilsService {

	constructor() { }

	/**
	 * Crea un nuevo array con los siguientes elementos:
	 *  - elementos que esten en arrayX y en arrayY.
	 *  - elementos que esten en arrayY y no esten en arrayX.
	 */
	public getUpdateArray(arrayX: Array<any>, arrayY: Array<any>, areEquals: (x: any, y: any) => boolean): Array<any> {
		let resultArray = arrayX.slice();
		this.updateArray(resultArray, arrayY.slice(), areEquals);
		return resultArray;
	}

	/**
	 * Elimina todas las ocurrencias de theItem en el array usando areEquals para 
	 * determinar si dos elementos son iguales.
	 */
	public removeElement(theArray: Array<any>, theItem: any, areEquals: (x: any, y: any) => boolean): void {
	  let i = 0;
	  while (i<theArray.length) {
	    let found = areEquals(theItem, theArray[i]);
	    if (found) {
	      theArray.splice(i, 1);
	    } else {
	      i++;
	    }
	  }  
	}

	/**
	 * Actualiza los elementos del orginalArray con los de newArray:
	 *  - añade los elementos que esten en newArray y no esten en originalArray.
	 *  - elimina los elementos que esten en el originalArray y no esten en newArray.
	 * Al final de la ejecucion, newArray tendrá los elementos añadidos al originalArray.
	 */
	public updateArray(originalArray: Array<any>, newArray: Array<any>, areEquals: (x: any, y: any) => boolean): void {
     let indexOriginal = 0;
     while (indexOriginal < originalArray.length) {
       let itemOriginal = newArray.find( itemNew => {
         return areEquals(originalArray[indexOriginal], itemNew);
       });

       if (itemOriginal) {
         // Esta en el nuevo y en el original. Lo elimino de nuevo y avanzo en cursor.
         this.removeElement(newArray, itemOriginal, areEquals);
         indexOriginal++;
       } else {
         // esta en el original, pero no en el nuevo, lo elimino del original
         originalArray.splice(indexOriginal, 1);
       }
     }

     // Si en este punto quedan elementos en el nuevo, los añado al original
     newArray.forEach( x  => {
       originalArray.push(x);
     });
   }

}
