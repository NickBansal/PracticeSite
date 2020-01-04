import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';

const mockGeolocation = {
	getCurrentPosition: jest.fn(),
	watchPosition: jest.fn()
};

jest.useFakeTimers();

global.navigator.geolocation = mockGeolocation;
