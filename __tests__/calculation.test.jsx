// calculation.test.js

const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";
import { add } from '../src/libs/calculate';

describe('add function', () => {
  it('adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  it('handles non-numeric inputs', () => {
    expect(add('hello', 5)).toBeNaN();
    expect(add(10, 'world')).toBeNaN();
  });
});
