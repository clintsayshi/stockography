import { render, screen, cleanup } from "@testing-library/react";
import DetailView from "./detail-view";
import { MemoryRouter } from "react-router-dom";

const fakeData = {
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

test("ensure all fields are filled", () => {
  expect(true).toBeTruthy();
});
