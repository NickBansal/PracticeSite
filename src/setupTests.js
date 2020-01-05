import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

const mockGeolocation = {
	getCurrentPosition: jest.fn(),
	watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;

Object.defineProperty(global.window.HTMLMediaElement.prototype, 'play', {
	configurable: true,

	get() {
		setTimeout(() => this.onloadeddata && this.onloadeddata());
		return () => {};
	}
});
