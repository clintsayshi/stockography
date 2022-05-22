import Axios from "axios";

export const baseURL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}`;
export const IMAGES_PER_PAGE = 12;

export const fetchImageData = async (page, photoId) => {
  if (page !== null) {
    try {
      let url = `${baseURL}&per_page=${IMAGES_PER_PAGE}&page=${page}`;
      return await Axios.get(url); // fetch images from pixabay API
    } catch (e) {
      return [];
    }
  } else if (photoId !== null) {
    try {
      let url = `${baseURL}&id=${photoId}`;
      return await Axios.get(url); // fetch selected image data by id from pixabay API
    } catch (e) {
      return [];
    }
  }
};
