import {fireEvent, render, screen} from "@testing-library/react";
import Counter from "./Counter";

describe('Counter', () => {
  it('should start at 0', () => {
    render(<Counter></Counter>);
    expect(screen.getByText('Count is 0')).toBeTruthy();
  });

  it('should increment', () => {
    render(<Counter></Counter>);
    fireEvent.click(screen.getByText('Add'))
    expect(screen.getByText('Count is 1')).toBeTruthy();
    fireEvent.click(screen.getByText('Add'))
    expect(screen.getByText('Count is 2')).toBeTruthy();
  });
});
