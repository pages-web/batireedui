import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "96px",
            height: "18px",
            position: "relative",
          }}
        >
          <canvas
            width={96}
            height={18}
            style={{
              width: "96px",
              height: "18px",
              position: "absolute",
              top: "-2px",
              left: "-8px",
            }}
          />
          <span style={{ position: "relative", top: "-16px", left: "8px" }}>
            ГИЙНГОО
          </span>
        </span>
      </h1>

      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <span style={{ color: "#000a83" }}>
            <strong>
              <Image
                src="/images/giingoo.jpg"
                alt="giingoo"
                width={100}
                height={70}
                style={{
                  float: "left",
                  display: "inline",
                  width: 100,
                  marginRight: 10,
                }}
              />
              Гийнгоо
            </strong>
            &nbsp;бол нарны бурхан Осор таринд наран дор, хөрст дэлхий дээр
            хурдан морион хүлэглэн морь хүүхэд хоёр амар амгалан өлзийтэй байхыг
            бэлгэдсэн уриа юм. Монголчуудын гийнгоо бол адууны тэнгэр Дамдин
            буюу Хаянхярваа бурханы зүрхэн тарни бөгөөд адууны сүлд, бурханы
            ивээлийг тэтгэсэн уриа билээ. Гийнгооны тухай нэг домог бий. Эрт
            урид цагт Гийн хэмээх ядуу хүү хааны наадамд оролцохоор Гоо гэдэг
            даагаа уралдуулахаар ирсэнд хаад баячууд шоолон гадуурхаж
            оролцуулаагүй аж. Тэгээд тэр хүү Гийн гоо хэмээн яруу сайхнаар
            уянгалуулан дуудсанд баядууд уярч хүүг наадамдаа оролцуулжээ. Үүнээс
            хойш монголчууд наадмаар Түмэн эх хүлэгтээ чимэг болгон гийн гоо
            хэмээн аялдаг болсон гэж гардаг юм. Энэ гийн гоог нутаг нутагт
            жаахан өөр дуудах боловч аль ч газар энэ хоёр үг нь хоёулаа заавал
            байдаг юм. Гийнгоонд адгуусыг уярааж хүч чадал шандас нэмэх, хөөргөх
            гайхамшигт увдис бий.
          </span>
        </p>
        <p>&nbsp;</p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/sidebar/mongol-medleg">МОНГОЛ МЭДЛЭГ</a>
      </div>
      <div className="post_info_full right">2012.02.16</div>
      <div className="clear" />
      {/* Share Buttons */}

      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app6966"
            name="dsq-app6966"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F142%2F123&t_d=%D0%93%D0%98%D0%99%D0%9D%D0%93%D0%9E%D0%9E%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%93%D0%98%D0%99%D0%9D%D0%93%D0%9E%D0%9E%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=d9bf63667ed03c99c8fc502b196e66ef"
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
