export const debounce = (callee, timeoutMs) => {
	let lastCallTimer;

	return function (...args) {
		clearTimeout(lastCallTimer);
		lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
	};
};
