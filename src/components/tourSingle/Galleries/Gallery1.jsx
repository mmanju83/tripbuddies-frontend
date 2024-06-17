import React, { useState } from "react";
import ImageLightBox from "./ImageLightBox";

const images = [
  {
    id: 1,
    image: `/img/tourSingle/TripDetails-1.jpg`,
  },
  {
    id: 1,
    image: `/img/tourSingle/TripDetails-2.jpg`,
  },
  {
    id: 1,
    image: `/img/tourSingle/TripDetails-3.jpg`,
  },
  {
    id: 1,
    image: `/img/tourSingle/TripDetails-4.jpg`,
  },
];
export default function Gallery1() {
  const [activeLightBox, setActiveLightBox] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  return (
    <>
      <div className="tourSingleGrid -type-1 mt-30">
        <div className="tourSingleGrid__grid mobile-css-slider-2">
          <img src="/img/tourSingle/TripDetails-1.jpg" alt="image" />
          <img src="/img/tourSingle/TripDetails-2.jpg" alt="image" />
          <img src="/img/tourSingle/TripDetails-3.jpg" alt="image" />
          <img src="/img/tourSingle/TripDetails-4.jpg" alt="image" />
        </div>

        <div className="tourSingleGrid__button">
          <div
            style={{ cursor: "pointer" }}
            className="js-gallery"
            data-gallery="gallery1"
          >
            <span
              onClick={() => setActiveLightBox(true)}
              className="button -accent-1 py-10 px-20 rounded-200 bg-dark-1 lh-16 text-white"
            >
              See all photos
            </span>
          </div>
          <a
            href="/img/tourSingle/1/2.png"
            className="js-gallery"
            data-gallery="gallery1"
          ></a>
          <a
            href="/img/tourSingle/1/3.png"
            className="js-gallery"
            data-gallery="gallery1"
          ></a>
          <a
            href="/img/tourSingle/1/4.png"
            className="js-gallery"
            data-gallery="gallery1"
          ></a>
        </div>
      </div>
      <ImageLightBox
        images={images}
        activeLightBox={activeLightBox}
        setActiveLightBox={setActiveLightBox}
        currentSlideIndex={currentSlideIndex}
        setCurrentSlideIndex={setCurrentSlideIndex}
      />
    </>
  );
}
