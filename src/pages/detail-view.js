import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetailView() {
  let { id } = useParams();
  const [self, setSelf] = useState();

  useEffect(() => {
    Axios.get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&id=${id}`
    )
      .then((response) => response.data)
      .then((data) => setSelf(data.hits[0]));
    /* .catch(error){
        console.log("Error Message:", error)       
      } */

    console.log(self);
  }, []);

  if (self == null) return "loading";

  return (
    <div>
      <h1>{self.tags}</h1>
      <a target="_blank" rel="noreferrer" href={`${self.pageURL}`}>
        View on Pixabay
      </a>

      <img src={self.largeImageURL} alt={self.tags} />

      <p>
        {self.likes} <span>likes</span>
      </p>
      <p>
        {self.downloads} <span>downloads</span>
      </p>
      <p>
        {self.views} <span>views</span>
      </p>

      <img src={self.userImageURL} alt={self.user} />
    </div>
  );
}

export default DetailView;
