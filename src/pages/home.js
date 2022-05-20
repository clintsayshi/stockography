import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import QueryResults from "../components/QueryResults";

function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);

  console.log(images);

  useEffect(() => {
    setLoading(true);
    //
    const fetchImages = async () => {
      const response = await Axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&per_page=${perPage}&page=${page}`
      );

      setImages(response.data.hits);
      setLoading(false);
    };

    fetchImages();
  }, [page]);

  return (
    <div className="h-screen">
      <Header />

      <button onClick={() => setPage((prev) => ++prev)}>ADD</button>

      <section className="container h-full mx-auto px-6 sm:px-6">
        <QueryResults loading={loading}>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
            {images.length > 0 &&
              images.map((image) => (
                <Link to={`/${image.id}`} key={image.id}>
                  <img
                    className="w-full h-60 object-cover"
                    alt={image.tags}
                    width={image.previewWidth}
                    height={image.previewHeight}
                    src={image.previewURL}
                  />
                </Link>
              ))}
          </div>
        </QueryResults>
      </section>
    </div>
  );
}

export default Home;
