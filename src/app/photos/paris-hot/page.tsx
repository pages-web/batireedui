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
          ПАРИС
        </span>
        <span style={{ display: "inline-block" }}>ХОТ</span>
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            width={250}
            height={200}
            src="/images/photo/parishool.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>neg iim hool 12.50 eurogoor tuuj ogood l garch ogson doo</span>
        </p>
        <p>
          <Image
            width={250}
            height={300}
            src="/images/photo/IMG_3401.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>Musee DOrsay</span>
        </p>
        <p>
          <Image
            width={250}
            height={300}
            src="/images/photo/IMG_3353.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Musee Du Louvre</span>
        </p>
        <p>
          <Image
            width={250}
            height={300}
            src="/images/photo/IMG_3258.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>God and Tour</span>
        </p>
        <p>
          <Image
            width={250}
            height={300}
            src="/images/photo/IMG_3203.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>TOUR EIFFEL</span>
        </p>
        <p>
          <Image
            width={250}
            height={300}
            src="/images/photo/parisnord.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>Bonn-oos Paris Nord-d ICE-aar buulaa</span>
        </p>
        <p>
          <Image
            width={250}
            height={300}
            src="/images/photo/IMG_3311.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>Des Champs Elysees</span>
        </p>
        <p>
          <Image
            width={250}
            height={300}
            src="/images/photo/IMG_3373.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>Arc de Triomphe Etoile</span>
        </p>
        <p>
          <Image
            width={250}
            height={300}
            src="/images/photo/IMG_3208.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>Summer Eiffel Tour</span>
        </p>
        <p>
          <Image
            width={250}
            height={300}
            src="/images/photo/IMG_3217.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 250 }}
          />
        </p>
        <p>
          <span>Eiffel Tour</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.05.20</div>
      <div className="clear" />
    </div>
  );
}
