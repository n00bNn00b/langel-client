import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-screen mx-auto mt-20 border-r-2">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          style={{ height: "600px" }}
          src="https://c1.wallpaperflare.com/preview/313/315/582/ball-brass-butterfly-fittings.jpg"
          className="w-full"
          alt="banner"
        />{" "}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          style={{ height: "600px" }}
          src="https://m.media-amazon.com/images/I/61iXCW1JA-L._AC_SL1500_.jpg"
          className="w-full"
          alt="banner"
        />{" "}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          style={{ height: "600px" }}
          src="https://www.micronsteel.com/wp-content/uploads/image/forged-fittings/asme-b16-11-socket-weld-fittings.jpg"
          className="w-full"
          alt="banner"
        />{" "}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          style={{ height: "600px" }}
          src="https://m.media-amazon.com/images/I/61iXCW1JA-L._AC_SL1500_.jpg"
          className="w-full"
          alt="banner"
        />{" "}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
