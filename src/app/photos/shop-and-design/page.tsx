"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: "/images/photo/IMG_6968.jpg", alt: "Image 1" },
  { src: "/images/photo/Iphonefotos2310.jpg", alt: "Image 2" },
  { src: "/images/photo/IMG_7945.jpg", alt: "Image 3" },
  { src: "/images/photo/IMG_7028.jpg", alt: "Image 4" },
  { src: "/images/photo/IMG_7943.jpg", alt: "Image 5" },
  { src: "/images/photo/IMG_7948.jpg", alt: "Image 6" },
  { src: "/images/photo/IMG_7954.jpg", alt: "Image 7" },
  { src: "/images/photo/IMG_7950.jpg", alt: "Image 8" },
];

export default function Page() {
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
          display: "flex",
          alignItems: "center",
          fontFamily: "Roboto, sans-serif",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ marginRight: "8px" }}>SHOP</span>
        <span style={{ marginRight: "8px" }}>AND</span>
        <span>DESIGN</span>
      </h1>
      <div className="slider-container" style={{ height: 500 }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slider-item">
              <Image
                src={image.src}
                width={627}
                height={470}
                alt={image.alt}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <p>Миний зургийн цомог</p>
      <div>
        Ангилал: <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.11.30</div>
      <div className="clear" />
    </div>
  );
}
