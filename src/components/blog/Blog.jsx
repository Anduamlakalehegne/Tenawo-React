import React from "react";
import photo from "../../assets/img/Header3.jpg";

export default function Blog() {
  return (
    <section id="ourblogs" className="bg-light">
      <div className="container">
        <h1 className="my-5">Latest Posts</h1>
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2 wow fadeInRight">
            {/* Blog Content */}
            <div className="blog-text">
              <h2>Important Medical Info</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in velit dolor. Vivamus gravida, neque nec interdum cursus, erat
                ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="medical/blog-left.html"
                className="btn btn-rounded btn-large btn-drk-blue fadeInDown-slide animated text-uppercase"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-md-6">
            {/* Blog Image */}
            <div className="img-hvr">
              <div className="date">
                <h5 className="m-0">23</h5>
                <h5 className="m-0">Nov</h5>
                <h5 className="m-0">2019</h5>
              </div>
            </div>
            <div id="blog-slider" className="owl-carousel">
              <div className="item blog-image wow hover-effect fadeInLeft">
                <img src={photo} alt="image" />
              </div>
              <div className="item blog-image wow hover-effect fadeInLeft">
                <img src={photo} alt="image" />
              </div>
              <div className="item blog-image wow hover-effect fadeInLeft">
                <img src={photo} alt="image" />
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 wow fadeInLeft">
            {/* Blog Content */}
            <div className="blog-text">
              <h2>Doctors Guidelines</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in velit dolor. Vivamus gravida, neque nec interdum cursus, erat
                ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a
                href="medical/blog-listing.html"
                className="btn btn-rounded btn-large btn-drk-blue fadeInDown-slide animated text-uppercase"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-hvr">
              <div className="date-2">
                <h5 className="m-0">23</h5>
                <h5 className="m-0">Nov</h5>
                <h5 className="m-0">2019</h5>
              </div>
            </div>

            {/* Blog Image */}
            <div id="blog-slider-1" className="owl-carousel">
              <div className="item blog-image2 text-right hover-effect wow fadeInRight">
                <img src={photo} alt="image" />
              </div>
              <div className="item blog-image2 text-right hover-effect wow fadeInRight">
                <img src={photo} alt="image" />
              </div>
              <div className="item blog-image2 text-right hover-effect wow fadeInRight">
                <img src={photo} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
