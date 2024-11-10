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
        <span>Поп</span>
        <span>Жон</span>
        <span>Поул</span>
        <span>II</span>
      </h1>
      <div className="post_content_full">
        <p>
          <strong>
            <span>
              <Image
                width={150}
                height={150}
                src="/images/imagesCADVLW5V.jpg"
                alt=""
                style={{
                  float: "left",
                  display: "inline",
                  width: 150,
                  marginRight: 10,
                }}
              />
              Ирээдүй маргаашаас биш өнөөдрөөс эхлэдэг.&nbsp;
            </span>
            <br />
            <span>Асуудлыг нударгаар шийдэх нь эр хүний зан биш.&nbsp;</span>
            <br />
            <span>
              Тэнэглэл нь бурханы бэлэг ч гэсэн буруугаар ашиглах ёсгүй.
            </span>
            <br />
            <span>
              Эрх чөлөө гэдэг бидний хийх дуртайг биш харин бидний хийх ёстойг
              агуулсан утгатай байдаг.&nbsp;
            </span>
          </strong>
        </p>
        <div>The future starts today, not tomorrow.</div>
        <div>Violence and arms can never resolve the problems of men.</div>
        <div>
          Stupidity is also a gift of God, but one mustn&apos;t misuse it.
        </div>
        <div>
          Freedom consists not in doing what we like, but in having the right to
          do what we ought.
        </div>
        <p>
          <span>
            Pope John Paul II 1920 оны 5 дугаар сарын 18 нд төрж, 2005 оны 4
            дүгээр сарын 2 нд жанч халжээ.
          </span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,
      </div>
      <div className="post_info_full right">2009.12.23</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/64/"
          st_title="Поп Жон Поул II"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/64/"
          st_title="Поп Жон Поул II"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/64/"
          st_title="Поп Жон Поул II"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/64/"
          st_title="Поп Жон Поул II"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/64/"
          st_title="Поп Жон Поул II"
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app5399"
            name="dsq-app5399"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F64%2F123&t_d=%D0%9F%D0%BE%D0%BF%20%D0%96%D0%BE%D0%BD%20%D0%9F%D0%BE%D1%83%D0%BB%20II%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%9F%D0%BE%D0%BF%20%D0%96%D0%BE%D0%BD%20%D0%9F%D0%BE%D1%83%D0%BB%20II%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
