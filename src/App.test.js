// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import React from 'react'
// import {http, HttpResponse} from 'msw'
// import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import App from './App'

// Mock window.matchMedia
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: query === '(max-width: 768px)',
      media: query,
      onchange: null,
      addListener: jest.fn(),  // Deprecated but may be needed for legacy support
      removeListener: jest.fn(),  // Deprecated but may be needed for legacy support
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

afterAll(() => {
  window.matchMedia.mockClear();
});

test('displays and load', () => {
        render(<App />);       
        const heading = screen.getByTestId('heading-functional-testing');
        expect(heading).toHaveTextContent('Functional Testing');
});

test('mock data',() => {
     render(<App />);
     const heading = screen.getByTestId('heading-mock-data');
     expect(heading).toHaveTextContent('Mock Data');
}
);

test('mock server',() => {
  render(<App />);
  const heading = screen.getByTestId('heading-mock-server');
  expect(heading).toHaveTextContent('Mock Server');
});

test('code coverage',() => {
  render(<App />);
  const heading = screen.getByTestId('heading-code-coverage');
  expect(heading).toHaveTextContent('Code Coverage');
});

test('feature',() => {
  render(<App />);
  const heading = screen.getByTestId('navigation-feature-btn');
  expect(heading).toHaveTextContent('Home');
});

test('docs',() => {
  render(<App />);
  const heading = screen.getByTestId('navigation-docs-btn');
  expect(heading).toHaveTextContent('Docs');
});

test('Contributors',() => {
  render(<App />);
  const heading = screen.getByTestId('navigation-contributors-btn');
  expect(heading).toHaveTextContent('Contributors');
});

test('support',() => {
  render(<App />);
  const heading = screen.getByTestId('navigation-support-btn');
  expect(heading).toHaveTextContent('Support');
});

test('Blog',() => {
  render(<App />);
  const heading = screen.getByTestId('navigation-Blog-btn');
  expect(heading).toHaveTextContent('Blog');
});

test('Previous',() => {
  render(<App />);
  fireEvent.click(screen.getByTestId('navigation-docs-btn'));

  const heading = screen.getByTestId('navigation-previous-btn');
  expect(heading).toHaveTextContent('Previous');
});



test('Getting Started',() => {
  render(<App />);
  fireEvent.click(screen.getByTestId('navigation-docs-btn'));

  const heading = screen.getByText('Prerequisites');
  expect(heading).toBeTruthy();
});


test('Contributors',() => {
  render(<App />);
  fireEvent.click(screen.getByTestId('navigation-contributors-btn'));

  
  const heading = screen.getByText('Contributors');
  
  expect(screen.getByText('ftmocks-server')).toBeInTheDocument();
  expect(screen.getByText('ftmocks-tool')).toBeInTheDocument();
  expect(screen.getByText('ftmocks-website')).toBeInTheDocument();
  // expect(heading).toBeTruthy();
});





test('Support',() => {
  render(<App />);
  fireEvent.click(screen.getByTestId('navigation-support-btn'));

  const heading = screen.getByText('Contact Support');
  // expect(heading).toHaveTextContent('Support');
  expect(heading).toBeTruthy();
});
