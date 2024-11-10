import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">
        Эр хүний чимэг хурдан морь, хурц хутга гэж байлаа
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={234}
            src="/images/t2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Wolkswagon Jeep Munich</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/t1.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Нүдэн бенз, Berlin</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/t3.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>BMW Jeep, Munich</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/t5.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Mini SMART benz, PARIS</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/t6.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>I like this!</span>
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
            id="dsq-app664"
            name="dsq-app664"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F190%2F123&t_d=%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%20%D1%85%D1%83%D1%80%D0%B4%D0%B0%D0%BD%20%D0%BC%D0%BE%D1%80%D1%8C%2C%20%D1%85%D1%83%D1%80%D1%86%20%D1%85%D1%83%D1%82%D0%B3%D0%B0%20%D0%B3%D1%8D%D0%B6%20%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%B0&t_t=%D0%AD%D1%80%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%20%D1%87%D0%B8%D0%BC%D1%8D%D0%B3%20%D1%85%D1%83%D1%80%D0%B4%D0%B0%D0%BD%20%D0%BC%D0%BE%D1%80%D1%8C%2C%20%D1%85%D1%83%D1%80%D1%86%20%D1%85%D1%83%D1%82%D0%B3%D0%B0%20%D0%B3%D1%8D%D0%B6%20%D0%B1%D0%B0%D0%B9%D0%BB%D0%B0%D0%B0&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
