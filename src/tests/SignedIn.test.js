import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import SignedIn from '../components/SignedIn';

describe('SignedIn', () => {
  test('Renders SignedIn Wrapper', () => {
    const { getByTestId } = render(<SignedIn />);
    const wrapper = getByTestId('signedinTestID');
    expect(wrapper).toBeInTheDocument();
  });
});