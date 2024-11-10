import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          Drop-dead
        </span>
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          sexy
        </span>
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          audio
        </span>
        <span style={{ display: "inline-block" }}>gears</span>
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={300}
            height={270}
            src="/images/photo/TerraII_270x371.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <span>The Everything But The Box TerraII speaker</span>
        </p>
        <p>&nbsp;</p>
        <p>
          <Image
            width={300}
            height={270}
            src="/images/photo/Book_of_Music_Teti_Speaker.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <span>
            The Book of Music Teti Extreme speakers. Dig that twisted sound!
          </span>
        </p>
        <p>
          <Image
            width={300}
            height={270}
            src="/images/photo/Sputnik_12S_610x407.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <span>
            The Everything But The Box Sputnik 12S subwoofer, in chains!
          </span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.01.02</div>
      <div className="clear" />
    </div>
  );
}
