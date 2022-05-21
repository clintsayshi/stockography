import Axios from "axios";
import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Card from "../components/Card/Card";
import Header from "../components/Header";

const POSTS_PER_PAGE = 10;

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState();

  useEffect(() => {
    // show a loader when fetching images
    setLoading(true);
    // asynchronous function to fetch images from pixabay API
    const fetchImages = async () => {
      try {
        const response = await Axios.get(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&per_page=${POSTS_PER_PAGE}`
        );
        // in order to enable infinite scrolling add newly fetched images to the exisiting ones
        setImages([...images, ...response.data.hits]);
        // if the program gets here means there was no errors so disable loader and errors
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
      }
    };

    fetchImages();
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

      <section className="container h-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {images.length > 0 &&
            images.map((image, key) => <Card key={key} data={image} />)}
        </div>
      </section>

      {loading && <BeatLoader loading={loading} color="#000" size={20} />}
    </div>
  );
}

export default Home;
