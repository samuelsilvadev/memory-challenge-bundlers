export function getUserScoreboard(state, user) {
	if (!user?.name) {
		return;
	}

	return state?.users?.[user.name];
}
