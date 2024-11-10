import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 69, height: 16 }}
        >
          ДОЛООН
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 78, height: 16 }}
        >
          ТАХИЛЫН
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 40, height: 16 }}
        >
          УТГА
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 44, height: 16 }}
        >
          УЧИР
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 30, height: 16 }}
        >
          АНУ
        </span>
      </h1>
      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <Image
            width={128}
            height={168}
            src="/images/ypon/images6.jpg"
            alt=""
            style={{
              float: "left",
              display: "inline",
              width: 128,
              marginRight: 10,
            }}
          />
          “Хамгийн урд нүүрэнд долоон цөгц эгнүүлсний&nbsp;зүүн хоёр нь устай,
          гурав дахь нь цэцэгтэй, дөрөв дэх нь хүжтэй, тав дах нь шар тосон
          зултай, зургаа дахь нь ус, долоо дах нь цагаан идээтэй ажээ. Бурханы
          өлмийн сэрүүцүүлэг буюу төвдөөр шабсэл, нүүрийн сэрүүцүүлэг буюу
          төвдөөр шалсэл, газар шорооны бэлэг буюу төвдөөр мөдөх цэцэг, утах хүж
          буюу төвдөөр дугбой зул буюу төвдөөр мармэй, үнэрт ус буюу төвдөөр
          дигаб, гэгээний зоог буюу шалсайг төлөөлж ийм долоон
          тахилыг&nbsp;аливаа сүмийн байтугай, гэрийн шүтээний өмнө өрж тавьдаг
          заншил түгээмлийн учир хаа ч ийм л байдаг бөлгөө.”
          <em>Л.Түдэв, “Оройгүй сүм”</em>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/sidebar/yum-gedeg-uchirtai">ЮМ ГЭДЭГ УЧИРТАЙ</a>
      </div>
      <div className="post_info_full right">2012.04.03</div>
      <div className="clear" />
    </div>
  );
}
