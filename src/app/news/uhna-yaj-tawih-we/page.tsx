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
        <span style={{ marginRight: "4px" }}>УХНА</span>
        <span style={{ marginRight: "4px" }}>ЯАЖ</span>
        <span style={{ marginRight: "4px" }}>ТАВИХ</span>
        <span>ВЭ?</span>
      </h1>
      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <strong>
            <span style={{ color: "#000a83" }}>Ухна яаж тавих вэ</span>
          </strong>
          <span style={{ color: "#000a83" }}>
            ? Өсгөлөн, чийрэг, том биетэй, хошуу уртавтар, эвэр хэт шорон биш,
            үс сорлог, ноолуур арвин, зүс хар, хөх, улаан өнгийн бараандуу байх
            зэрэг арваад шинж бүрдсэн ишгээр ухна тавина. Ухна тавихдаа бас
            жижигхэн ёс үйлдэнэ. Эвэр, дух, туруунд нь шар тос түрхэн, сүү
            амсуулж, нурууг нь дагуулан&nbsp;дусаагаад&nbsp; ерөөл хэлж тавина.
            Ерөөл нь &nbsp;”Хадаар явахад цуцахгүй, халтирч унахыг мэдэхгүй,
            сэргэх, тургих чимээтэй, сэлмэн дэрэлгэр ээртэй, зууны эх, мянганы
            эцэг түмний сүрэг, түнтэгэр хөх (өнгийг тухай бүрд тааруулан хэлнэ)
            ухна хэмээн хэлэх жишээтэй.
          </span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,
        <a href="/sidebar/mongol-tehnologi">МОНГОЛ ТЕХНОЛОГИ</a>
      </div>
      <div className="post_info_full right">2012.02.15</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/111/"
          st_title="УХНА ЯАЖ ТАВИХ ВЭ?"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/111/"
          st_title="УХНА ЯАЖ ТАВИХ ВЭ?"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/111/"
          st_title="УХНА ЯАЖ ТАВИХ ВЭ?"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/111/"
          st_title="УХНА ЯАЖ ТАВИХ ВЭ?"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/111/"
          st_title="УХНА ЯАЖ ТАВИХ ВЭ?"
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app3718"
            name="dsq-app3718"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F111%2F123&t_d=%D0%A3%D0%A5%D0%9D%D0%90%20%D0%AF%D0%90%D0%96%20%D0%A2%D0%90%D0%92%D0%98%D0%A5%20%D0%92%D0%AD%3F%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%A3%D0%A5%D0%9D%D0%90%20%D0%AF%D0%90%D0%96%20%D0%A2%D0%90%D0%92%D0%98%D0%A5%20%D0%92%D0%AD%3F%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
