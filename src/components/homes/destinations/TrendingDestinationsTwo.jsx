import { destinationsTwo } from "@/data/destinations";

import { Link } from "react-router-dom";
import React from "react";

export default function TrendingDestinationsTwo() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24"
            >
              Trending Destinations
            </h2>
          </div>

          <div className="col-auto">
            <Link
              to={"/tour-list-1"}
              data-aos="fade-left"
              data-aos-delay=""
              className="buttonArrow d-flex items-center"
            >
              <span>See all</span>
              <i className="icon-arrow-top-right text-16 ml-10"></i>
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row y-gap-30 justify-between pt-40 sm:pt-20"
        >
          {destinationsTwo.map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <Link
                to={`/tour-list-1/${elm.name}`}
                className="featureCard -type-4 -hover-image-scale"
              >
                <div className="featureCard__image ratio ratio-3:4 -hover-image-scale__image rounded-12">
                  <img src={elm.imgSrc} alt="image" className="img-ratio" />
                </div>

                <div className="featureCard__content text-center">
                  <h4 className="text-22 fw-700 text-white">{elm.name}</h4>
                  <div className="text-14 lh-14 text-white"> 
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
