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
        }}
      >
        <span style={{ marginRight: "4px" }}>БАС</span>
        <span style={{ marginRight: "4px" }}>НЭГЭН</span>
        <span>ХОББИ</span>
      </h1>
      <div className="post_content_full">
        <div>
          <span>
            Та бүхэнд 2011 оны 9 дүгээр сарын 04-07 нд болсон &quot;МАНЖИЙН
            ҮЕИЙН МОНГОЛЫН ТҮҮХ БИЧЛЭГ, АРХИВЫН БАРИМТ&quot; олон улсын эрдэм
            шинжилгээний бага хурлын үеэр 9 дүгээр сарын 7 ний өдөр Бонн хотод
            Германы монголч эрдэмтэдтэй сууж оройг зоог барихад зурж өөрсдөөр нь
            &quot;хүлээн зөвшөөрүүлж&quot; гарын үсэг зуруулсан нөхөрсөг шогоо
            үзүүлсү. Иймэрхүү болсон болоогүй шог зураг их бий.
          </span>
        </div>
        <div>
          <span>1. Нэрт монгол судлаач, Профессор Клаус Сагастер гуай</span>
        </div>
        <div>
          <span>2. Клаус Ходи, Монгол Улсад Элчин сайд бөлгөө</span>
        </div>
        <div>
          <span>3. Женс Томас, Бонны Их Сургуулийн монгол хэлний багш</span>
        </div>
        <div>
          <span>
            4. Тэнд цугласан Германы болон Монголын эрдэмтдийн гарын үсэг
          </span>
        </div>
        <div>
          <span>
            <br />
          </span>
        </div>
        <div>
          <span>
            <Image
              width={500}
              height={535}
              src="/images/1000.jpg"
              alt=""
              style={{ float: "none", display: "inline", width: 500 }}
            />
            <br />
          </span>
        </div>
        <div>
          <span>
            <br />
          </span>
        </div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,
      </div>
      <div className="post_info_full right">2011.11.16</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/161/"
          st_title="БАС НЭГЭН ХОББИ"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/161/"
          st_title="БАС НЭГЭН ХОББИ"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/161/"
          st_title="БАС НЭГЭН ХОББИ"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/161/"
          st_title="БАС НЭГЭН ХОББИ"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/161/"
          st_title="БАС НЭГЭН ХОББИ"
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app5381"
            name="dsq-app5381"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F161%2F123&t_d=%D0%91%D0%90%D0%A1%20%D0%9D%D0%AD%D0%93%D0%AD%D0%9D%20%D0%A5%D0%9E%D0%91%D0%91%D0%98%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%91%D0%90%D0%A1%20%D0%9D%D0%AD%D0%93%D0%AD%D0%9D%20%D0%A5%D0%9E%D0%91%D0%91%D0%98%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
