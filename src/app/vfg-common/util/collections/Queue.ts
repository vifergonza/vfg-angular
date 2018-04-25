export class Queue<T> {
	
	readonly capacity: Number;
	private store: Array<T>;

	constructor(theCapacity: Number) {
		this.store = new Array<T>();
		this.capacity = theCapacity;
	}

	public push(theObject: T) {
		if (this.capacity == this.store.length) {
			this.store.pop();
		}
		this.store.unshift(theObject);
	}

	public getStore() {
		return this.store;
	}
}