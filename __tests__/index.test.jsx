const { render, waitFor, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";
import About from "../src/app/about/page";

// Mock the global fetch to return a specific set of data
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { id: 1, email: "example1@example.com" }
        // Include as many mock users as needed for your test
      ])
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("fetches users and displays their emails", async () => {
  render(<About />);

  await waitFor(() => {
    expect(screen.getByText("example1@example.com")).toBeInTheDocument();
    // Add assertions for other mock users as needed
  });

  // Check if fetch was called with the correct endpoint
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/users"
  );
});




