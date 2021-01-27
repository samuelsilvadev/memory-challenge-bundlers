import {generateRandomNumber} from './generateRandomNumber';

/**
 * Mix elements of a set of items using fisher yates shuffle algorithm.
 *
 * @see https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
 *
 * @param {Array} figures
 * @return {Array} shuffledFigures
 */
export function shuffle(figures = []) {
	for (let index = figures.length - 1; index > 0; index--) {
		const randomIndex = generateRandomNumber(index);

		const previousValue = figures[index];
		figures[index] = figures[randomIndex];
		figures[randomIndex] = previousValue;
	}

	return figures;
}
