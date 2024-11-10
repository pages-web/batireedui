import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
        ГӨТТИНГЭН ХОТ
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            src="/images/g2.jpg"
            width={250}
            height={373}
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>&nbsp;</p>
        <p>
          <Image
            src="/images/g1.jpg"
            width={350}
            height={234}
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.03.24</div>
      <div className="clear" />
      {/* Share Buttons */}

      <div className="disqus"></div>
    </div>
  );
}
