import React from 'react';
import {ROUTES} from 'configs/routes';
import {useHistory} from 'react-router-dom';

import {useActiveUser} from 'state/active-user/useActiveUser';
import {useUser} from 'state/user/useUser';

import './End.css';

function End() {
	const {push} = useHistory();
	const {
		user,
		actions: {resetActiveUser},
	} = useActiveUser();
	const {scoreboard} = useUser({user});

	const handleOnClick = () => {
		resetActiveUser();
		push(ROUTES.GAME);
	};

	return (
		<section className="end wrapper">
			<div className="innerWrapper">
				<h1>Congratulations</h1>
				<dl className="list">
					<dt>Moves</dt>
					<dd>{scoreboard?.moves ?? 0}</dd>
					<dt>Correct Moves</dt>
					<dd>{scoreboard?.wins ?? 0}</dd>
				</dl>
				<button onClick={handleOnClick} className="button">
					New game
				</button>
			</div>
		</section>
	);
}

export default End;
