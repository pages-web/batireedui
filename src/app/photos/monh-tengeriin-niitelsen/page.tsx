import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content">
      <h1
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          fontFamily: "Roboto, sans-serif",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ marginRight: "8px" }}>“МӨНХ</span>
        <span style={{ marginRight: "8px" }}>ТЭНГЭРИЙН</span>
        <span style={{ marginRight: "8px" }}>БИЧИГ”</span>
        <span style={{ marginRight: "8px" }}>КАЛЛИГРАФИЙН</span>
        <span style={{ marginRight: "8px" }}>ҮЗЭСГЭЛЭН</span>
        <span>НЭЭГДЭНЭ</span>
      </h1>
      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <span>
            <Image
              width={400}
              height={340}
              src="/images/photo/89.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
          </span>
        </p>
        <p style={{ textAlign: "justify" }}>
          <span>
            Өнөөдөр Монгол Улсын Ерөнхийлөгчийн Тамгын газраас Төрийн ордоны
            Иргэний танхимд хэвлэлийн бага хурал хийж маргааш 2011 оны 11 дүгээр
            сарын 16 ны 11:30 аас Уран зургийн галлерейд Монголын шилдэг
            каллиграфичдын &quot;МӨНХ ТЭНГЭРИЙН БИЧИГ&quot; каллиграфийн шилдэг
            бүтээлийн үзэсгэлэн нээгдэнэ хэмээн зарлалаа. Уг үзэсгэлэнн Монгол
            Улсын Ерөнхийлөгчийн Тамгын газар санаачлан зохион байгуулж байгаа
            бөгөөд тус үзэсгэлэнд Сэцэн хиад Дашбалдангийн Баттөмөр, Жалайр
            Довдонгийн Батбаяр, Онолт Тогообатын Жамьянсүрэн, Их Түмэн
            Лхагваагийн Түвшинжаргал, Асуд Дагвын Ганбаатар, Бууч Цэгмидийн
            Тамир, Баянсайхан Цэнд-Очирын Бямбажав, Тарчин Энхбаатар Найдандорж,
            зэрэг шилдэг уран бичээчдийн&nbsp; бүтээл тавигдаж байна.&nbsp;
          </span>
        </p>
        <p style={{ textAlign: "justify" }}>
          <span>
            <Image
              width={400}
              height={340}
              src="/images/photo/90.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 400 }}
            />
            <br />
          </span>
        </p>
        <p style={{ textAlign: "justify" }}>
          <span>
            <span>Д.Батбаяр, &quot;МОНГОЛ&quot; Халуун элгэн нутаг, 2005</span>
          </span>
        </p>
        <p style={{ textAlign: "justify" }}>
          <span>
            <span>
              <Image
                width={400}
                height={340}
                src="/images/photo/91.jpg"
                alt=""
                style={{ float: "none", display: "inline", width: 400 }}
              />
              <br />
            </span>
          </span>
        </p>
        <div>
          <span>Д.Баттөмөр, &quot;УЛААН НАР&quot;, 2008</span>
        </div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.11.14</div>
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
                id="I0_1730390698611"
                name="I0_1730390698611"
                src="https://apis.google.com/u/0/se/0/_/+1/fastbutton?usegapi=1&size=medium&count=true&origin=http%3A%2F%2Fbatireedui.com&url=http%3A%2F%2Fbatireedui.com%2Fpost%2F167%2F&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.N4A9eqvTwsI.O%2Fam%3DAACA%2Fd%3D1%2Frs%3DAHpOoo_O6fwbR1aR8YHQkB3I0FTV0L0UIA%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh&id=I0_1730390698611&_gfid=I0_1730390698611&parent=http%3A%2F%2Fbatireedui.com&pfname=&rpctoken=25904400"
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
              data-href="http://batireedui.com/post/167/"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="action=&app_id=419540251399068&container_width=90&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F167%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
            >
              <span style={{ verticalAlign: "bottom", width: 90, height: 28 }}>
                <iframe
                  name="f867e3a09d353f27c"
                  width="1000px"
                  height="1000px"
                  data-testid="fb:like Facebook Social Plugin"
                  title="fb:like Facebook Social Plugin"
                  frameBorder={0}
                  // allowTransparency="true"
                  // allowFullScreen="true"
                  scrolling="no"
                  allow="encrypted-media"
                  src="https://www.facebook.com/plugins/like.php?action=&app_id=419540251399068&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df7ffb37ceec934457%26domain%3Dbatireedui.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fbatireedui.com%252Fff39cfaa7a2050d04%26relation%3Dparent.parent&container_width=90&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F167%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
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
            id="dsq-app9776"
            name="dsq-app9776"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F167%2F123&t_d=%22%D0%9C%D3%A8%D0%9D%D0%A5%20%D0%A2%D0%AD%D0%9D%D0%93%D0%AD%D0%A0%D0%98%D0%99%D0%9D%20%D0%91%D0%98%D0%A7%D0%98%D0%93%22%20%D0%9A%D0%90%D0%9B%D0%9B%D0%98%D0%93%D0%A0%D0%90%D0%A4%D0%98%D0%99%D0%9D%20%D2%AE%D0%97%D0%AD%D0%A1%D0%93%D0%AD%D0%9B%D0%AD%D0%9D%20%D0%9D%D0%AD%D0%AD%D0%93%D0%94%D0%AD%D0%9D%D0%AD&t_t=%22%D0%9C%D3%A8%D0%9D%D0%A5%20%D0%A2%D0%AD%D0%9D%D0%93%D0%AD%D0%A0%D0%98%D0%99%D0%9D%20%D0%91%D0%98%D0%A7%D0%98%D0%93%22%20%D0%9A%D0%90%D0%9B%D0%9B%D0%98%D0%93%D0%A0%D0%90%D0%A4%D0%98%D0%99%D0%9D%20%D2%AE%D0%97%D0%AD%D0%A1%D0%93%D0%AD%D0%9B%D0%AD%D0%9D%20%D0%9D%D0%AD%D0%AD%D0%93%D0%94%D0%AD%D0%9D%D0%AD&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
