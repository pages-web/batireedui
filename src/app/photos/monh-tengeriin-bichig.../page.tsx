import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Roboto, sans-serif",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ marginRight: "8px" }}>&quot;МӨНХ</span>
        <span style={{ marginRight: "8px" }}>ТЭНГЭРИЙН</span>
        <span style={{ marginRight: "8px" }}>БИЧИГ&quot;</span>
        <span style={{ marginRight: "8px" }}>ҮЗЭСГЭЛЭН</span>
        <span>НЭЭГДЛЭЭ</span>
      </h1>

      <div className="post_content_full">
        <p>&nbsp;</p>
        <p>
          <Image
            width={400}
            height={300}
            src="/images/forbidden/IMG_8434.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <p>
          <span>Нээлтийг&nbsp; МУ-ын Төрийн шагналт Д.Сосорбарам хөтөллөө</span>
        </p>
        <p>
          <Image
            width={400}
            height={300}
            src="/images/forbidden/81.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <div>
          Үзэсгэлэнгийн туузыг ЕТГ-ын дарга Д.Баттулга, ШУА-ийн Ерөнхийлөгч
          Б.Энхтөвшин,&nbsp;
        </div>
        <div>академич Д.Төмөртогоо, уран бичээч Д.Батбаяр нар хайчиллаа.</div>
        <p>
          <Image
            width={400}
            height={300}
            src="/images/forbidden/82.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <p>
          <span>
            МУТөрийн шагналт, гавьяат багш&nbsp; МУИС-ийн профессор Ш.Чоймаа үг
            хэллээ
          </span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.03.06</div>
      <div className="clear" />

      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app6058"
            name="dsq-app6058"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F165%2F123&t_d=%22%D0%9C%D3%A8%D0%9D%D0%A5%20%D0%A2%D0%AD%D0%9D%D0%93%D0%AD%D0%A0%D0%98%D0%99%D0%9D%20%D0%91%D0%98%D0%A7%D0%98%D0%93%22%20%D2%AE%D0%97%D0%AD%D0%A1%D0%93%D0%AD%D0%9B%D0%AD%D0%9D%20%D0%9D%D0%AD%D0%AD%D0%93%D0%94%D0%9B%D0%AD%D0%AD&t_t=%22%D0%9C%D3%A8%D0%9D%D0%A5%20%D0%A2%D0%AD%D0%9D%D0%93%D0%AD%D0%A0%D0%98%D0%99%D0%9D%20%D0%91%D0%98%D0%A7%D0%98%D0%93%22%20%D2%AE%D0%97%D0%AD%D0%A1%D0%93%D0%AD%D0%9B%D0%AD%D0%9D%20%D0%9D%D0%AD%D0%AD%D0%93%D0%94%D0%9B%D0%AD%D0%AD&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
