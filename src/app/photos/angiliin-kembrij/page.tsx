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
          display: "flex",
        }}
      >
        <span style={{ marginRight: "10px" }}>АНГЛИЙН</span>
        <span style={{ marginRight: "10px" }}>КЕМБРИЖ</span>
        <span>ХОТ</span>
      </h1>

      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={234}
            src="/images/k4.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Завин дээрээс</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/k6.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <div>Кемийн гүүрээр гараад...</div>
        <p>
          <br className="Apple-interchange-newline" />
          <br />
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/k5.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Оюутнууд жуулчдад зориулан ийм ажил хийж мөнгө олдог</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/k3.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Гоё байгаа биз?</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/k2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Пантан</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/k1.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Кингс коллеж, кэм гол</span>
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
            id="dsq-app678"
            name="dsq-app678"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F184%2F123&t_d=%D0%90%D0%9D%D0%93%D0%9B%D0%98%D0%99%D0%9D%20%D0%9A%D0%95%D0%9C%D0%91%D0%A0%D0%98%D0%96%20%D0%A5%D0%9E%D0%A2%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%90%D0%9D%D0%93%D0%9B%D0%98%D0%99%D0%9D%20%D0%9A%D0%95%D0%9C%D0%91%D0%A0%D0%98%D0%96%20%D0%A5%D0%9E%D0%A2%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
