import React from "react";
import renderer from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";
import ImageDetails from "./ImageDetails";

const self = {
  id: 132132,
  tags: "nature, sunrise",
  largeImageURL:
    "https://cdn.pixabay.com/photo/2022/04/21/20/49/road-7148369_960_720.jpg",
  downloads: 22233,
  likes: 32,
  views: 23222,
  imageSize: 4344,
  imageHeight: 3233,
  imageWidth: 3423,
  pageURL: "",
  user: "Mike Jack",
  userImageURL: "",
};

afterEach(() => {
  cleanup();
});

it("renders Image Details successfully", () => {
  render(<ImageDetails self={self} />);
  const component = renderer.create(<ImageDetails self={self} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const imageDetailsEl = screen.getByTestId("image-details");
  expect(imageDetailsEl).toBeInTheDocument();
});
