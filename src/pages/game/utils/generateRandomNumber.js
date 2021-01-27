/**
 * Generate a random number until the max parameter
 *
 * @param {number} max
 * @returns {number} randomNumber
 */
export function generateRandomNumber(max = 0) {
	return Math.floor(Math.random() * max);
}
