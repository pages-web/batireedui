import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content">
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Roboto, sans-serif", // Make sure this font is available
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ marginRight: "8px" }}>ГЭРЭЛ</span>
        <span style={{ marginRight: "8px" }}>ЗУРАГ</span>
        <span style={{ marginRight: "8px" }}>БА</span>
        <span>МУИС</span>
      </h1>
      <div className="post_content_full">
        <div>
          <span>МУИС ИРЭХ ЖИЛ 70 ЖИЛИЙН ОЙГОО ТЭМДЭГЛЭНЭ</span>
        </div>
        <div>
          <span>
            Би саяхан архиваас МУИС-тай холбоотой нэг ийм баахан зураг олж
            авсныг татаж үзүүлж байна.
          </span>
        </div>
        <div>
          <p>
            <Image
              width={400}
              height={350}
              src="/images/photo/12.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </p>
          <div>
            <span>МУИС-ийн Анхны байшин буюу одоогийн Зориг Сан</span>
          </div>
          <div>
            <span>Энэ байшинг уг нь МУИС-ийн музей болгомоор байгаа юм.</span>
          </div>
          <p>
            <Image
              width={400}
              height={350}
              src="/images/photo/13.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </p>
          <p>
            <span>&nbsp;Ректор Даачагийн Дорж, С.Төмөр-Очир, Б.Чадраа нар</span>
          </p>
          <p>
            <Image
              width={400}
              height={350}
              src="/images/photo/14.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </p>
          <p>
            <span>
              Маний танидагаас Дагвын Чойжалсүрэн багш, Хамба лам, архивын Жамц
              гуай, С.Даваа багш, англи хэлний Дамдин багш бөлгөө нар суух шиг
              байна
            </span>
          </p>
          <p>
            <Image
              width={400}
              height={350}
              src="/images/photo/15.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </p>
          <div>
            <span>Энд Норовсамбуу, Я.Шаарийбуу,Т.Дүгэрсүрэн багш нар</span>
          </div>
        </div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.11.30</div>
      <div className="clear" />
      {/* Share Buttons */}
      <div id="share_buttons">
        <span>
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
                  <span className="stBubble_hcount">0</span>
                </span>
              </span>
            </span>
          </span>
        </span>
        <span>
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
        <span>
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
                  <span className="stBubble_hcount">0</span>
                </span>
              </span>
            </span>
          </span>
        </span>
        <span>
          <div
            style={{
              display: "inline-block",
              overflow: "hidden",
              lineHeight: 0,
              position: "relative",
              verticalAlign: "middle",
              bottom: 0,
              width: 75,
              height: 21,
            }}
          >
            &nbsp;
            <div
              id="___plusone_0"
              style={{ position: "absolute", width: 450, left: "-10000px" }}
            >
              <iframe
                ng-non-bindable=""
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                style={{
                  position: "absolute",
                  top: "-10000px",
                  width: 450,
                  margin: 0,
                  borderStyle: "none",
                }}
                tabIndex={0}
                width="100%"
                id="I0_1730389643872"
                name="I0_1730389643872"
                src="https://apis.google.com/u/0/se/0/_/+1/fastbutton?usegapi=1&size=medium&count=true&origin=http%3A%2F%2Fbatireedui.com&url=http%3A%2F%2Fbatireedui.com%2Fpost%2F159%2F&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.N4A9eqvTwsI.O%2Fam%3DAACA%2Fd%3D1%2Frs%3DAHpOoo_O6fwbR1aR8YHQkB3I0FTV0L0UIA%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh&id=I0_1730389643872&_gfid=I0_1730389643872&parent=http%3A%2F%2Fbatireedui.com&pfname=&rpctoken=28346668"
                data-gapiattached="true"
              />
            </div>
          </div>
        </span>
        <span>
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
              data-href="http://batireedui.com/post/159/"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="action=&app_id=419540251399068&container_width=90&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F159%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
            >
              <span style={{ verticalAlign: "bottom", width: 90, height: 28 }}>
                <iframe
                  name="f9469a2b5531e2641"
                  width="1000px"
                  height="1000px"
                  data-testid="fb:like Facebook Social Plugin"
                  title="fb:like Facebook Social Plugin"
                  frameBorder={0}
                  // allowTransparency="true"
                  // allowFullScreen="true"
                  scrolling="no"
                  allow="encrypted-media"
                  src="https://www.facebook.com/plugins/like.php?action=&app_id=419540251399068&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2adaa11edd11487e%26domain%3Dbatireedui.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fbatireedui.com%252Ff777225de24c1003a%26relation%3Dparent.parent&container_width=90&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F159%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
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
            id="dsq-app5228"
            name="dsq-app5228"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F159%2F123&t_d=%D0%93%D0%AD%D0%A0%D0%AD%D0%9B%20%D0%97%D0%A3%D0%A0%D0%90%D0%93%20%D0%91%D0%90%20%D0%9C%D0%A3%D0%98%D0%A1%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%93%D0%AD%D0%A0%D0%AD%D0%9B%20%D0%97%D0%A3%D0%A0%D0%90%D0%93%20%D0%91%D0%90%20%D0%9C%D0%A3%D0%98%D0%A1%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
