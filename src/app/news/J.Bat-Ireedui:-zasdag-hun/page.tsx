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
        <span style={{ marginRight: "4px" }}>Ж.БАТ-ИРЭЭДҮЙ:</span>
        <span style={{ marginRight: "4px" }}>&quot;ЗАСДАГ</span>
        <span>ХҮН&quot;</span>
      </h1>
      <div className="post_content_full">
        <div style={{ textAlign: "justify" }}>
          <span style={{ color: "#000a83" }}>
            <Image
              src="/images/zasdaghun.png"
              alt=""
              width={300}
              height={366}
              style={{
                float: "left",
                display: "inline",
                width: 300,
                marginRight: 10,
              }}
            />
            Багш аа, засдаг хүн гэж юу гэсэн утгатай юм бэ, миний толинуудаас
            олддоггүй гэж Японд соёл судлалаар сурч байгаа нэг монгол оюутан
            утасдаж байна. Хуучин утга зохиол уншиж байгаа бололтой юм аа, овоо
            шүү баярлаж байлаа. Сүүлийн үеийн юманд бол энэ үг байхгүй л дээ.
          </span>
        </div>
        <div style={{ textAlign: "justify" }}>
          <span style={{ color: "#000a83" }}>
            Засдаг хүн гэхээр одоогийн хүүхдүүд аягүй бол ойлгохгүй байх аа.
            Аягүй бол ч юу байхав ерөөсөө ойлгохгүй болоод л асууж байгаа.
            Иймэрхүү хуучины сайхан үгсийг манай залуучууд мэдмээр, сурмаар. Энэ
            бол гагц тэр “куули муил засчикдаг күн” буюу тэгэж засах эрктэй
            хуульзүйн сайд майдын тухай биш л дээ. Монгол хэлэнд салаа утга гэж
            нэг юм байна. Монголчууд хуурмаг зантай, нүүрэн дээрээ инээчихээд
            цаашаа харахаар муу хэлдэг, хуурмаг зантай, ёстой нөгөө “хэлэн дээр
            нь чихэр, шилэн дээр нь хутга” тавьдаг хүнийг ийн засдаг хүн хэмээн
            нэрлэдэг юм. Яг энэ үгний хувьд энэ бол цөм утга нь.
          </span>
        </div>
        <div style={{ textAlign: "justify" }}>
          <span style={{ color: "#000a83" }}>
            “Монгол хэлний дэлгэрэнгүй тайлбар толь” (Уб., 2008) -д “засдаг
            гэдэг үгийг “Сайхан царайлж байгаад худал үг хавчуулж, хуурмаг
            аашлах зантай”, засдаглах гэдэг үгийг “сайхан үг хэлж бусдыг хууран
            мэхлэх, зориуд худал ташаагаар мэхлэх” (Д-Л, 992-р хуудас) гэж яг
            дээрхтэй ойролцоо утгаар тайлсан байна. Засдаг хүн захаас аваад бий.
            Маний, бидний эргэн тойронд ч байсан, одоо ч байж л байгаа. Гэхдээ
            энэ их явуургүй зан.
          </span>
        </div>
        <div style={{ textAlign: "justify" }}>
          <span style={{ color: "#000a83" }}>
            Ингээд засдаг хүн гэдэгт хууль мууль засдаг нь ч багтана, хууль бус
            юм хийдэг гэдэг утгаар, худал хуурмаг зантай нь ч багтана, хуурч
            залилах гэсэн утгаар, хувцас хунар засдаг нь ч багтана, засаж
            залруулах, тохирууулж тааруулах гэсэн утгаар, дүү минь. Хамгийн гол
            нь хуурамч, худалч засдаг хүнээс хол бай.&nbsp;
          </span>
        </div>
        <div style={{ textAlign: "justify" }}>&nbsp;</div>
        <div style={{ textAlign: "justify" }}>&nbsp;</div>
        <div style={{ textAlign: "justify" }}>&nbsp;</div>
        <div style={{ textAlign: "justify" }}>&nbsp;</div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,
      </div>
      <div className="post_info_full right">2012.02.15</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/116/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ЗАСДАГ ХҮН"'
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/116/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ЗАСДАГ ХҮН"'
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/116/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ЗАСДАГ ХҮН"'
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/116/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ЗАСДАГ ХҮН"'
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/116/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ЗАСДАГ ХҮН"'
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app3714"
            name="dsq-app3714"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F116%2F123&t_d=%D0%96.%D0%91%D0%90%D0%A2-%D0%98%D0%A0%D0%AD%D0%AD%D0%94%D2%AE%D0%99%3A%20%22%D0%97%D0%90%D0%A1%D0%94%D0%90%D0%93%20%D0%A5%D2%AE%D0%9D%22&t_t=%D0%96.%D0%91%D0%90%D0%A2-%D0%98%D0%A0%D0%AD%D0%AD%D0%94%D2%AE%D0%99%3A%20%22%D0%97%D0%90%D0%A1%D0%94%D0%90%D0%93%20%D0%A5%D2%AE%D0%9D%22&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
