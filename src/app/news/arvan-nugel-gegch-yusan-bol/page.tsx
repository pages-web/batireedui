import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "18px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ marginRight: "8px" }}>АРВАН</span>
        <span style={{ marginRight: "8px" }}>ХАР</span>
        <span style={{ marginRight: "8px" }}>НҮГЭЛ</span>
        <span style={{ marginRight: "8px" }}>ГЭГЧ</span>
        <span style={{ marginRight: "8px" }}>ЮУСАН</span>
        <span>БОЛ?</span>
      </h1>
      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <span>
            <Image
              src="/images/amarbayasmangas.jpg"
              alt=""
              width={350}
              height={466}
              style={{
                float: "left",
                display: "inline",
                width: 350,
                marginRight: 10,
              }}
            />
            <span style={{ fontSize: 14, color: "#000a83" }}>
              Арван хар нүгэл бол биеэр үйлдэх гурав, амаар үйлдэх гурав,
              сэтгэлээр үйлдэх дөрвөн хар нүгэлээс бүрдэнэ. Биеэр үйлдэх гурван
              хар нүгэлд нь алив амьтны амийг хөнөөх, хулгай дээрэм хийж хүчээр
              бусдын юмыг булаах, хүнийг янз бүрийн хэлбэрээр шулж мөлжин
              доромжлох болой. Ам хэлээр үйлдэх гурван хар нүгэлд, худлаа ярих,
              хов зөөх хоёрыг хутгах, амьтныг аашилж загнаж дээрэлхэж гүжирдэн
              гүтгэх болой. Сэтгэлээр үйлдэх дөрөвт бусдыг илүү үзэн билүү
              долоож,&nbsp;атаархан жөтөөрхөж байж ядах,&nbsp; эд хөрөнгө, эрх
              тушаал, алдар нэрэнд шунан дурлах, амьтанд хар санаж, хажиглан
              сэрдэх, үл итгэх, үмхийгээр хэхрэх ийм дөрвөн нүгэл болой. Ингээд
              арван хар нүгэл бүрдмүй.&nbsp;
            </span>
          </span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,
        <a href="/sidebar/mongol-yos-zanshil/">МОНГОЛ ЁС ЗАНШИЛ</a>
      </div>
      <div className="post_info_full right">2012.02.16</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/141/"
          st_title="АРВАН ХАР НҮГЭЛ ГЭГЧ ЮУСАН БОЛ?"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/141/"
          st_title="АРВАН ХАР НҮГЭЛ ГЭГЧ ЮУСАН БОЛ?"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/141/"
          st_title="АРВАН ХАР НҮГЭЛ ГЭГЧ ЮУСАН БОЛ?"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/141/"
          st_title="АРВАН ХАР НҮГЭЛ ГЭГЧ ЮУСАН БОЛ?"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/141/"
          st_title="АРВАН ХАР НҮГЭЛ ГЭГЧ ЮУСАН БОЛ?"
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app3712"
            name="dsq-app3712"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F141%2F123&t_d=%D0%90%D0%A0%D0%92%D0%90%D0%9D%20%D0%A5%D0%90%D0%A0%20%D0%9D%D2%AE%D0%93%D0%AD%D0%9B%20%D0%93%D0%AD%D0%93%D0%A7%20%D0%AE%D0%A3%D0%A1%D0%90%D0%9D%20%D0%91%D0%9E%D0%9B%3F&t_t=%D0%90%D0%A0%D0%92%D0%90%D0%9D%20%D0%A5%D0%90%D0%A0%20%D0%9D%D2%AE%D0%93%D0%AD%D0%9B%20%D0%93%D0%AD%D0%93%D0%A7%20%D0%AE%D0%A3%D0%A1%D0%90%D0%9D%20%D0%91%D0%9E%D0%9B%3F&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
