import React from "react";
import { useState } from "react";
import FooterFour from "@/components/layout/footers/FooterFour";
import Header3 from "@/components/layout/header/Header3";
import { Link } from "react-router-dom";

const metadata = {
  title: "Trip Planner |  Machathon | Valtech",
  description: "Trip Planner for all",
};

export default function Profile() {

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("/img/Trips-1.jpg");

  const handleImageChange = (event, func) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        func(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>

      <main>
        <Header3 />
        <section className="pageHeader -type-2 -secondary">
          <div className="pageHeader__bg">
            <img src="/img/hero.jpg" alt="image" />
          </div>
          <div className="container">
            <div className="row justify-center">
              <div className="col-12">
                <div className="pageHeader__content">
                  <h1 className="pageHeader__title">Find My Companion</h1>
                  <p className="pageHeader__text">
                    A simple way to discover a new traveling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-60 pb-80">
          <div className="container">
            <div className="row y-gap-30">
              <div className="col-md-2"> </div>
              <div className="col-md-8">
                <div className="pageHeader__search">
                  <div className="">
                    <div className="contactForm row y-gap-30">
                      <div className="col-md-6">
                        <div className="form-input ">
                          <input type="text" required />
                          <label className="lh-1 text-16 text-light-1">Name</label>
                        </div>
                      </div>

                      
                      <div className="col-md-6">
                        <div className="form-input ">
                          <input type="text" required />
                          <label className="lh-1 text-16 text-light-1">
                            Age
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-input ">
                          <input type="text" required />
                          <label className="lh-1 text-16 text-light-1">Phone</label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-input ">
                          <input type="text" required />
                          <label className="lh-1 text-16 text-light-1">Your likes</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <label className="text-16 lh-1 fw-400 text-dark-1 pb-15">
                            Gender
                          </label>
                          <div className="col-2">
                        <div className="form-radio d-flex items-center ">
                          <div className="radio">
                            <input type="radio" name="name" />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                          <div className="text-14 lh-1 ml-10">Male</div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="form-radio d-flex items-center ">
                          <div className="radio">
                            <input type="radio" name="name" />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                          <div className="text-14 lh-1 ml-10">Female</div>
                        </div>
                      </div>

                        </div>
                      </div>
                     
                      <div className="col-md-6">
                        <div className="row">
                          <label className="text-16 lh-1 fw-400 text-dark-1 pb-15">
                          Food preference
                          </label>
                          <div className="col-2">
                        <div className="form-radio d-flex items-center ">
                          <div className="radio">
                            <input type="radio" name="name" />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                          <div className="text-14 lh-1 ml-10">Veg</div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="form-radio d-flex items-center ">
                          <div className="radio">
                            <input type="radio" name="name" />
                            <div className="radio__mark">
                              <div className="radio__icon"></div>
                            </div>
                          </div>
                          <div className="text-14 lh-1 ml-10">NonVeg</div>
                        </div>
                      </div>

                        </div>
                      </div>



                     



                      <div className="col-12">
                        <h4 className="text-18 fw-500 mb-20">Your photo</h4>
                        <div className="row x-gap-20 y-gap">
                          {image1 ? (
                            <div className="col-auto">
                              <div className="relative">
                                <img
                                  src={image1}
                                  alt="image"
                                  className="size-200 rounded-12 object-cover"
                                />
                                <button
                                  onClick={() => {
                                    setImage1("");
                                  }}
                                  className="absoluteIcon1 button -dark-1"
                                >
                                  <i className="icon-delete text-18"></i>
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="col-auto">
                              <label
                                htmlFor="imageInp1"
                                className="size-200 rounded-12 border-dash-1 bg-accent-1-05 flex-center flex-column"
                              >
                                <img alt="image" src={"/img/upload.svg"} />

                                <div className="text-16 fw-500 text-accent-1 mt-10">
                                  Upload Images
                                </div>
                              </label>
                              <input
                                onChange={(e) => handleImageChange(e, setImage1)}
                                accept="image/*"
                                id="imageInp1"
                                type="file"
                                style={{ display: "none" }}
                              />
                            </div>
                          )}
                          {image2 ? (
                            <div className="col-auto">
                              <div className="relative">
                                <img
                                  src={image2}
                                  alt="image"
                                  className="size-200 rounded-12 object-cover"
                                />
                                <button
                                  onClick={() => {
                                    setImage2("");
                                  }}
                                  className="absoluteIcon1 button -dark-1"
                                >
                                  <i className="icon-delete text-18"></i>
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="col-auto">
                              <label
                                htmlFor="imageInp2"
                                className="size-200 rounded-12 border-dash-1 bg-accent-1-05 flex-center flex-column"
                              >
                                <img alt="image" src={"/img/upload.svg"} />

                                <div className="text-16 fw-500 text-accent-1 mt-10">
                                  Upload Images
                                </div>
                              </label>
                              <input
                                onChange={(e) => handleImageChange(e, setImage2)}
                                accept="image/*"
                                id="imageInp2"
                                type="file"
                                style={{ display: "none" }}
                              />
                            </div>
                          )}
                        </div> 
                        <div className="text-14 mt-20">
                          PNG or JPG no bigger than 600px wide and tall.
                        </div> 
                        <button className="button -md -dark-1 bg-accent-1 text-white mt-30">
                          <Link to={"/companion"}>  Submit</Link>
                          <i className="icon-arrow-top-right text-16 ml-10"></i>
                        </button>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              <div className="col-md-2"> </div>




            </div>
          </div>
        </section>



        <FooterFour />
      </main>
    </>
  );
}
