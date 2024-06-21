import React from "react";

export default function Hero1({ blog }) {
  return (
    <section className="hero -type-1 -min-2">
      <div className="hero__bg">
        <img src="/img/hero.jpg" alt="image" />
        <img
          style={{ height: "auto" }}
          src="/img/shape.svg"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-12">
            <div className="hero__content">
              <h1 className="hero__title">
                {blog?.title ? blog?.title : "Your guide to everywhere"}
              </h1>

              <p className="hero__text">
                {blog?.desc
                  ? blog?.desc
                  : `Find inspiration, guides and stories for wherever you're going
                Select a destination`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
