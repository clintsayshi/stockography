import renderer from "react-test-renderer";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ImagesGrid from "./ImagesGrid";

afterEach(() => {
  cleanup();
});

describe("Cards of images renderes successfully", () => {
  test("renders cards of images", () => {
    const input = [
      {
        id: 132132,
        tags: "nature, sunrise",
        previewHeight: 250,
        previewWidth: 200,
        previewURL:
          "https://cdn.pixabay.com/photo/2022/04/21/20/49/road-7148369_960_720.jpg",
      },
      {
        id: 132132,
        tags: "street, architecture",
        previewHeight: 250,
        previewWidth: 200,
        previewURL:
          "https://cdn.pixabay.com/photo/2022/04/21/20/49/road-7148369_960_720.jpg",
      },
      {
        id: 132132,
        tags: "nature, flowers",
        previewHeight: 250,
        previewWidth: 200,
        previewURL:
          "https://cdn.pixabay.com/photo/2022/04/21/20/49/road-7148369_960_720.jpg",
      },
    ];

    const component = renderer.create(
      <MemoryRouter>
        <ImagesGrid images={input} />
      </MemoryRouter>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    render(
      <MemoryRouter>
        <ImagesGrid images={input} />
      </MemoryRouter>
    );
    const gridEl = screen.getByTestId("images-grid");
    expect(gridEl).toBeInTheDocument();
  });
});
