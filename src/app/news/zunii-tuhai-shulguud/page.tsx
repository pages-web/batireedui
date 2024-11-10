import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
          lineHeight: "1.5",
        }}
      >
        <span style={{ marginRight: "8px" }}>ЗУНЫ</span>
        <span style={{ marginRight: "8px" }}>ТУХАЙ</span>
        <span>ШҮЛГҮҮД</span>
      </h1>
      <div className="post_content_full">
        <p>
          <Image
            src="/images/images.jpg"
            alt=""
            width={300}
            height={200}
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <span style={{ color: "#000a83" }}>
            А.Эрдэнэ-Очир: &quot;ЗУНЫ ШӨНӨ&quot;
          </span>
          <br />
          <br />
          Хөнжлөө бага зэрэг яраад
          <br />
          Хөлийг нь салхи шүргээд
          <br />
          Айлын бүсгүй гадаа унтана
          <br />
          Цэнхэр амьсгал салхиар надад ирээд
          <br />
          Цээж нь жаахан товойж харагдаад
          <br />
          Айлын бүсгүй гадаа унтана&nbsp;
          <br />
          <br />
          <span style={{ color: "#000a83" }}>
            Б.Лхагвасүрэн: &quot;ЗУНЫ ИХ ҮД&quot;
          </span>
          <br />
          <br />
          Тээрсэн нохой гэрийн сүүдэрт
          <br />
          Тэнийлгэсэн арьс шиг сунайна
          <br />
          Саамандаа цохиулсан унага
          <br />
          Сагагаа эрүүлэн унтана
          <br />
          Нумын бөгтрөг шиг майга хөлтэй хүүхэд
          <br />
          Нүцгэн ходоогоо гарган зогсоно
          <br />
          Хоёр хөлөн дундуур нь&nbsp;
          <br />
          Холоо саахалтын гурван гэр харагдана
          <br />
          Саяхан эндээс айрганд халамцсан эр
          <br />
          Солгой хоолойгоор &quot;ар хөвч&quot; дуулан бүдгэрнэ
          <br />
          Аяын салхи, адууны салхи хоёрын сэвэлзээнд
          <br />
          Ааруул дээрх элээний үргээлгэ дэрвэнэ
          <br />
          Манхны оройгоос
          <br />
          Шар утаа савсаж
          <br />
          Майхны баадангаас
          <br />
          Даалимбаны хиншүү ханхална
          <br />
          Оодонгийн улаан тугалнууд
          <br />
          &quot;Огинскийн полонез&quot; бүжиглэнэ.
          <br />
          <br />
          <span style={{ color: "#000a83" }}>
            Э.Хархүү: &quot;НОГООН ЗУН&quot;
          </span>
          <br />
          <br />
          Морьдын туурай нэл ногоон
          <br />
          Монголын минь зун цэл ногоон
          <br />
          Хуурай аргалгүй нов ногоон
          <br />
          Худгийн ус л цэв хүйтэн.
          <br />
          Цэнхэр хүмүүл шүүс дуслах халаг
          <br />
          Цээлийн нуур дуу аялах халаг
          <br />
          Оонын зоо улаа шаргалтана
          <br />
          Орчлонгийн гоо ухаан саруулсгана
          <br />
          Хүрэн элээ шон дээр зүүрмэглэнэ
          <br />
          Хөгшин халтар сүүдэрт нойрмоглоно
          <br />
          Хултай айраг үсчин шуугина
          <br />
          Хувинтай тараг өөдөө сагана
          <br />
          Ботгоны хошуу нов ногоон
          <br />
          Босгын хөв дүв дүүрэн
          <br />
          Хунгийн дуунд нулимс алдуурна
          <br />
          Хуурын эгшигэнд уулс мансуурна
          <br />
          Атан тэмээнд сүмбэн ширээ
          <br />
          Аргалын зоо хамбан ухаа
          <br />
          Хонины хоргол нов ногоон
          <br />
          Хоолны дэрс морь далдрам
          <br />
          Гүвээ толгод ногоорон дүнсийнэ
          <br />
          Гүүний дэлэн дорхноо чинэнэ
          <br />
          Агар хувинд саам хөөсрөөстэй
          <br />
          Айлын бүсгүй цангинасан инээдтэй
          <br />
          Цагаан гэрийн хаяа шуулттай
          <br />
          Цавьдар хээрийн жолоо сойлттой
          <br />
          Морьдын туурай нэл ногоон
          <br />
          Монголын зун цэл ногоон
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,<a href="/sidebar/shuleg-min/">ШҮЛЭГ МИНЬ</a>
      </div>
      <div className="post_info_full right">2012.03.24</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/176/"
          st_title="ЗУНЫ ТУХАЙ ШҮЛГҮҮД"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/176/"
          st_title="ЗУНЫ ТУХАЙ ШҮЛГҮҮД"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/176/"
          st_title="ЗУНЫ ТУХАЙ ШҮЛГҮҮД"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/176/"
          st_title="ЗУНЫ ТУХАЙ ШҮЛГҮҮД"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/176/"
          st_title="ЗУНЫ ТУХАЙ ШҮЛГҮҮД"
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app3704"
            name="dsq-app3704"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F176%2F123&t_d=%D0%97%D0%A3%D0%9D%D0%AB%20%D0%A2%D0%A3%D0%A5%D0%90%D0%99%20%D0%A8%D2%AE%D0%9B%D0%93%D2%AE%D2%AE%D0%94%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=%D0%97%D0%A3%D0%9D%D0%AB%20%D0%A2%D0%A3%D0%A5%D0%90%D0%99%20%D0%A8%D2%AE%D0%9B%D0%93%D2%AE%D2%AE%D0%94%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
