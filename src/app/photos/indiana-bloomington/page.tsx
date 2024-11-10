import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Roboto, sans-serif",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ marginRight: "8px" }}>INDIANA</span>
        <span style={{ marginRight: "8px" }}>BLOOMINGTON</span>
        <span>CITY</span>
      </h1>

      <div className="post_content_full">
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/110.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Монгол Төвдийн соёлын төвийн номын хүрд</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/118.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>ИИС-ийн Лили номын сангийн монгол номын дээж</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/116.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Индианагийн намар</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/109.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Ажаа гэгээнд бараалхан мөргөв</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/112.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Стүпа буюу суварга</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/117.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Индиана</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/113.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>ИИС-ийн Монгол хэл суралцагч оюутан нар</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/107.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Индианагийн ИС-ийн захирал Майкл Робби гуайн хамт</span>
        </p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/114.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <div>(голоос) Профессор Хар Дорж, С.Төмөр-Очир, Т.Хишигдулам,</div>
        <div>Ж.Бат-Ирээдүй, Христофер Атвүүд, Сүси Дрост</div>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/108.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>Монгол Төвдийн соёлын төвийн суварга</p>
        <p>
          <Image
            width={350}
            height={234}
            src="/images/forbidden/111.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 350 }}
          />
        </p>
        <p>
          <span>Ташир гурав</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.03.07</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/170/"
          st_title="INDIANA BLOOMINGTON CITY"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/170/"
          st_title="INDIANA BLOOMINGTON CITY"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/170/"
          st_title="INDIANA BLOOMINGTON CITY"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/170/"
          st_title="INDIANA BLOOMINGTON CITY"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/170/"
          st_title="INDIANA BLOOMINGTON CITY"
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app6052"
            name="dsq-app6052"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F170%2F123&t_d=INDIANA%20BLOOMINGTON%20CITY&t_t=INDIANA%20BLOOMINGTON%20CITY&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
