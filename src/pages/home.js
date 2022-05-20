import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState();

  console.log(images);

  useEffect(() => {
    Axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}`
    )
      .then((response) => response.data)
      .then((data) => setImages(data.hits));
    /* .catch(error){
        console.log("Error Message:", error)       
      } */
  }, []);

  return (
    <div>
      <h1>Welcome Home</h1>

      <section className="container mx-auto">
        <div className=" sm:grid sm:grid-cols-3 md:grid-cols-4">
          {images.length > 0 &&
            images.map((image) => (
              <article key={image.id}>
                <img
                  alt={image.tags}
                  width={image.previewWidth}
                  height={image.previewHeight}
                  src={image.previewURL}
                />

                <Link to={`/${image.id}`}>View Image</Link>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
