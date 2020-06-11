import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);

    render(<App />);
});

test('women display is rendered', () => {
    const { getByTestId } = render(<App/>);
    getByTestId(/women-display/i)
});

test('main display is rendered', () => {
    const { getByTestId } = render(<App/>);
    getByTestId(/main-element/i)
});