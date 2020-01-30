import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Landing from '../components/Landing';

describe('Landing', () => {
  test('Renders Landing Component', () => {
    const { getByTestId } = render(<Landing/>);
    const landing = getByTestId('landingTestID');
    expect(landing).toBeInTheDocument();
  });
  test('Buttton Wrapper Renders', () => {
    const { getByTestId } = render(<Landing/>)
    const wrapper = getByTestId('button-wrapper');
    expect(wrapper).toBeInTheDocument();
  });
  test('Landing H5 Renders', () => {
    const { getByTestId } = render(<Landing/>)
    const h5 = getByTestId('h5');
    expect(h5).toBeInTheDocument();
  });
  test('Landing H1 Renders', () => {
    const { getByTestId } = render(<Landing/>)
    const h1 = getByTestId('h5');
    expect(h1).toBeInTheDocument();
  });
  test('Landing P Renders', () => {
    const { getByTestId } = render(<Landing/>)
    const p = getByTestId('p');
    expect(p).toBeInTheDocument();
  });
  test('Landing Sign In Renders', () => {
    const { getByTestId } = render(<Landing/>)
    const signin = getByTestId('signin');
    expect(signin).toBeInTheDocument();
  });
  test('Landing More Info Renders', () => {
    const { getByTestId } = render(<Landing/>)
    const moreinfo = getByTestId('moreinfo');
    expect(moreinfo).toBeInTheDocument();
  });
})