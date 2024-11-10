import React from "react";
import Image from "next/image";

export default function page() {
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
          Германы
        </span>
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          Көлн
        </span>
        <span style={{ display: "inline-block" }}>хот</span>
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={240}
            src="/images/photo/kolntrainstation.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Көлн хотын алдарт сүм</span>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/photo/koln5.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>Көлн хотод сайхан зун болж байна билээ</span>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/photo/kolntrainstation2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Көлний галт тэрэгний буудал</span>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/photo/koln4.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>Kөлн хотын залуучууд</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.05.21</div>
      <div className="clear" />
    </div>
  );
}
