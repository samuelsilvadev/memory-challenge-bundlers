import {useDispatch, useSelector} from 'react-redux';

import {createUser, countMove, countWin} from 'state/user/actions';
import {getUserScoreboard as getUserScoreboardSelector} from 'state/user/selectors';

export function useUser({user} = {}) {
	const dispatch = useDispatch();

	const scoreboard = useSelector((state) =>
		getUserScoreboardSelector(state, user)
	);

	return {
		scoreboard,
		actions: {
			createUser: (user) => dispatch(createUser(user)),
			countMove: (user) => dispatch(countMove(user)),
			countWin: (user) => dispatch(countWin(user)),
		},
	};
}
