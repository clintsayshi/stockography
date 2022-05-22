import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Layout from "../components/Layout";
import ImageDetails from "../components/ImageDetails/ImageDetails";
import { fetchImageData } from "../lib/fetchImageData";

function DetailView() {
  let { id } = useParams();
  const [self, setSelf] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // asynchronous function to fetch image data by id from pixabay API
    const fetchData = async () => {
      const fetchResponse = await fetchImageData(null, id);

      if (fetchResponse === []) {
        setError(true);
        return;
      }

      // in order to enable infinite scrolling add newly fetched images to the exisiting ones
      setImages(await [...images, ...fetchResponse.data.hits]);
      setSelf(imageData.data.hits[0]);
      // turn off loading
      setLoading(false);
      setError(false);
    };

    fetchData();
  });

  // return a loader while still fetching image data
  if (self == null)
    return (
      <div className="container h-screen flex justify-center items-center mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <BeatLoader loading={loading} color="#000" size={20} />
      </div>
    );

  // if there's error fetching image
  if (error) {
    <div className="container h-screen flex justify-center items-center mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
      <h2>There was an error</h2>
    </div>;
  }

  return (
    <Layout>
      <ImageDetails self={self} />
    </Layout>
  );
}

export default DetailView;
