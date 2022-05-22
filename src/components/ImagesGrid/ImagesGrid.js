import React from "react";
import Card from "../Card/Card";

function ImagesGrid({ images }) {
  return (
    <section
      data-testid="images-grid"
      className="container h-full mx-auto px-4 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        {images.length > 0 &&
          images.map((image, key) => <Card key={key} data={image} />)}
      </div>
    </section>
  );
}

export default ImagesGrid;
