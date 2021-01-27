import {generateRandomNumber} from '../generateRandomNumber';

describe('generateRandomNumber', () => {
	it('should generate a random number until 10', () => {
		const result = generateRandomNumber(10);

		expect(result).toBeLessThanOrEqual(10);
		expect(result).toBeGreaterThanOrEqual(0);
	});

	it('should generate a random number until 5', () => {
		const result = generateRandomNumber(5);

		expect(result).toBeLessThanOrEqual(5);
		expect(result).toBeGreaterThanOrEqual(0);
	});

	it('should not break if max argument is undefined', () => {
		const result = generateRandomNumber();

		expect(result).toBe(0);
	});
});
