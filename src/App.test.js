import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Select recipes to browse our collection or to input your own!/i
  );
  expect(linkElement).toBeInTheDocument();
});
