import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1>МУУ ХҮН ИДСЭНЭЭ ГЭЖ</h1>
      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={234}
            src="/images/hool1.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Гахайн шийр</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/3.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Парис хотын нийтлэг хоол</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/hool2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Австрийн үндэсний хоол</span>
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
            id="dsq-app662"
            name="dsq-app662"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F191%2F123&t_d=%D0%9C%D0%A3%D0%A3%20%D0%A5%D2%AE%D0%9D%20%D0%98%D0%94%D0%A1%D0%AD%D0%9D%D0%AD%D0%AD%20%D0%93%D0%AD%D0%96%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%9C%D0%A3%D0%A3%20%D0%A5%D2%AE%D0%9D%20%D0%98%D0%94%D0%A1%D0%AD%D0%9D%D0%AD%D0%AD%20%D0%93%D0%AD%D0%96%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
