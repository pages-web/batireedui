import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
        ВЕНА ХОТ
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={250}
            height={373}
            src="/images/IMG_2198.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <Image
            width={250}
            height={373}
            src="/images/IMG_2197.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>
            Элхи &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span>Австрийн Шинжлэх Ухааны Академи</span>
          </span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.03.29</div>
      <div className="clear" />
      {/* Share Buttons */}

      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app658"
            name="dsq-app658"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F196%2F123&t_d=%D0%92%D0%95%D0%9D%D0%90%20%D0%A5%D0%9E%D0%A2%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%92%D0%95%D0%9D%D0%90%20%D0%A5%D0%9E%D0%A2%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
