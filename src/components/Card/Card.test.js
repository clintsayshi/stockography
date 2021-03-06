import React from "react";
import renderer from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";
import Card from "./Card";
import { MemoryRouter } from "react-router-dom";

const fakeData = {
  id: 132132,
  tags: "nature, sunrise",
  previewHeight: 250,
  previewWidth: 200,
  previewURL:
    "https://cdn.pixabay.com/photo/2022/04/21/20/49/road-7148369_960_720.jpg",
};

afterEach(() => {
  cleanup();
});

it("renders Card successfully", () => {
  render(
    <MemoryRouter>
      <Card data={fakeData} />
    </MemoryRouter>
  );
  const component = renderer.create(
    <MemoryRouter>
      <Card data={fakeData} />
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const cardElement = screen.getByTestId("card-132132");
  expect(cardElement).toBeInTheDocument();
});

test("the link works as expected", () => {
  render(
    <MemoryRouter>
      <Card data={fakeData} />
    </MemoryRouter>
  );

  expect(screen.getByRole("link")).toHaveAttribute("href", "/132132");
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2022/04/21/20/49/road-7148369_960_720.jpg"
  );
  expect(screen.getByRole("img")).toHaveAttribute("alt", "nature, sunrise");
});
