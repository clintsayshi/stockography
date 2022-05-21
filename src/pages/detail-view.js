import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

function DetailView() {
  let { id } = useParams();
  const [self, setSelf] = useState(null);
  const [error, setError] = useState(null);

  const fetchImageData = async () => {
    try {
      const response = await Axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&id=${id}`
      );

      setSelf(response.data.hits[0]);

      console.log(self);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchImageData();
  }, []);

  // return a loader while still fetching image data
  if (self == null) return "loading";

  return (
    <Layout>
      <section className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
        <img src={self.largeImageURL} alt={self.tags} />

        <div className="py-4">
          <div className="flex my-2 gap-4 items-center">
            <img
              className="rounded-full w-10 h-10"
              src={self.userImageURL}
              alt={self.user}
            />

            <h1 className="text-xl font-medium">{self.user}</h1>
          </div>

          <ul className="flex gap-2 items-center flex-wrap">
            <li className="flex gap-2">
              {self.tags
                //.replace(/ /g, "")
                .split(",")
                .map((tag, key) => (
                  <span className="p-1 rounded-md bg-gray-100" key={key}>
                    {tag}
                  </span>
                ))}
            </li>
          </ul>

          <ul className="flex flex-wrap  items-center gap-4 py-2">
            <li title="number of views" className="flex items-center">
              {self.views}&nbsp;<span>views</span>
            </li>
            <li title="number of likes" className="flex gap-2 items-center">
              <span>{self.likes}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </li>
            <li title="number of downloads" className="flex gap-2 items-center">
              <span>{self.downloads}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <a target="_blank" className="underline" href={self.pageURL}>
                View on pixabay
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="container mx-auto mb-12 my-2 px-4 md:px-8 lg:px-12 xl:px-16">
        <p className="font-mono">width:&nbsp;{self.imageWidth}</p>
        <p className="font-mono">Height:&nbsp;{self.imageHeight}</p>
        <p className="font-mono">Size:&nbsp;{self.imageSize}</p>
      </div>
    </Layout>
  );
}

export default DetailView;
