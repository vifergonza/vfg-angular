import { TestBed, inject } from '@angular/core/testing';

import { ArrayUtilsService } from './array-utils.service';

describe('ArrayUtilsService', () => {

	var areEquals = function (x, y): boolean {
			return x.key===y.key;
		};

	beforeEach(() => {
	TestBed.configureTestingModule({
	 		providers: [ArrayUtilsService]
		});
	});

	it('should be created', inject([ArrayUtilsService], (service: ArrayUtilsService) => {
	expect(service).toBeTruthy();
	}));

	it('remove elements', inject([ArrayUtilsService], (service: ArrayUtilsService) => {
		let theArray = [
			{ id: 2368, key: 'vfgtestunitRemove', data: {} },
			{ id: 2368, key: 'vfgtestunit', data: {} },
			{ id: 2368, key: 'vfgtestunitRemove', data: {} },
			{ id: 2368, key: 'vfgtestunit', data: {} },
			{ id: 2368, key: 'vfgtestunit', data: {} },
			{ id: 2368, key: 'vfgtestunitRemove', data: {} }
		];

		let theItem = { id: 2368, key: 'vfgtestunitRemove', data: {} };

		service.removeElement(theArray, theItem, areEquals);

		expect(theArray.length).toBe(3);
		expect(theArray.some( (x) => { return x.key=='vfgtestunitRemove'})).toBe(false);
	}));


	it('update Array', inject([ArrayUtilsService], (service: ArrayUtilsService) => {

		let theArray = [
			{ id: 2368, key: 'vfgtestunit1', data: {} },
			{ id: 2368, key: 'vfgtestunit2', data: {} },
			{ id: 2368, key: 'vfgtestunit3', data: {} },
			{ id: 2368, key: 'vfgtestunit4', data: {} }
		];

		let theNewArray = [
			{ id: 2368, key: 'vfgtestunit5', data: {} },
			{ id: 2368, key: 'vfgtestunit2', data: {} },
			{ id: 2368, key: 'vfgtestunit6', data: {} },
			{ id: 2368, key: 'vfgtestunit7', data: {} },
			{ id: 2368, key: 'vfgtestunit4', data: {} }
		];

		service.updateArray(theArray, theNewArray, areEquals);
		expect(theArray.length).toBe(5);
		expect(theNewArray.length).toBe(3);
		expect(theArray.some( (x) => { return x.key=='vfgtestunit1'})).toBe(false);
		expect(theArray.some( (x) => { return x.key=='vfgtestunit2'})).toBe(true);
		expect(theArray.some( (x) => { return x.key=='vfgtestunit3'})).toBe(false);
		expect(theArray.some( (x) => { return x.key=='vfgtestunit4'})).toBe(true);
		expect(theArray.some( (x) => { return x.key=='vfgtestunit5'})).toBe(true);
		expect(theArray.some( (x) => { return x.key=='vfgtestunit6'})).toBe(true);
		expect(theArray.some( (x) => { return x.key=='vfgtestunit7'})).toBe(true);

	}));

	it('get update Array', inject([ArrayUtilsService], (service: ArrayUtilsService) => {

		let theArray = [
			{ id: 2368, key: 'vfgtestunit1', data: {} },
			{ id: 2368, key: 'vfgtestunit2', data: {} },
			{ id: 2368, key: 'vfgtestunit3', data: {} },
			{ id: 2368, key: 'vfgtestunit4', data: {} }
		];

		let theOtherArray = [
			{ id: 2368, key: 'vfgtestunit5', data: {} },
			{ id: 2368, key: 'vfgtestunit2', data: {} },
			{ id: 2368, key: 'vfgtestunit6', data: {} },
			{ id: 2368, key: 'vfgtestunit7', data: {} },
			{ id: 2368, key: 'vfgtestunit4', data: {} }
		];

		let theNewArray = service.getUpdateArray(theArray, theOtherArray, areEquals);

		expect(theArray.length).toBe(4);
		expect(theOtherArray.length).toBe(5);

		expect(theNewArray.length).toBe(5);
		expect(theNewArray.some( (x) => { return x.key=='vfgtestunit1'})).toBe(false);
		expect(theNewArray.some( (x) => { return x.key=='vfgtestunit2'})).toBe(true);
		expect(theNewArray.some( (x) => { return x.key=='vfgtestunit3'})).toBe(false);
		expect(theNewArray.some( (x) => { return x.key=='vfgtestunit4'})).toBe(true);
		expect(theNewArray.some( (x) => { return x.key=='vfgtestunit5'})).toBe(true);
		expect(theNewArray.some( (x) => { return x.key=='vfgtestunit6'})).toBe(true);
		expect(theNewArray.some( (x) => { return x.key=='vfgtestunit7'})).toBe(true);

	}));

});
