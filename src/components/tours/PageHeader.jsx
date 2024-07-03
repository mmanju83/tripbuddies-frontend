import React from "react";

export default function PageHeader() {
  return (
    <section className="pageHeader -type-3">
      <div className="container">
        <div className="row justify-between">
          <div className="col-auto">
            <div className="breadcrumbs">
              <span className="breadcrumbs__item">
                <a href="#">Home</a>
              </span>
              <span>{">"}</span>
              <span className="breadcrumbs__item">
                <a href="#">Tours</a>
              </span>
              <span>{">"}</span>
              <span className="breadcrumbs__item">
                <a href="#">India</a>
              </span>
            </div>
          </div>

          
        </div>

        <div className="row pt-30">
          <div className="col-auto">
            <h1 className="pageHeader__title">
              Trending Destinations Across India
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
