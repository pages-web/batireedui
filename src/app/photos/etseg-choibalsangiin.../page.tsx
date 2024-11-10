import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div id="content">
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          ЭЦЭГ
        </span>
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          ЧОЙБАЛСАНГИЙН
        </span>
        <span style={{ display: "inline-block", marginRight: "8px" }}>ЭНЭ</span>
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          ХӨШӨӨ
        </span>
        <span style={{ display: "inline-block", marginRight: "8px" }}>ХАА</span>
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          БАЙДАГ
        </span>
        <span style={{ display: "inline-block" }}>ВЭ?</span>
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={300}
            height={400}
            src="/images/photo/choibalsan.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <span>Хорлоогийн Чойбалсан</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.06.16</div>
      <div className="clear" />
    </div>
  );
}
