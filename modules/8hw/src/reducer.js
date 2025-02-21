export const initialState = {
	currentPlayer: 'X',
	field: ['', '', '', '', '', '', '', '', ''],
	isGameEnded: false,
	isDraw: false,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return { ...state, currentPlayer: payload };

		case 'SET_FIELD':
			return { ...state, field: payload };

		case 'SET_GAME_ENDED':
			return { ...state, isGameEnded: true };

		case 'SET_DRAW':
			return { ...state, isDraw: true, isGameEnded: true };

		case 'RESTART_GAME':
			return initialState;

		default:
			return state;
	}
};
