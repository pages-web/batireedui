import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "12px",
          fontWeight: "bold",
          lineHeight: "1.5",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <span style={{ marginRight: "8px" }}>АРВАН</span>
        <span style={{ marginRight: "8px" }}>ХОЁР</span>
        <span style={{ marginRight: "8px" }}>ЖИЛИЙН</span>
        <span style={{ marginRight: "8px" }}>БАРИМАЛ</span>
        <span style={{ marginRight: "8px" }}>ХАА</span>
        <span style={{ marginRight: "8px" }}>БУЙ</span>
        <span style={{ marginRight: "8px" }}>ВЭ?</span>
        <span style={{ marginRight: "8px" }}>Ийм</span>
        <span style={{ marginRight: "8px" }}>хөөрхөн</span>
        <span style={{ marginRight: "8px" }}>баримал</span>
        <span style={{ marginRight: "8px" }}>Улаанбаатар</span>
        <span style={{ marginRight: "8px" }}>хотын</span>
        <span style={{ marginRight: "8px" }}>яг</span>
        <span style={{ marginRight: "8px" }}>хаана</span>
        <span style={{ marginRight: "8px" }}>байдаг</span>
        <span style={{ marginRight: "8px" }}>вэ?</span>
        <span style={{ marginRight: "8px" }}>Таасан</span>
        <span style={{ marginRight: "8px" }}>хүнийг</span>
        <span style={{ marginRight: "8px" }}>таван</span>
        <span style={{ marginRight: "8px" }}>номоор</span>
        <span>шагнана.</span>
      </h1>

      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={234}
            src="/images/luu.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>Луу</p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/luu8.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>Гахай</p>
        <p>
          <Image
            width={240}
            height={264}
            src="/images/luu1.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 240 }}
          />
        </p>
        <p>Морь</p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/luu7.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>Нохой</p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/luu6.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>Бар</p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/luu2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>Бич</p>
        <p>
          <Image
            width={240}
            height={264}
            src="/images/luu5.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 240 }}
          />
        </p>
        <p>Тахиа</p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/luu3.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>Хонь</p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/luu4.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>Могой</p>
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
            id="dsq-app682"
            name="dsq-app682"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F180%2F123&t_d=%D0%90%D0%A0%D0%92%D0%90%D0%9D%20%D0%A5%D0%9E%D0%81%D0%A0%20%D0%96%D0%98%D0%9B%D0%98%D0%99%D0%9D%20%D0%91%D0%90%D0%A0%D0%98%D0%9C%D0%90%D0%9B%20%D0%A5%D0%90%D0%90%20%D0%91%D0%A3%D0%99%20%D0%92%D0%AD%3F%20%D0%98%D0%B9%D0%BC%20%D1%85%D3%A9%D3%A9%D1%80%D1%85%D3%A9%D0%BD%20%D0%B1%D0%B0%D1%80%D0%B8%D0%BC%D0%B0%D0%BB%20%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80%20%D1%85%D0%BE%D1%82%D1%8B%D0%BD%20%D1%8F%D0%B3%20%D1%85%D0%B0%D0%B0%D0%BD%D0%B0%20%D0%B1%D0%B0%D0%B9%D0%B4%D0%B0%D0%B3%20%D0%B2%D1%8D%3F%20%D0%A2%D0%B0%D0%B0%D1%81%D0%B0%D0%BD%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%D0%B3%20%D1%82%D0%B0%D0%B2%D0%B0%D0%BD%20%D0%BD%D0%BE%D0%BC%D0%BE%D0%BE%D1%80%20%D1%88%D0%B0%D0%B3%D0%BD%D0%B0%D0%BD%D0%B0.&t_t=%D0%90%D0%A0%D0%92%D0%90%D0%9D%20%D0%A5%D0%9E%D0%81%D0%A0%20%D0%96%D0%98%D0%9B%D0%98%D0%99%D0%9D%20%D0%91%D0%90%D0%A0%D0%98%D0%9C%D0%90%D0%9B%20%D0%A5%D0%90%D0%90%20%D0%91%D0%A3%D0%99%20%D0%92%D0%AD%3F%20%D0%98%D0%B9%D0%BC%20%D1%85%D3%A9%D3%A9%D1%80%D1%85%D3%A9%D0%BD%20%D0%B1%D0%B0%D1%80%D0%B8%D0%BC%D0%B0%D0%BB%20%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80%20%D1%85%D0%BE%D1%82%D1%8B%D0%BD%20%D1%8F%D0%B3%20%D1%85%D0%B0%D0%B0%D0%BD%D0%B0%20%D0%B1%D0%B0%D0%B9%D0%B4%D0%B0%D0%B3%20%D0%B2%D1%8D%3F%20%D0%A2%D0%B0%D0%B0%D1%81%D0%B0%D0%BD%20%D1%85%D2%AF%D0%BD%D0%B8%D0%B9%D0%B3%20%D1%82%D0%B0%D0%B2%D0%B0%D0%BD%20%D0%BD%D0%BE%D0%BC%D0%BE%D0%BE%D1%80%20%D1%88%D0%B0%D0%B3%D0%BD%D0%B0%D0%BD%D0%B0.&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
