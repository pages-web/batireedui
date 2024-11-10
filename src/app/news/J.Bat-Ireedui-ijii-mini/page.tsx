import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "24px",
          lineHeight: "1.2",
          display: "flex",
          gap: "4px",
        }}
      >
        <span>Ж.БАТ-ИРЭЭДҮЙ:</span>
        <span>&quot;ИЖИЙ</span>
        <span>МИНИ&quot;</span>
      </h1>
      <div className="post_content_full">
        <p>
          <span>Хавар хаврын хахирган шуурганаас&nbsp;</span>
          <br />
          <span>Хаацайлж хамгаалсэн ижий минь дээ&nbsp;</span>
          <br />
          <span>Хайр харын дуу бүхэнд&nbsp;</span>
          <br />
          <span>Хайлж, хатуужсан ижий минь ээ&nbsp;</span>
          <br />
          <br />
          <span>Нарт орчлонд буянаа хурааж&nbsp;</span>
          <br />
          <span>Намбайж жаргасан ижий минь ээ&nbsp;</span>
          <br />
          <br />
          <span>
            <Image
              src="/images/IMG_1013.jpg"
              alt=""
              width={250}
              height={167}
              style={{
                float: "left",
                display: "inline",
                width: 250,
                marginRight: 10,
              }}
            />
            Зун зуны халуун нарнаас&nbsp;
          </span>
          <br />
          <span>Зулайг минь халхалсан ижий минь дээ&nbsp;</span>
          <br />
          <span>Замбуулин хорвоогийн ааш аягыг&nbsp;</span>
          <br />
          <span>Зааж л залбирсан ижий минь дээ&nbsp;</span>
          <br />
          <br />
          <span>Нарт орчлонд буянаа хурааж&nbsp;</span>
          <br />
          <span>Намбайж жаргасан ижий минь ээ&nbsp;</span>
          <br />
          <br />
          <span>Намар намрын нойтон борооноос&nbsp;</span>
          <br />
          <span>Намайг нөмөрлөсөн ижий минь дээ&nbsp;</span>
          <br />
          <span>Нарт орчлонд буянаа хурааж&nbsp;</span>
          <br />
          <span>Намбайж жаргасан ижий минь ээ&nbsp;</span>
          <br />
          <br />
          <span>Нарт орчлонд буянаа хурааж&nbsp;</span>
          <br />
          <span>Намбайж жаргасан ижий минь ээ&nbsp;</span>
          <br />
          <br />
          <span>Өвөл өвлийн хүйтэн жавраас&nbsp;</span>
          <br />
          <span>Өмөөрч тойруулсан ижий минь дээ&nbsp;</span>
          <br />
          <span>Өнчирч хагацахын хатуу тавиланд&nbsp;</span>
          <br />
          <span>Өндийж тэмцсэн ижий минь ээ&nbsp;</span>
          <br />
          <br />
          <span>Нарт орчлонд буянаа хурааж&nbsp;</span>
          <br />
          <span>Намбайж жаргасан ижий минь ээ</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,<a href="/sidebar/shuleh-min/">ШҮЛЭГ МИНЬ</a>
      </div>
      <div className="post_info_full right">2009.07.21</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/80/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ИЖИЙ МИНИ"'
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/80/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ИЖИЙ МИНИ"'
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/80/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ИЖИЙ МИНИ"'
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/80/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ИЖИЙ МИНИ"'
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/80/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ИЖИЙ МИНИ"'
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app640"
            name="dsq-app640"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F80%2F123&t_d=%D0%96.%D0%91%D0%90%D0%A2-%D0%98%D0%A0%D0%AD%D0%AD%D0%94%D2%AE%D0%99%3A%20%22%D0%98%D0%96%D0%98%D0%99%20%D0%9C%D0%98%D0%9D%D0%98%22&t_t=%D0%96.%D0%91%D0%90%D0%A2-%D0%98%D0%A0%D0%AD%D0%AD%D0%94%D2%AE%D0%99%3A%20%22%D0%98%D0%96%D0%98%D0%99%20%D0%9C%D0%98%D0%9D%D0%98%22&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
