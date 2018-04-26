/**
 * Implementacion de una cola FIFO (inserta al final extrae al principio)
 * con una capacidad limitada de elementos.
 */
export class Queue<T> {
	
	// Capacidad máxima del array.
	readonly capacity: Number;

	// Almacen de datos de la cola.
	private store: Array<T>;

	/**
	 * Inicializa la cola, permite especificar un tamaño máximo.
	 */
	constructor(theCapacity?: Number) {
		this.store = new Array<T>();
		if (theCapacity != null) {
			this.capacity = theCapacity;	
		} else {
			this.capacity = null;
		}
		
	}

	/**
	 * Añade un elemento al final de la lista. Si alcanzamos el tamaño máximo
	 * elimina el elemento mas antiguo de la colleción.
	 */
	public push(theObject: T): void {
		if (null != this.capacity && this.capacity == this.store.length) {
			this.store.pop();
		}
		this.store.unshift(theObject);
	}

	/**
	 * Retorna y extrae el ultimo elemento de la coleccion
	 */
	public pop(): T {
		if (0 < this.store.length) {
			return this.store.pop();
		} else {
			return null;
		}
	}

	/**
	 * Retorna la lista de elementos.
	 */
	public getStore(): Array<T> {
		return this.store;
	}
}