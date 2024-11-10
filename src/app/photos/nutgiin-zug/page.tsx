import React from "react";
import Image from "next/image";

export default function Page() {
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
          НУТГИЙН
        </span>
        <span style={{ display: "inline-block" }}>ЗҮГ</span>
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={300}
            src="/images/photo/guitsejturuuleh.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Oнгоцоор бас гүйцэж түрүүлнэ гэж байна аа</span>
        </p>
        <p>
          <Image
            width={350}
            height={300}
            src="/images/photo/miattokyo2.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <div className="separator">
          Байдал намжиж сайхан намуухан тайван болсон байлаа
        </div>
        <p>
          <Image
            width={350}
            height={300}
            src="/images/photo/buulaa.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Хариугүй буулаа</span>
        </p>
        <p>
          <Image
            width={350}
            height={300}
            src="/images/photo/ongotsond.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Наяадхан хүнтэй нам унтсаар ирлээ</span>
        </p>
        <p>
          <Image
            width={350}
            height={300}
            src="/images/photo/Tokyobayartai.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Токио хот маань түр баяртай</span>
        </p>
        <p>
          <Image
            width={350}
            height={300}
            src="/images/photo/miattokyo.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <div className="separator">Өчүүхэн намайг өргөж тусласан МИАТ -</div>
        <div className="separator">Монголын Иргэний Агаарын Тээвэр-ийнханд</div>
        <div className="separator">их баярласан шүү!</div>
        <p>
          <Image
            width={350}
            height={300}
            src="/images/photo/gazardeer.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Эх нутгийн маань ариун газар зөөлөн тосож авлаа</span>
        </p>
        <p>
          <Image
            width={350}
            height={300}
            src="/images/photo/suulaa.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Онгоц маань суулаа</span>
        </p>
        <p>
          <Image
            width={350}
            height={300}
            src="/images/photo/gaalideer.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Хилийн дээс алхлаа...</span>
        </p>
        <p>
          <Image
            width={350}
            height={300}
            src="/images/photo/utaan.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Утаатай ч гэр маань энд бий</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.04.11</div>
      <div className="clear" />
    </div>
  );
}
