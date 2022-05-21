import React from "react";
import { Link } from "react-router-dom";

function Card({ data }) {
  const { id, tags, previewHeight, previewWidth, previewURL } = data;
  return (
    <Link data-testid={`card-${id}`} className="relative" to={`/${id}`}>
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
