import React from "react";
import Image from "next/image";

export default function Page() {
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
          НУТГИЙН
        </span>
        <span style={{ display: "inline-block" }}>БӨХ</span>
      </h1>
      <div className="post_content_full">
        <p />
        <div
          id="content_gallery0"
          className="content_galleria"
          style={{ height: 500 }}
        >
          <div
            className="galleria-container notouch"
            style={{ width: 635, height: 500 }}
          >
            <div className="galleria-stage">
              <div
                className="galleria-images"
                style={{
                  position: "relative",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  className="galleria-image"
                  style={{
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0,
                    transition: "none",
                    zIndex: 0,
                  }}
                >
                  <div
                    className="galleria-layer"
                    style={{ position: "absolute", inset: 0, zIndex: 2 }}
                  />
                </div>
                <div
                  className="galleria-image"
                  style={{
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 1,
                    width: 635,
                    height: 470,
                    transition: "none",
                    zIndex: 1,
                  }}
                >
                  <div
                    className="galleria-layer"
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 2,
                      display: "none",
                      width: 703,
                      height: 470,
                    }}
                  />
                  <Image
                    alt=""
                    src="/media/batireedui/content/IMG_2985.jpg"
                    width={703}
                    style={{
                      display: "block",
                      opacity: 1,
                      minWidth: 0,
                      minHeight: 0,
                      maxWidth: "none",
                      maxHeight: "none",
                      width: 703,
                      height: 470,
                      position: "absolute",
                      top: 0,
                      left: "-34px",
                    }}
                    height={470}
                  />
                </div>
              </div>
              <div className="galleria-loader" style={{ display: "none" }} />
              <div className="galleria-image-nav">
                <div
                  className="galleria-image-nav-right"
                  style={{ right: "-36px", transition: "none" }}
                />
                <div
                  className="galleria-image-nav-left"
                  style={{ left: "-36px", transition: "none" }}
                />
              </div>
              <div className="galleria-progress" style={{ width: 0 }} />
            </div>
            <div
              className="galleria-thumbnails-container"
              style={{ height: 470, width: 635, top: 500 }}
            >
              <div className="galleria-thumb-nav-left" />
              <div
                className="galleria-thumbnails-list"
                style={{ overflow: "hidden", position: "relative" }}
              >
                <div
                  className="galleria-thumbnails"
                  style={{ overflow: "hidden", position: "relative" }}
                >
                  <div
                    className="galleria-image active"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      width: 80,
                      height: 45,
                    }}
                  ></div>
                  <div
                    className="galleria-image"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      width: 80,
                      height: 45,
                    }}
                  ></div>
                  <div
                    className="galleria-image"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      width: 80,
                      height: 45,
                    }}
                  ></div>
                  <div
                    className="galleria-image"
                    style={{
                      overflow: "hidden",
                      position: "relative",
                      width: 80,
                      height: 45,
                    }}
                  ></div>
                </div>
              </div>
              <div className="galleria-thumb-nav-right" />
            </div>
          </div>
        </div>
        <p />
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.11.06</div>
      <div className="clear" />
    </div>
  );
}
