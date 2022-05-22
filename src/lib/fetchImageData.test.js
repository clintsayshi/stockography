import axios from "axios";

import { fetchImageData, baseURL, IMAGES_PER_PAGE } from "./fetchImageData";

jest.mock("axios");

describe("fetch list of images", () => {
  describe("When API call is successful", () => {
    it("should return data object with hits array", async () => {
      //
      const output = {
        data: {
          hits: [
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
          ],
        },
      };

      axios.get.mockResolvedValueOnce(output);

      // when
      const result = await fetchImageData(1, null);

      // then
      expect(axios.get).toHaveBeenCalledWith(
        `${baseURL}&per_page=${IMAGES_PER_PAGE}&page=1`
      );
      expect(result).toEqual(output);
    });
  });

  describe("when API call fails", () => {
    it("should return an empty array", async () => {
      // given
      const message = "Fetch Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchImageData(1, null);

      // then
      expect(axios.get).toHaveBeenCalledWith(
        `${baseURL}&per_page=${IMAGES_PER_PAGE}&page=${1}`
      );
      expect(result).toEqual([]);
    });
  });
});

describe("fetch single image", () => {
  const output = {
    data: {
      hits: [
        {
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
        },
      ],
    },
  };

  describe("when API call is successful", () => {
    it("it should return array with single image", async () => {
      axios.get.mockResolvedValueOnce(output);

      // when
      const result = await fetchImageData(null, 1233);

      // then
      expect(axios.get).toHaveBeenCalledWith(`${baseURL}&id=1233`);
      expect(result).toEqual(output);
    });
  });

  describe("when API call fails", () => {
    it("should return an empty array", async () => {
      // given
      const message = "Fetch Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchImageData(null, 1233);

      // then
      expect(axios.get).toHaveBeenCalledWith(`${baseURL}&id=1233`);
      expect(result).toEqual([]);
    });
  });
});
