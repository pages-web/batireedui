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
        <span style={{ marginRight: "8px" }}>УЛААНБААТАРААС</span>
        <span style={{ marginRight: "8px" }}>КАНБЕРРА</span>
        <span style={{ marginRight: "8px" }}>ОРОХ</span>
        <span>ЗАМД</span>
      </h1>
      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <span>
            Өчигдөр ОМ301 онгоц нисэх гэж хөөрөх зурвасаар хурдалж байгаад гэнэт
            тоормослож зогсох талбай руу эргэснээр 2-3 цагаар хоцорч ниссэнийг
            эс тооцвол сааталгүй цагаараа явсаар Австрали улсын хилийн дээс
            алхлаа.&nbsp;
          </span>
          <br />
          <span>
            Хаврын сар нь арай л дуусаагүй байхад Сидней, Канберра хотод хөл
            тавьлаа. Өнөөдөр энд 17 хэм дулаан сэвэлзүүр зөөлөн салхитай сайхан
            өдөр байна. Хэдийгээр хаврын сар дуусах дөхөж байгаа ч хур бороо
            багатай байсан бололтой ерөнхийдөө жаахан гандуухан харагдана.&nbsp;
          </span>
          <br />
          <span>
            Авсралийн Үндэсний Их Сургууль 1946 онд Их хурлынхаа шийдвэрээр
            байгуулагдсан ганц их сургууль юм. Бусад нь улсын болон орон нутгийн
            засаг захиргааны шийдвэрээр байгуулагддаг байна. АҮИС долоон
            академик коллежтой түүний нэг нь Ази, Номхон далайн коллеж бөгөөд
            энд Түүх, соёл, хэлний сургууль харьяалагддаг бөгөөд энд Монгол
            Судлалын Хүрээлэнг энэ оны 4 дүгээр сард санаачлан байгуулсан.
            Даргаар нь АҮИС-ийн профессор Ли Нарангоо ажиллаж байна.&nbsp;
          </span>
          <br />
          <span>
            МУИС АҮИС-тай энэ оны 4 дүгээр сард Монгол Улсын Ерөнхий сайд
            Сү.Батболдын албан ёсны айлчлалын үеэр хамтын ажиллагааны гэрээ
            байгуулсан билээ. Монгол Судлалын Төв нь энэ удаа Монгол Улсыг
            тунхагласны ойгоор анхныхаа нээлттэй олон улсын эрдэм шинжилгээний
            хурлыг хийж байгаа бөгөөд үүнд МУИС-ийн профессор Д.Түмэн, ШУА-ийн
            ОУСХ-гийн эрдэм шинжилгээний ажилтан, д-р Оохнойн Батсайхан нар
            оролцож байна. Бид өнөөдөр Канберра хотод хүрч ирээд АҮИС-ийн Ази,
            Номхон далайн Коллежийн Түүх, хэл, соёлын сургуулийн захирал
            профессор Кэнт Андерсонтой уулзаж МУИС, АҮИС-ийн хамтын ажиллагааны
            талаар ярилцлаа.&nbsp;
          </span>
          <br />
          <span>
            Маргааш &quot;Mongolian Studies Open Conference (MOSOC)&quot;
            9:00am-5.15pm цагт АҮИС-ийн Hedley Bull Centre-д хуралдана. Канберра
            хотод байдаг монголчууд байвал энэ хурал олонд нээлттэй болохыг
            мэдэгдэж байна.
          </span>
        </p>
        <p>
          <Image
            width={450}
            height={400}
            src="/images/photo/21.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 450 }}
          />
        </p>
        <p>
          <span>АҮИС-ийн Зочны буудал 379 тоот</span>
        </p>
        <p>
          <Image
            width={450}
            height={400}
            src="/images/photo/17.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 450 }}
          />
        </p>
        <p>
          <span>19:10 KE 121 SYDNEY from INCHEON AIRPORT</span>
        </p>
        <p>
          <Image
            width={450}
            height={400}
            src="/images/photo/19.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 450 }}
          />
        </p>
        <p>
          <span>Сиднейн Олон Улсын онгоцны буудал</span>
        </p>
        <p>
          <Image
            width={450}
            height={400}
            src="/images/photo/20.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 450 }}
          />
        </p>
        <p>
          <span>АҮИСургуулийн коллеж</span>
        </p>
        <p>
          <Image
            width={450}
            height={400}
            src="/images/photo/22.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 450 }}
          />
        </p>
        <p style={{ textAlign: "justify" }}>
          <span>
            АҮИС-ийн Соёл, түүх, хэлний сургуулийн захирал, профессор Кэнт
            Андерсон (зүүн гар тал буй) , Монгол Судлалын Төвийн захирал Ли
            Нарангоо (баруун гар талд буй) болон профессор Жак Феннер (ард буй)
            зэрэг бусад эрдэмтэдтэй уулзаж МУИС, АҮИС-ийн цаашдын хамтын
            ажиллагаа, оюутан, багш солилцох асуудлаар ярилцаж зөвлөлдөв.
          </span>
        </p>
        <p>
          <Image
            width={450}
            height={400}
            src="/images/photo/16.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 450 }}
          />
        </p>
        <p>
          <span>
            &nbsp;Нэгэнд нь эвдрэл гарахад солиод унах унаатай болсон байна
            билээ шүү
          </span>
        </p>
        <p>&nbsp;</p>
        <p>
          <Image
            width={450}
            height={400}
            src="/images/photo/18.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 450 }}
          />
        </p>
        <p>
          <span>Хил гааль нь сүрхий чанга юм</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2011.11.23</div>
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
                id="I0_1730390696718"
                name="I0_1730390696718"
                src="https://apis.google.com/u/0/se/0/_/+1/fastbutton?usegapi=1&size=medium&count=true&origin=http%3A%2F%2Fbatireedui.com&url=http%3A%2F%2Fbatireedui.com%2Fpost%2F160%2F&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.N4A9eqvTwsI.O%2Fam%3DAACA%2Fd%3D1%2Frs%3DAHpOoo_O6fwbR1aR8YHQkB3I0FTV0L0UIA%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh&id=I0_1730390696718&_gfid=I0_1730390696718&parent=http%3A%2F%2Fbatireedui.com&pfname=&rpctoken=99315152"
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
              data-href="http://batireedui.com/post/160/"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="action=&app_id=419540251399068&container_width=90&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F160%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
            >
              <span style={{ verticalAlign: "bottom", width: 90, height: 28 }}>
                <iframe
                  name="fd94f090600766eef"
                  width="1000px"
                  height="1000px"
                  data-testid="fb:like Facebook Social Plugin"
                  title="fb:like Facebook Social Plugin"
                  frameBorder={0}
                  // allowTransparency="true"
                  // allowFullScreen="true"
                  scrolling="no"
                  allow="encrypted-media"
                  src="https://www.facebook.com/plugins/like.php?action=&app_id=419540251399068&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df842de201a4989cb6%26domain%3Dbatireedui.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fbatireedui.com%252Ffac84a18f38bdac81%26relation%3Dparent.parent&container_width=90&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F160%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
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
            id="dsq-app7528"
            name="dsq-app7528"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F160%2F123&t_d=%D0%A3%D0%9B%D0%90%D0%90%D0%9D%D0%91%D0%90%D0%90%D0%A2%D0%90%D0%A0%D0%90%D0%90%D0%A1%20%D0%9A%D0%90%D0%9D%D0%91%D0%95%D0%A0%D0%A0%D0%90%20%D0%9E%D0%A0%D0%9E%D0%A5%20%D0%97%D0%90%D0%9C%D0%94&t_t=%D0%A3%D0%9B%D0%90%D0%90%D0%9D%D0%91%D0%90%D0%90%D0%A2%D0%90%D0%A0%D0%90%D0%90%D0%A1%20%D0%9A%D0%90%D0%9D%D0%91%D0%95%D0%A0%D0%A0%D0%90%20%D0%9E%D0%A0%D0%9E%D0%A5%20%D0%97%D0%90%D0%9C%D0%94&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
