import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  const { id, tags, previewHeight, previewWidth, previewURL } = data;
  return (
    <Link className="relative" to={`/${id}`} key={id}>
      <img
        className="w-full rounded-lg h-60 object-cover"
        alt={tags}
        width={previewWidth}
        height={previewHeight}
        src={previewURL}
      />
    </Link>
  );
}

export default Card;
