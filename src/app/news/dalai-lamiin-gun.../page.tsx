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
        <span>Далай</span>
        <span>ламын</span>
        <span>гүн</span>
        <span>ухаан</span>
      </h1>
      <div className="post_content_full">
        <p>
          <span>
            <strong>
              <Image
                width={230}
                height={275}
                src="/images/dalai-lama.jpg"
                alt=""
                style={{
                  float: "left",
                  display: "inline",
                  width: 230,
                  marginRight: 10,
                }}
              />
              Та бусдыг аз жаргалтай байлгахыг хүсвэл хайр энэрэлд суралц. Өөрөө
              аз жаргалтай байхыг хүсэж байвал хайр энэрэлд суралц. Энэ бол
              миний энгийн шашин. Сүм дуган хэрэггүй. Толгой эргүүлсэн гүн ухаан
              ч хэрэггүй. Бидний өөрсдийн тархи, бидний өөрсдийн зүрх сэтгэл бол
              бидний дуган юм. Гүн ухаан нь эелдэг зан төрх болой.
            </strong>
          </span>
          <span>&nbsp;</span>
          <br />
          <br />
          <span>
            If you want others to be happy, practice compassion. If you want to
            be happy, practice compassion. This is my simple religion. There is
            no need for temples; no need for complicated philosophy. Our own
            brain, our own heart is our temple; the philosophy is
            kindness.&nbsp;
          </span>
          <br />
          <br />
          <span>Дээрхийн Гэгээн Далай Лам&nbsp;</span>
          <span>1935 оны 7 дугаар сарын 6 нд</span>
          <span>мэндэлсэн.</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,
      </div>
      <div className="post_info_full right">2009.12.14</div>
      <div className="clear" />
      {/* Share Buttons */}
      <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          // st_url="http://batireedui.com/post/69/"
          // st_title="Далай ламын гүн ухаан"
          // st_processed="yes"
        >
          <span
            style={{
              textDecoration: "none",
              color: "#000000",
              display: "inline-block",
              cursor: "pointer",
            }}
            className="stButton"
          >
            <span>
              <span
                className="stMainServices st-facebook-counter"
                style={{
                  backgroundImage:
                    'url("https://ws.sharethis.com/images/2017/facebook_counter.png")',
                }}
              >
                &nbsp;
              </span>
              <span className="stArrow">
                <span
                  className="stButton_gradient stHBubble"
                  style={{ display: "inline-block" }}
                >
                  <span className="stBubble_hcount">7</span>
                </span>
              </span>
            </span>
          </span>
        </span>
        <span
          className="st_twitter_hcount"
          // st_url="http://batireedui.com/post/69/"
          // st_title="Далай ламын гүн ухаан"
          // st_processed="yes"
        >
          <span
            style={{
              textDecoration: "none",
              color: "#000000",
              display: "inline-block",
              cursor: "pointer",
            }}
            className="stButton"
          >
            <span>
              <span
                className="stMainServices st-twitter-counter"
                style={{
                  backgroundImage:
                    'url("https://ws.sharethis.com/images/2017/twitter_counter.png")',
                }}
              >
                &nbsp;
              </span>
              <span className="stArrow">
                <span
                  className="stButton_gradient stHBubble"
                  style={{ display: "inline-block" }}
                >
                  <span className="stBubble_hcount">0</span>
                </span>
              </span>
            </span>
          </span>
        </span>
        <span
          className="st_linkedin_hcount"
          // st_url="http://batireedui.com/post/69/"
          // st_title="Далай ламын гүн ухаан"
          // st_processed="yes"
        >
          <span
            style={{
              textDecoration: "none",
              color: "#000000",
              display: "inline-block",
              cursor: "pointer",
            }}
            className="stButton"
          >
            <span>
              <span
                className="stMainServices st-linkedin-counter"
                style={{
                  backgroundImage:
                    'url("https://ws.sharethis.com/images/2017/linkedin_counter.png")',
                }}
              >
                &nbsp;
              </span>
              <span className="stArrow">
                <span
                  className="stButton_gradient stHBubble"
                  style={{ display: "inline-block" }}
                >
                  <span className="stBubble_hcount">2</span>
                </span>
              </span>
            </span>
          </span>
        </span>

        <span
          className="st_fblike_hcount"
          // st_url="http://batireedui.com/post/69/"
          // st_title="Далай ламын гүн ухаан"
          // st_processed="yes"
        >
          <span
            style={{
              textDecoration: "none",
              color: "#000000",
              display: "inline-block",
              cursor: "pointer",
              position: "relative",
              margin: "3px 3px 0",
              padding: 0,
              fontSize: 11,
              lineHeight: 0,
              verticalAlign: "bottom",
              overflow: "visible",
            }}
          >
            <div
              data-action=""
              data-send="false"
              data-layout="button_count"
              data-show-faces="false"
              className="fb-like fb_iframe_widget"
              data-href="http://batireedui.com/post/69/"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="action=&app_id=419540251399068&container_width=0&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F69%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
            >
              <span style={{ verticalAlign: "bottom", width: 90, height: 28 }}>
                <iframe
                  name="f01d306847196f944"
                  width="1000px"
                  height="1000px"
                  data-testid="fb:like Facebook Social Plugin"
                  title="fb:like Facebook Social Plugin"
                  frameBorder={0}
                  // allowTransparency="true"
                  // allowFullScreen="true"
                  scrolling="no"
                  allow="encrypted-media"
                  src="https://www.facebook.com/plugins/like.php?action=&app_id=419540251399068&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df470f83797f6deb6f%26domain%3Dbatireedui.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fbatireedui.com%252Ffe3a379eebb70fde3%26relation%3Dparent.parent&container_width=0&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F69%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
                  style={{
                    border: "none",
                    visibility: "visible",
                    width: 90,
                    height: 28,
                  }}
                  className=""
                />
              </span>
            </div>
          </span>
        </span>
      </div>
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app629"
            name="dsq-app629"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F69%2F123&t_d=%D0%94%D0%B0%D0%BB%D0%B0%D0%B9%20%D0%BB%D0%B0%D0%BC%D1%8B%D0%BD%20%D0%B3%D2%AF%D0%BD%20%D1%83%D1%85%D0%B0%D0%B0%D0%BD%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%94%D0%B0%D0%BB%D0%B0%D0%B9%20%D0%BB%D0%B0%D0%BC%D1%8B%D0%BD%20%D0%B3%D2%AF%D0%BD%20%D1%83%D1%85%D0%B0%D0%B0%D0%BD%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
