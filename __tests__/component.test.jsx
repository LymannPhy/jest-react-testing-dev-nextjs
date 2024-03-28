const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";
import MyComponent from "../src/components/my-component/MyComponent";


describe('MyComponent', () => {
    it('renders the correct text', () => {
      render(<MyComponent />);
      const textElement = screen.getByText('Hello, World!');
      expect(textElement).toBeInTheDocument();
    });
  });