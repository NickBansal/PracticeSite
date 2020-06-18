import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';

const mockGeolocation = {
	getCurrentPosition: jest.fn(),
	watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation;
global.SC = {
	Widget: jest.fn()
};
