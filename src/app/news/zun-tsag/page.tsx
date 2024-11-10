"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          fontSize: "24px",
          lineHeight: "1.5",
          display: "flex",
          gap: "5px",
          fontWeight: "bold",
        }}
      >
        <span>ЗУН</span>
        <span>ЦАГ</span>
      </h1>
      <div className="post_content_full">
        <div
          id="content_gallery0"
          className="content_galleria"
          style={{ height: 500 }}
        >
          <Slider {...settings} className="w-[100%] h-[100%]">
            <div>
              <Image
                src="/images/zaisan.jpg"
                alt="Image 1"
                width={630}
                height={470}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <Image
                src="/images/IphoneMarchJuly2012476.jpg"
                alt="Image 2"
                width={630}
                height={470}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </Slider>
        </div>
        <p>Өвөр зайсан МУИС-ийн кампус</p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,<a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.07.09</div>
      <div className="clear" />
    </div>
  );
};

export default Page;
