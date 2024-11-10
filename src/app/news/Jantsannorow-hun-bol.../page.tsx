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
        <span>Жанцанноров</span>
        <span>бол</span>
        <span>хүн</span>
        <span>биш</span>
      </h1>
      <div className="post_content_full">
        <div style={{ textAlign: "justify" }} className="items-center">
          <span>
            <span>
              <span>
                <Image
                  src="/images/Jantsannorbu.jpg"
                  alt=""
                  width={150}
                  height={282}
                  style={{
                    float: "left",
                    display: "inline",
                    width: 150,
                    marginRight: 10,
                  }}
                />
                Төрийн соёрхолт, Ардын жүжигчин Дэндэвийн Пүрэвдорж гэж цагийг
                эзэлсэн их хүмүүн бидний дунд амьдарч байлаа. Хорвоогоос хэдийнэ
                хальсан ч бичиж туурвисан уран бүтээл нь өнөө ч амьдарч, онгод
                цадиг нь үргэлжлэн асч яваа буурал найрагч амьд ахуйдаа цөөн
                хүнийг “тоодог” байж. Тэдний нэг нь нутгийн дүү Жанцанноров
                гэнэ. Үүнийг нотлох нэгэн жишээ зохиолчдын хороогоор ам дамжин
                яригдах аж. Учир юу хэмээвээс нэг өдөр Пүрэвдорж гуай руу
                Жанцанноров гуай залгаад “Байна уу, Би Жанцанноров гэдэг хүн
                байна аа” гэхэд “Чи чинь хүн биш шүү дээ” гэж их найрагч хачин
                хариу барьж. “За би яахаараа хүн биш болчихов” гэж их хөгжмийн
                зохиолчийг даруухан инээхэд “Чи чинь бурхан шүү дээ” гэсэн
                гэдээг.
              </span>
            </span>
          </span>
        </div>
        <div style={{ textAlign: "justify" }}>
          <br />
          <strong>Д.Зоригт Zindaa.mn</strong>
        </div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,<a href="/sidebar/temdeglel/">ТЭМДЭГЛЭЛ</a>
      </div>
      <div className="post_info_full right">2011.03.04</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/199/"
          st_title="Жанцанноров бол хүн биш"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/199/"
          st_title="Жанцанноров бол хүн биш"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/199/"
          st_title="Жанцанноров бол хүн биш"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/199/"
          st_title="Жанцанноров бол хүн биш"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/199/"
          st_title="Жанцанноров бол хүн биш"
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app5395"
            name="dsq-app5395"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F199%2F123&t_d=%D0%96%D0%B0%D0%BD%D1%86%D0%B0%D0%BD%D0%BD%D0%BE%D1%80%D0%BE%D0%B2%20%D0%B1%D0%BE%D0%BB%20%D1%85%D2%AF%D0%BD%20%D0%B1%D0%B8%D1%88&t_t=%D0%96%D0%B0%D0%BD%D1%86%D0%B0%D0%BD%D0%BD%D0%BE%D1%80%D0%BE%D0%B2%20%D0%B1%D0%BE%D0%BB%20%D1%85%D2%AF%D0%BD%20%D0%B1%D0%B8%D1%88&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
