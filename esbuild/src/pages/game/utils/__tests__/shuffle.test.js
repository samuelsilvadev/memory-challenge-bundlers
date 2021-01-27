import {shuffle} from '../shuffle';

describe('shuffle', () => {
	it('should mix elements from an array but still keep all elements', () => {
		const result = shuffle([1, 2, 3, 4]);

		expect(result).toContain(1);
		expect(result).toContain(2);
		expect(result).toContain(3);
		expect(result).toContain(4);
		expect(result).not.toStrictEqual([1, 2, 3, 4]);
	});

	it('should mix string elements from an array but still keep all elements', () => {
		const result = shuffle(['hello', 'world']);

		expect(result).toContain('hello');
		expect(result).toContain('world');
		expect(result).not.toStrictEqual(['hello', 'world']);
	});

	it('should not break if argument is undefined', () => {
		const result = shuffle();

		expect(result).toEqual([]);
	});
});
