import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "1.5",
          gap: "10px",
        }}
      >
        <span style={{ marginRight: "4px" }} className="inline-block mr-4">
          ЯПОНЫ
        </span>
        <span style={{ marginRight: "4px" }} className="inline-block mr-4">
          КОБЭ
        </span>
        <span style={{ marginRight: "4px" }} className="inline-block">
          ХОТ
        </span>
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={250}
            height={273}
            src="/images/y2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <strong>Shiran</strong>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/y1.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <strong>Hotel</strong>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/y3.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <strong>Kobe Tower</strong>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/y4.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <strong>Sakura delgersen baidal</strong>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.03.24</div>
      <div className="clear" />
      {/* Share Buttons */}

      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app676"
            name="dsq-app676"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F185%2F123&t_d=%D0%AF%D0%9F%D0%9E%D0%9D%D0%AB%20%D0%9A%D0%9E%D0%91%D0%AD%20%D0%A5%D0%9E%D0%A2%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%AF%D0%9F%D0%9E%D0%9D%D0%AB%20%D0%9A%D0%9E%D0%91%D0%AD%20%D0%A5%D0%9E%D0%A2%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
