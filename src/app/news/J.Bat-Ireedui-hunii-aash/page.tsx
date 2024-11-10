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
        <span>Ж.БАТ-ИРЭЭДҮЙ:</span>
        <span>&quot;ХҮНИЙ</span>
        <span>ААШ&quot;</span>
      </h1>
      <div className="post_content_full">
        <div>
          <Image
            width={200}
            height={200}
            src="/images/imagesCAHUIKB1.jpg"
            alt=""
            style={{
              float: "left",
              display: "inline",
              width: 200,
              marginRight: 10,
            }}
          />
          <span style={{ color: "#000a83" }}>
            Асгартал орохоор үерлэлээ гэх,
          </span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>
            Аашлаж загнахаар агсарлаа гэх юм
          </span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Дуутай тэнгэрийг хургүй гэх,</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>
            Дурласан залууг сохор гэх юм.
          </span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Навч унахаар намар гэх</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Намайг унахаар чамайг гэх.</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Нар гарахаар халлаа гэх,</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>
            Нас явахаар хөгширлөө гэх юм.
          </span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Орохлоор норлоо гэх юм</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Очихлоор ирлээ гэх юм</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Салхилахаар шуурлаа гэх,</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Санахлаар худлаа гэх юм.</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Хүйтрэхээр даарлаа гэх,</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Хүлээхээр хэрэггүй гэх юм</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Халахаар салхи гэх,</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Хайрлахаар хар гэх юм.</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Шиврэхлээр дээлээ гэх,</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Шивнэхлээр үгээ гэх юм.</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Шуурахаар шороо гэх</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Шулуудахаар уравлаа гэх</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>Хүсэл нь хэзээ биелэхгүй</span>
        </div>
        <div>
          <span style={{ color: "#000a83" }}>
            Хүний ааш тэнгэрийн аашнаас төө илүү.
          </span>
        </div>
        <div style={{ textAlign: "right" }}>
          <span style={{ color: "#000a83" }}>J.Ireedui, 22.06.2009</span>
        </div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,<a href="/sidebar/shuleg-min/">ШҮЛЭГ МИНЬ</a>
      </div>
      <div className="post_info_full right">2009.06.22</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/94/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ХҮНИЙ ААШ"'
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/94/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ХҮНИЙ ААШ"'
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/94/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ХҮНИЙ ААШ"'
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/94/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ХҮНИЙ ААШ"'
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/94/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "ХҮНИЙ ААШ"'
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app642"
            name="dsq-app642"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F94%2F123&t_d=%D0%96.%D0%91%D0%90%D0%A2-%D0%98%D0%A0%D0%AD%D0%AD%D0%94%D2%AE%D0%99%3A%20%22%D0%A5%D2%AE%D0%9D%D0%98%D0%99%20%D0%90%D0%90%D0%A8%22&t_t=%D0%96.%D0%91%D0%90%D0%A2-%D0%98%D0%A0%D0%AD%D0%AD%D0%94%D2%AE%D0%99%3A%20%22%D0%A5%D2%AE%D0%9D%D0%98%D0%99%20%D0%90%D0%90%D0%A8%22&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
