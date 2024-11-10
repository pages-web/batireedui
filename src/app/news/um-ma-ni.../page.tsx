import React from "react";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 28, height: 16 }}
        >
          ОМ
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 27, height: 16 }}
        >
          МА
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 25, height: 16 }}
        >
          НИ
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 36, height: 16 }}
        >
          БАД
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 27, height: 16 }}
        >
          МЭ
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 65, height: 16 }}
        >
          ХУМ-ЫН
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 40, height: 16 }}
        >
          УЧИР
        </span>
      </h1>

      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <span style={{ textAlign: "justify" }}>
            Эх болсон зургаан зүйл хамаг амьтны оройн дээд нь тэнгэр нар бөгөөд
            түүнийг ом гэж томьёолно. Түүний дараах нь асар нар бөгөөд ма гэж
            тодорхойлно. Гурав дахь нь ни буюу хүн. Дөрөв дэх нь бад буюу
            адгуус, тав дах нь мэ буюу бирд, зургаа дах нь хум буюу там юм.
            Бүгдээрээ нийлээд ом маа ни бад мэ хум гэсэн маанийн зургаан үсэг
            болно.&quot;&nbsp;
          </span>
          <em style={{ textAlign: "justify" }}>
            Л.Түдэв, &quot;Оройгүй сүм&quot;
          </em>
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
