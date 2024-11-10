"use client";
import React from "react";
import Slider from "react-slick"; // Import React Slick
import Image from "next/image"; // Use Next.js Image component for optimized images

export default function Page() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div id="content">
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          HARVARD
        </span>
      </h1>
      <div className="post_content_full">
        <div className="content_galleria" style={{ height: 500 }}>
          <Slider {...settings}>
            {/* Replace these image sources with your actual image paths */}
            <div className="galleria-image">
              <Image
                src="/images/photo/IMG_6966"
                width={635}
                height={500}
                alt="Image 1"
                style={{
                  objectFit: "cover",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="galleria-image">
              <Image
                src="/images/photo/IMG_3058"
                width={635}
                height={500}
                alt="Image 2"
                style={{
                  objectFit: "cover",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="galleria-image">
              <Image
                src="/images/photo/IMG_5811"
                width={635}
                height={500}
                alt="Image 3"
                style={{
                  objectFit: "cover",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            {/* Add more images as needed */}
          </Slider>
        </div>
        <p>Миний зургийн цомог</p>
      </div>
      <div className="post_info_full left">
        Ангилал: <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.11.13</div>
      <div className="clear" />
      <div className="disqus"></div>
    </div>
  );
}
