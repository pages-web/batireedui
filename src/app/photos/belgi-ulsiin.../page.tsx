import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
        БЕЛГИ УЛСЫН БРҮССЭЛ ХОТ
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={350}
            src="/images/brusel1.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Брүссэл Норд</span>
        </p>
        <p>
          <Image
            width={350}
            height={350}
            src="/images/brusel2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Брүссэлийн цамхаг</span>
        </p>
        <p>
          <Image
            width={350}
            height={350}
            src="/images/bruselhoshoo.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Брүссэл Норд дээрх хөшөө дурсгал</span>
        </p>
        <p>
          <Image
            width={350}
            height={350}
            src="/images/brusel3.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Хотын төв</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.03.28</div>
      <div className="clear" />
      {/* Share Buttons */}

      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app660"
            name="dsq-app660"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F194%2F123&t_d=%D0%91%D0%95%D0%9B%D0%93%D0%98%20%D0%A3%D0%9B%D0%A1%D0%AB%D0%9D%20%D0%91%D0%A0%D2%AE%D0%A1%D0%A1%D0%AD%D0%9B%20%D0%A5%D0%9E%D0%A2&t_t=%D0%91%D0%95%D0%9B%D0%93%D0%98%20%D0%A3%D0%9B%D0%A1%D0%AB%D0%9D%20%D0%91%D0%A0%D2%AE%D0%A1%D0%A1%D0%AD%D0%9B%20%D0%A5%D0%9E%D0%A2&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
            style={{
              width: "1px !important",
              minWidth: "100% !important",
              border: "none !important",
              overflow: "hidden !important",
              height: "75px !important",
            }}
            // horizontalscrolling="no"
            // verticalscrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
