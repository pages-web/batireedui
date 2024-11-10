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
        <span style={{ marginRight: "8px" }}>АВСТРАЛИЙН</span>
        <span style={{ marginRight: "8px" }}>ҮНДЭСНИЙ</span>
        <span style={{ marginRight: "8px" }}>ИХ</span>
        <span style={{ marginRight: "8px" }}>СУРГУУЛИЙН</span>
        <span style={{ marginRight: "8px" }}>МОНГОЛ</span>
        <span style={{ marginRight: "8px" }}>СУДЛАЛЫН</span>
        <span style={{ marginRight: "8px" }}>ТӨВИЙН</span>
        <span style={{ marginRight: "8px" }}>АНХНЫ</span>
        <span>ХУРАЛ</span>
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            src="/images/photo/7.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <div>
          Австралийн Үндэсний Их Сургуулийн Монгол Судлалын Төвийн захирал
        </div>
        <div>Ли Нарангоогийн хамт</div>
        <p>
          <Image
            src="/images/photo/11.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <div>
          Элчин сайд Ц.Жамбалдорж болон сайдын гэргий Дуламсүрэнгийн хамт,&nbsp;
        </div>
        <div>
          Канберра хот дах Монгол Улсын Элчин Сайдын Яаманд хурлын дараа
          2011/11/25
        </div>
        <p>
          <Image
            src="/images/photo/10.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <p>
          <span>
            Элчин сайд Ц.Жамбалдорж, Ли Нарангоо, Игор дэ Рахевилз нарын хамт
          </span>
        </p>
        <p>
          <Image
            src="/images/photo/1.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <div>Mongolian first Ambassador to Australia&nbsp;</div>
        <div>HE Tserendorj JAMBALDORJ opened the conference</div>
        <p>
          <Image
            src="/images/photo/2.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <p>
          <span>Монгол судлалаар ажилладаг, монголыг сонирхдог,</span>
          <br />
          <span>монголыг дэмжигч 30 гаруй хүн оролцлоо</span>
        </p>
        <p>
          <Image
            src="/images/photo/6.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <p>
          <span>Хуралд оролцогч хэсэг нөхдийн хамт</span>
        </p>
        <p>
          <Image
            src="/images/photo/3.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <p>
          <span>
            &nbsp;Professor D.TUMEN giving lecture on archeology studies in
            Mongolia
          </span>
        </p>
        <p>
          <Image
            src="/images/photo/5.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <span>
            Австралийн алдарт монголч эрдэмтэн Игор Дэ Рахевилз гуайн хамт
          </span>
        </p>
        <p>
          <Image
            src="/images/photo/9.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <p>
          <span>
            Профессор Игор Дэ Рахевилз гуай хурлыг дүгнэж &quot;Миний АҮИС-д
            Монгол судлалын төв нээх хүсэл мөрөөдөл өнөөдөр хүрч биелсэнд тун
            урамтай байна&quot; хэмээн сэтгэлийн үгээ хэллээ.
          </span>
        </p>
        <p>
          <Image
            src="/images/photo/4.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <p>
          <span>
            Монгол судлалын хурал АҮИС-ийн Хэдли Бүлл Төв (Hedley Bull Centre)-д
            болсон юм
          </span>
        </p>
        <p>
          <Image
            src="/images/photo/8.jpg"
            width={400}
            height={350}
            alt=""
            style={{ float: "none", display: "inline", width: 400 }}
          />
        </p>
        <p>
          <span>Профессор Д.Түмэн, Игор Дэ Рахевилз нар хурлын үеэр</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.11.25</div>
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
                id="I0_1730390694994"
                name="I0_1730390694994"
                src="https://apis.google.com/u/0/se/0/_/+1/fastbutton?usegapi=1&size=medium&count=true&origin=http%3A%2F%2Fbatireedui.com&url=http%3A%2F%2Fbatireedui.com%2Fpost%2F158%2F&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.N4A9eqvTwsI.O%2Fam%3DAACA%2Fd%3D1%2Frs%3DAHpOoo_O6fwbR1aR8YHQkB3I0FTV0L0UIA%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh&id=I0_1730390694994&_gfid=I0_1730390694994&parent=http%3A%2F%2Fbatireedui.com&pfname=&rpctoken=10296262"
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
              data-href="http://batireedui.com/post/158/"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="action=&app_id=419540251399068&container_width=90&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F158%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
            >
              <span style={{ verticalAlign: "bottom", width: 90, height: 28 }}>
                <iframe
                  name="fb0b93f82f34b1a1e"
                  width="1000px"
                  height="1000px"
                  data-testid="fb:like Facebook Social Plugin"
                  title="fb:like Facebook Social Plugin"
                  frameBorder={0}
                  // allowTScransparency="true"
                  // allowFullreen="true"
                  scrolling="no"
                  allow="encrypted-media"
                  src="https://www.facebook.com/plugins/like.php?action=&app_id=419540251399068&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dff9425ad999629a73%26domain%3Dbatireedui.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fbatireedui.com%252Ffa77a3b41041d89a9%26relation%3Dparent.parent&container_width=90&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F158%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
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
            id="dsq-app7625"
            name="dsq-app7625"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F158%2F123&t_d=%D0%90%D0%92%D0%A1%D0%A2%D0%A0%D0%90%D0%9B%D0%98%D0%99%D0%9D%20%D2%AE%D0%9D%D0%94%D0%AD%D0%A1%D0%9D%D0%98%D0%99%20%D0%98%D0%A5%20%D0%A1%D0%A3%D0%A0%D0%93%D0%A3%D0%A3%D0%9B%D0%98%D0%99%D0%9D%20%D0%9C%D0%9E%D0%9D%D0%93%D0%9E%D0%9B%20%D0%A1%D0%A3%D0%94%D0%9B%D0%90%D0%9B%D0%AB%D0%9D%20%D0%A2%D3%A8%D0%92%D0%98%D0%99%D0%9D%20%D0%90%D0%9D%D0%A5%D0%9D%D0%AB%20%D0%A5%D0%A3%D0%A0%D0%90%D0%9B&t_t=%D0%90%D0%92%D0%A1%D0%A2%D0%A0%D0%90%D0%9B%D0%98%D0%99%D0%9D%20%D2%AE%D0%9D%D0%94%D0%AD%D0%A1%D0%9D%D0%98%D0%99%20%D0%98%D0%A5%20%D0%A1%D0%A3%D0%A0%D0%93%D0%A3%D0%A3%D0%9B%D0%98%D0%99%D0%9D%20%D0%9C%D0%9E%D0%9D%D0%93%D0%9E%D0%9B%20%D0%A1%D0%A3%D0%94%D0%9B%D0%90%D0%9B%D0%AB%D0%9D%20%D0%A2%D3%A8%D0%92%D0%98%D0%99%D0%9D%20%D0%90%D0%9D%D0%A5%D0%9D%D0%AB%20%D0%A5%D0%A3%D0%A0%D0%90%D0%9B&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
