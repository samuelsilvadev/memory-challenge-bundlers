const {duplicateEachFigure} = require('../duplicateEachFigure');

describe('duplicateEachFigure', () => {
	it('should duplicate correctly', () => {
		const result = duplicateEachFigure([1]);

		expect(result).toEqual([1, 1]);
	});

	it('should not break if argument is undefined', () => {
		const result = duplicateEachFigure();

		expect(result).toEqual([]);
	});
});
