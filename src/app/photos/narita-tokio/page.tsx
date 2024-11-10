import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div id="content">
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          НАРИТА,
        </span>
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          ТОКИО
        </span>
        <span style={{ display: "inline-block", marginRight: "8px" }}>
          ХОТЫН
        </span>
        <span style={{ display: "inline-block" }}>БАЙДАЛ</span>
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/mongolchuud2.jpg"
          />
        </p>
        <p>
          <span>Хол гэртэй улс ингээд л сууж байхаас</span>
        </p>
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/margaashiinongotsondbutrguuljbaina.jpg"
          />
        </p>
        <p>
          <span>Хоёр гурав хоносон улс бас үлдлээ</span>
        </p>
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/huuhedteihumuusolonbaina.jpg"
          />
        </p>
        <p>
          <span>Энэ хүмүүс маргаашийн онгоцонд бүртгүүлж байна</span>
        </p>
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/Hoosonlanguu.jpg"
          />
        </p>
        <p>
          <span>Лангуунууд үдээс хойш хоосон байна</span>
        </p>
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/burtguuljbaigaamongolchuud.jpg"
          />
        </p>
        <p>
          <span>Монголчууд бүртгүүлэх гэж яг л ТИТАНИК кино болж байна</span>
        </p>
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/galtteregniihumuus.jpg"
          />
        </p>
        <div className="separator">Хүн гэж най алга</div>
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/mait1717.jpg"
          />
        </p>
        <p>
          <span>За нэг юм нисэх бололтой</span>
        </p>
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/miatom1830.jpg"
          />
        </p>
        <p>
          <span>Улаанбаатар 18:00-оор хөөрнө</span>
        </p>
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/hoosonlanguu2.jpg"
          />
        </p>
        <p>
          <span>Талхны лангуу</span>
        </p>
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/galttereg2.jpg"
          />
        </p>
        <p>
          <span>Цахилгаан хүрэлцэхгүй галт тэрэг цөөн байна</span>
        </p>
        <p>
          <Image
            width={600}
            height={400}
            alt=""
            src="/images/photo/mongolchuudongotshuleejbaina.jpg"
          />
        </p>
        <p>
          <span>Ачаа гэдэг бас асуудал аа?</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.03.17</div>
      <div className="clear" />
    </div>
  );
}
