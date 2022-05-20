import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Card from "../components/Card";
import Header from "../components/Header";
import QueryResults from "../components/QueryResults";

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  console.log(images);

  useEffect(() => {
    //
    setLoading(true);
    const fetchImages = async () => {
      const response = await Axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&per_page=${perPage}&page=${page}`
      );

      setImages([...images, ...response.data.hits]);
      setLoading(false);
    };

    fetchImages();
  }, [page]);

  const LoadMoreImages = () => {
    // increment number of pages so that Axios can fetch images on the second page...
    setPage((prev) => prev + 1);
  };

  window.onscroll = () => {
    // check if user scrolled to the bottom
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

      <section className="container h-full mx-auto px-6 sm:px-6">
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {images.length > 0 &&
            images.map((image) => <Card key={image.id} data={image} />)}
        </div>
      </section>
    </div>
  );
}

export default Home;
