import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1 className="text-3xl font-bold text-gray-900">
        <span style={{ marginRight: "4px" }} className="mr-4">
          ВАШИНГТОН
        </span>
        <span style={{ marginRight: "4px" }} className="mr-4">
          ДИ
        </span>
        <span style={{ marginRight: "4px" }}>СИ</span>
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={234}
            src="/images/b2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <strong>Конгресс</strong>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/b1.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <strong>Ди си</strong>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/b4.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <strong>Цагаан ордон</strong>
        </p>
        <p>
          <Image
            width={250}
            height={274}
            src="/images/b3.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <strong>Ди си-гийн харандаа</strong>
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
            id="dsq-app674"
            name="dsq-app674"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F186%2F123&t_d=%D0%92%D0%90%D0%A8%D0%98%D0%9D%D0%93%D0%A2%D0%9E%D0%9D%20%D0%94%D0%98%20%D0%A1%D0%98%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%92%D0%90%D0%A8%D0%98%D0%9D%D0%93%D0%A2%D0%9E%D0%9D%20%D0%94%D0%98%20%D0%A1%D0%98%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
