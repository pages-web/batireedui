import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
        Унгарын Будапешт хот
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={300}
            height={200}
            src="/images/ungarbuda2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <div>Өтвош Лорандын нэрэмжит Будапештийн&nbsp;</div>
        <div>Их Сургуулийн захиргааны төв байр</div>
        <p>
          <Image
            width={300}
            height={200}
            src="/images/ungarbuda.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <span>Будапештийн гудамжинд&nbsp;</span>
        </p>
        <p>
          <Image
            width={200}
            height={300}
            src="/images/ungarbuda3.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 200 }}
          />
        </p>
        <p>
          <span>Хөшөө</span>
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
