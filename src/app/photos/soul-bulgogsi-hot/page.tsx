import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1 className="text-3xl font-bold text-gray-900">
        <span style={{ marginRight: "4px" }} className="inline-block mr-4">
          СӨҮЛ
        </span>
        <span style={{ marginRight: "4px" }} className="inline-block mr-4">
          БҮЛГОГСИ
        </span>
        <span style={{ marginRight: "4px" }} className="inline-block">
          ХОТ
        </span>
      </h1>

      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={234}
            src="/images/s2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Гол сүмийн үүдний бөмбөр</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/s1.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Бүлгогсогийн гол сүм</span>
        </p>
        <p>
          <Image
            width={250}
            height={273}
            src="/images/s4.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>Хааны ордоны сүүдрэвч</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/s3.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>&nbsp;</p>
        <p>
          <Image
            width={250}
            height={273}
            src="/images/s5.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <div>
          Энэ дотор орой дээрээ эрдэнийн очиртой нэг бурхан бий.&nbsp;Энэ
          бурханы очирт өглөөний нар хамгийн түрүүн тусч тэндээс Солонгосын зүг
          бүрт гэрэл гэгээ цацардаг гэж Солонгосчууд үздэг юм билээ
        </div>
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
            id="dsq-app672"
            name="dsq-app672"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F187%2F123&t_d=%D0%A1%D3%A8%D2%AE%D0%9B%20%D0%91%D2%AE%D0%9B%D0%93%D0%9E%D0%93%D0%A1%D0%98%20%D0%A5%D0%9E%D0%A2%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%A1%D3%A8%D2%AE%D0%9B%20%D0%91%D2%AE%D0%9B%D0%93%D0%9E%D0%93%D0%A1%D0%98%20%D0%A5%D0%9E%D0%A2%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
