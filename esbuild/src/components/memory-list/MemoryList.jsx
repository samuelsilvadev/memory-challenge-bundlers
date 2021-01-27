import React from 'react';
import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

import MemoryCard from 'components/memory-card/MemoryCard';

import {useActiveUser} from 'state/active-user/useActiveUser';
import {useUser} from 'state/user/useUser';

import {ROUTES} from 'configs/routes';

import './MemoryList.css';

function MemoryList(props) {
	const {figures = []} = props;
	const [openedCards, setOpenedCards] = useState([]);
	const [guessedCards, setGuessedCards] = useState([]);

	const {push} = useHistory();

	const {user} = useActiveUser();
	const {
		actions: {countMove, countWin},
	} = useUser();

	useEffect(
		function handleTwoCardsOpen() {
			if (openedCards.length === 2) {
				countMove(user);

				const [first, second] = openedCards;

				if (figures[first] === figures[second]) {
					countWin(user);
					setGuessedCards((previousGuessedCards) => [
						...previousGuessedCards,
						first,
						second,
					]);
				}
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[openedCards, figures]
	);

	useEffect(
		function handleAllGuessedCards() {
			if (guessedCards.length === figures.length) {
				push(ROUTES.END);
			}
		},
		[guessedCards, figures, push]
	);

	const handleOnClick = (index) => () => {
		const cardIndex = openedCards.indexOf(index);
		const isCardOpen = cardIndex !== -1;

		if (openedCards.length === 2) {
			// NOTE: the ternary below handle the case of when the user clicks
			// again in a card that is open.
			setOpenedCards(isCardOpen ? [] : [index]);
			return;
		}

		if (isCardOpen) {
			const previousCards = [...openedCards];
			previousCards.splice(cardIndex, 1);

			setOpenedCards(previousCards);
		} else {
			setOpenedCards([...openedCards, index]);
		}
	};

	if (figures.length === 0) {
		return null;
	}

	return (
		<ul className="memoryList list">
			{figures.map((figure, index) => {
				const isCardOpen =
					openedCards.includes(index) || guessedCards.includes(index);

				return (
					<li key={index}>
						<MemoryCard
							isOpen={isCardOpen}
							onClick={handleOnClick(index)}>
							{figure}
						</MemoryCard>
					</li>
				);
			})}
		</ul>
	);
}

MemoryList.propTypes = {
	figures: PropTypes.arrayOf(PropTypes.any),
};

export default MemoryList;
