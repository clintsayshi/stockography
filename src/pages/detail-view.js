import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  }, []);

  return (
    <div>
      <h1>{self.tags}</h1>
    </div>
  );
}

export default DetailView;
