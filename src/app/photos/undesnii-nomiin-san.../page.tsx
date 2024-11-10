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
        <span style={{ marginRight: "8px" }}>ҮНДЭСНИЙ</span>
        <span style={{ marginRight: "8px" }}>НОМЫН</span>
        <span style={{ marginRight: "8px" }}>САН</span>
        <span style={{ marginRight: "8px" }}>90</span>
        <span style={{ marginRight: "8px" }}>ЖИЛИЙН</span>
        <span style={{ marginRight: "8px" }}>ОЙГОО</span>
        <span style={{ marginRight: "8px" }}>ТЭМДЭГЛЭЖ</span>
        <span>БАЙНА</span>
      </h1>

      <div className="post_content_full">
        <div className="separator">
          <a href="http://1.bp.blogspot.com/-P6qd4i0iprg/TsNjUQ8ZeHI/AAAAAAAACWo/vTSJwiqau-8/s1600/Image_8417.JPG">
            Өнөөдөр 2011 оны 11 сарын 16 ны 10:30 аас
          </a>
        </div>
        <div>
          Монгол Улсын Үндэсний номын сан нь монгол үндэстний бичгийн соёлыг
          хадгалагч,
        </div>
        <div>
          түгээн дэлгэрүүлэгч болох нь эрдэм шинжилгээний хурал нээгдлээ.
        </div>
        <div>c0 J.Bat-Ireedui, 2011</div>
        <div>
          <p>
            <Image
              width={400}
              height={300}
              src="/images/forbidden/87.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </p>
          <p>
            <span>Ойн чимэг</span>
          </p>
          <p>
            <Image
              width={400}
              height={300}
              src="/images/forbidden/86.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </p>
          <p>
            <span>Монгол бичгээр</span>
          </p>
          <p>
            <Image
              width={400}
              height={300}
              src="/images/forbidden/88.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </p>
          <div>Чингисийн чулууны бичиг</div>
          <p>
            <Image
              width={400}
              height={300}
              src="/images/forbidden/83.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </p>
          <p>
            <span>Монгол Улсын Үндэсний номын сан</span>
          </p>
          <p>
            <Image
              width={400}
              height={300}
              src="/images/forbidden/84.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </p>
          <p>&nbsp;</p>
          <p>
            <Image
              width={400}
              height={300}
              src="/images/forbidden/85.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </p>
          <div>ШУА-ийн ХЗХ-гийн ажилтан Э.Пүрэвжав</div>
          <div>
            &quot;Үндэсний номын сан бол монгол судлалын сан хөмрөгийн өлгий
            мөн&quot; илтгэл хэлэлцүүллээ
          </div>
        </div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.03.07</div>
      <div className="clear" />

      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app6056"
            name="dsq-app6056"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F166%2F123&t_d=%D2%AE%D0%9D%D0%94%D0%AD%D0%A1%D0%9D%D0%98%D0%99%20%D0%9D%D0%9E%D0%9C%D0%AB%D0%9D%20%D0%A1%D0%90%D0%9D%2090%20%D0%96%D0%98%D0%9B%D0%98%D0%99%D0%9D%20%D0%9E%D0%99%D0%93%D0%9E%D0%9E%20%D0%A2%D0%AD%D0%9C%D0%94%D0%AD%D0%93%D0%9B%D0%AD%D0%96%20%D0%91%D0%90%D0%99%D0%9D%D0%90&t_t=%D2%AE%D0%9D%D0%94%D0%AD%D0%A1%D0%9D%D0%98%D0%99%20%D0%9D%D0%9E%D0%9C%D0%AB%D0%9D%20%D0%A1%D0%90%D0%9D%2090%20%D0%96%D0%98%D0%9B%D0%98%D0%99%D0%9D%20%D0%9E%D0%99%D0%93%D0%9E%D0%9E%20%D0%A2%D0%AD%D0%9C%D0%94%D0%AD%D0%93%D0%9B%D0%AD%D0%96%20%D0%91%D0%90%D0%99%D0%9D%D0%90&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
