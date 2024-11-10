import React from "react";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ marginRight: "4px" }}>АЗАРГА</span>
        <span style={{ marginRight: "4px" }}>ХЭРХЭН</span>
        <span style={{ marginRight: "4px" }}>ТАВИХ</span>
        <span>ВЭ?</span>
      </h1>
      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <span style={{ color: "#000a83" }}>
            <strong>Азарга хэрхэн тавих вэ?</strong> Азарга тавихад монголчууд
            их анхаарч сайн үрээгээр азарга тавихыг хичээдэг. Яагаад гэвэл
            азарга бол адуун сүргийн манлай, адууг хамгаалагч юм. Азарга тавих
            үрээний шинж хэмээвээс, бие тэгш, бадриун, магнай тэнэгэр уужим,
            хамрын нүх, нүд том, чих урт, хүзүү бүдүүн, цээжин биеэр өргөн,
            мундаа өндөртэй, зоо нуруу тэгш, ташаа өргөн, дэл сүүл өтгөн, хэвлий
            тавиу, хомбон тэгш, хар туурайтай, борви тэнэгэр, сагаг шигүү,
            босоовтор, гишгэлт тэгш, шилбэ бүдүүн шөрмөслөг, төмс адил байрлалт,
            зүс бараандуу байх зэрэг 30 гаруй шинж бүрдүүлж байж эх эцгийн удмыг
            бас хараж байж азарга тавина. Удам судрыг мэдэхгүй гүүнд байдсаа
            нийлүүлэж, гишгүүлэхгүй, тийм үрээгээр азарга тавихгүй байхыг
            хичээдэг.&nbsp;Азарга тавихад бас нэг жижигэхн ёс үйлдэнэ. Үрээг
            сүүгээр мялааж, дэл хондлой руу нь дусаагаад, “Багссан дэлтэй,
            сагссан сүүлтэй, үр төл олонтой, үржил угсаа сайтай, ижил сүрэгтээ
            ээлтэй, ирэх дайсанд халтай, хамаг сүрэгтээ хайртай, халдах дайсанд
            халтай, хурдан жороо олонтой, түмэн сүргийн манлай болоорой хэмээн
            ерөөж тавина.
          </span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,
        <a href="/sidebar/mongol-tehnologi/">МОНГОЛ ТЕХНОЛОГИ</a>
      </div>
      <div className="post_info_full right">2012.02.15</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/118/"
          st_title="АЗАРГА ХЭРХЭН ТАВИХ ВЭ?"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/118/"
          st_title="АЗАРГА ХЭРХЭН ТАВИХ ВЭ?"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/118/"
          st_title="АЗАРГА ХЭРХЭН ТАВИХ ВЭ?"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/118/"
          st_title="АЗАРГА ХЭРХЭН ТАВИХ ВЭ?"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/118/"
          st_title="АЗАРГА ХЭРХЭН ТАВИХ ВЭ?"
        />
      </div> */}
      <div className="disqus"></div>
    </div>
  );
}
