import {useDispatch, useSelector} from 'react-redux';

import {resetActiveUser} from './actions';
import {getActiveUser as getActiveUserSelector} from './selectors';

export function useActiveUser() {
	const dispatch = useDispatch();
	const user = useSelector(getActiveUserSelector);

	return {
		user,
		actions: {
			resetActiveUser: () => dispatch(resetActiveUser()),
		},
	};
}
