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
        <span style={{ marginRight: "10px" }}>МОНГОЛ</span>
        <span style={{ marginRight: "10px" }}>ҮНДЭСТНИЙ</span>
        <span style={{ marginRight: "10px" }}>ИХ</span>
        <span style={{ marginRight: "10px" }}>БАЯР</span>
        <span style={{ marginRight: "10px" }}>НААДАМ</span>
        <span style={{ marginRight: "10px" }}>САЙХАН</span>
        <span>БОЛЛОО</span>
      </h1>

      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={234}
            src="/images/m7.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Төрийн есөн хөлт цагаан туг төв цэнгэлдэхэд заларна</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/m12.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>
            Их Монголын үндэстэн ястан үүхэд хүүхэдгүй дөрвөн зүг найман
            зовхисоос&nbsp; ёслон&nbsp;цуглана
          </span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/m11.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Нутгийн дүү хүү цол горилон даруухан инээнэ</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/m2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Төв цэнгэлдэхэд түм түжигнэн, бум бужигнана</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/m8.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Хүчит 1024 бөхийн нэгийн даваа нийдэн жигдэрнэ</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/m4.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Төрийн есөн хөлт цагаан туг төв цэнгэлдэхэд хүрнэ</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/m6.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Хүүхэд эх орны ирээдүй хөхөн баясана</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/m3.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Төрийн тэргүүн түмэн олонтойгоо мэндчилнэ</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/m9.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>
            1024&nbsp;морин хуурын аялгуу Монголын хөх тэнгэр, уул
            усыг&nbsp;хүнгэнэнхэн хөглөнө
          </span>
        </p>
        <p>
          <Image
            width={200}
            height={264}
            src="/images/m13.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 200 }}
          />
        </p>
        <p>
          <span>Хөхөлтэй хүүгийн хөөрхөн&nbsp;зийнгоо хадана</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/m10.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>
            Хүчит бөхийн их аваргууд төрийн есөн хөлт цагаан тугнаа мэхийн
            адислана
          </span>
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
            id="dsq-app680"
            name="dsq-app680"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F181%2F123&t_d=%D0%9C%D0%9E%D0%9D%D0%93%D0%9E%D0%9B%20%D2%AE%D0%9D%D0%94%D0%AD%D0%A1%D0%A2%D0%9D%D0%98%D0%99%20%D0%98%D0%A5%20%D0%91%D0%90%D0%AF%D0%A0%20%D0%9D%D0%90%D0%90%D0%94%D0%90%D0%9C%20%D0%A1%D0%90%D0%99%D0%A5%D0%90%D0%9D%20%D0%91%D0%9E%D0%9B%D0%9B%D0%9E%D0%9E&t_t=%D0%9C%D0%9E%D0%9D%D0%93%D0%9E%D0%9B%20%D2%AE%D0%9D%D0%94%D0%AD%D0%A1%D0%A2%D0%9D%D0%98%D0%99%20%D0%98%D0%A5%20%D0%91%D0%90%D0%AF%D0%A0%20%D0%9D%D0%90%D0%90%D0%94%D0%90%D0%9C%20%D0%A1%D0%90%D0%99%D0%A5%D0%90%D0%9D%20%D0%91%D0%9E%D0%9B%D0%9B%D0%9E%D0%9E&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
