import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Header from "../components/Header";
import ImagesGrid from "../components/ImagesGrid/ImagesGrid";
import { fetchImageData } from "../lib/fetchImageData";

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const fetchResponse = await fetchImageData(page);

    if (fetchResponse === []) {
      setError(true);
      return;
    }

    // in order to enable infinite scrolling add newly fetched images to the exisiting ones
    setImages(await [...images, ...fetchResponse.data.hits]);
    // turn off loading
    setLoading(false);
    setError(false);
  };

  useEffect(() => {
    // show a loader when fetching images
    setLoading(true);
    // fetch images from pixabay API
    fetchData();
  }, [page]);

  const LoadMoreImages = () => {
    // increment number of pages so that Axios can fetch images on the second page...
    setPage((prev) => prev + 1);
  };

  window.onscroll = () => {
    // check if user scrolled to the bottom to fetch more images
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      LoadMoreImages();
    }
  };

  return (
    <div className="">
      <Header />

      <ImagesGrid images={images} />

      {loading && (
        <div className="container flex justify-center items-center mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <BeatLoader loading={loading} color="#000" size={20} />
        </div>
      )}

      {error && (
        <div className="container flex justify-center items-center mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
          <h2>There was an error fetching images...</h2>
        </div>
      )}
    </div>
  );
}

export default Home;
