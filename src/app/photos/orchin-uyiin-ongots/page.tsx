import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1 className="text-2xl font-semibold text-gray-900 tracking-wide">
        ОРЧИН ҮЕИЙН ОНГОЦНЫ ЗАГВАРУУД
      </h1>
      <div className="post_content_full">
        <p>2025 он гэхэд нэг иймэрхүү юмаар нисээд байх юм биз дээ</p>
        <p>
          <Image
            width={640}
            alt=""
            height={466}
            src="/images/NASA-CONCEPT.jpg"
          />
        </p>
        <p>
          <span>Янзын эд байх нь дээ</span>
        </p>
        <p>
          <Image
            width={640}
            alt=""
            height={466}
            src="/images/NASA-CONCEPT3.jpg"
          />
        </p>
        <p>
          <span>За энэ нэг бас нэг сайхан эд байна</span>
        </p>
        <p>
          <Image
            width={640}
            alt=""
            height={466}
            src="/images/NASA-CONCEPT2.jpg"
          />
        </p>
        <p>Иргэний онгоц ийм байх юм байх даа</p>
        <p>Source: The Huffington Post, Yahoo.com</p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.04.03</div>
      <div className="clear" />
      {/* Share Buttons */}

      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app654"
            name="dsq-app654"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F238%2F123&t_d=%D0%9E%D0%A0%D0%A7%D0%98%D0%9D%20%D2%AE%D0%95%D0%98%D0%99%D0%9D%20%D0%9E%D0%9D%D0%93%D0%9E%D0%A6%D0%9D%D0%AB%20%D0%97%D0%90%D0%93%D0%92%D0%90%D0%A0%D0%A3%D0%A3%D0%94&t_t=%D0%9E%D0%A0%D0%A7%D0%98%D0%9D%20%D2%AE%D0%95%D0%98%D0%99%D0%9D%20%D0%9E%D0%9D%D0%93%D0%9E%D0%A6%D0%9D%D0%AB%20%D0%97%D0%90%D0%93%D0%92%D0%90%D0%A0%D0%A3%D0%A3%D0%94&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
