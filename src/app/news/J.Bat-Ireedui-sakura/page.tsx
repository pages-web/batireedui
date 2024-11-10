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
        <span>&quot;САКУРА&quot;</span>
      </h1>
      <div className="post_content_full">
        <p>
          <span style={{ color: "#000a83" }}>
            <Image
              src="/images/imagesCALI0NF6.jpg"
              alt=""
              width={120}
              height={106}
              style={{
                float: "none",
                display: "inline",
                width: 120,
                marginRight: 10,
              }}
            />
          </span>
        </p>
        <p>
          <span style={{ color: "#000a83" }}>Санаа алдахад нь</span>
        </p>
        <p>
          <span style={{ color: "#000a83" }}>
            Санаашраад догдлоно чинээ бодсонгүй,
          </span>
          <br />
          <span style={{ color: "#000a83" }}>Салаад унахад нь</span>
          <br />
          <span style={{ color: "#000a83" }}>
            Салхинд хийснэ чинээ санасангүй.
          </span>
          <br />
          <span style={{ color: "#000a83" }}>
            Бороо минь чи түүн дээр бүү дус
          </span>
          <br />
          <span style={{ color: "#000a83" }}>
            Дуслыг чинь тэр даахгүй, хүнддэнэ.
          </span>
          <br />
          <span style={{ color: "#000a83" }}>
            Салхи минь чи түүнийг бүү сэв,
          </span>
          <br />
          <span style={{ color: "#000a83" }}>
            Сэвшээг тэнь тэр тэвчихгүй, хөнгөдөнө.
          </span>
          <br />
          <span style={{ color: "#000a83" }}>Харин Хайрыг чинь даана,</span>
          <br />
          <span style={{ color: "#000a83" }}>Харцыг чинь даана,</span>
          <br />
          <span style={{ color: "#000a83" }}>Ухаанд тань уярна,</span>
          <br />
          <span style={{ color: "#000a83" }}>Уучид чинь баярлана.</span>
          <br />
          <span style={{ color: "#000a83" }}>Богино настай юм аа</span>
          <br />
          <span style={{ color: "#000a83" }}>Хорвоод ганц хоног л дээ.</span>
          <br />
          <span style={{ color: "#000a83" }}>Бодол муутай юм аа</span>
          <br />
          <span style={{ color: "#000a83" }}>Хайранд ганцхан дасаг л дээ.</span>
          <br />
          <span style={{ color: "#000a83" }}>Урт насгүй юмаа</span>
          <br />
          <span style={{ color: "#000a83" }}>Уярч ганц хоног л дээ</span>
          <br />
          <span style={{ color: "#000a83" }}>Ухаан муутай юм аа</span>
          <br />
          <span style={{ color: "#000a83" }}>
            Уйлж байгаад тайтгараг л дээ.
          </span>
          <br />
          <span style={{ color: "#000a83" }}>Харин Хайрыг чинь даана,</span>
          <br />
          <span style={{ color: "#000a83" }}>Харцыг чинь даана,</span>
          <br />
          <span style={{ color: "#000a83" }}>Ухаанд тань уярна,</span>
        </p>
        <p>
          <span style={{ color: "#000a83" }}>Уучид чинь баярлана.</span>
        </p>
        <p>
          <span style={{ color: "#000a83" }}>Хорвоод ирсэнийх.</span>
        </p>
        <p style={{ textAlign: "right" }}>
          <span style={{ color: "#000a83" }}>Б.Ирээдүй,&nbsp;2009.03.24</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,<a href="/sidebar/shuleg-min/">ШҮЛЭГ МИНЬ</a>
      </div>
      <div className="post_info_full right">2009.03.24</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/100/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "САКУРА"   '
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/100/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "САКУРА"   '
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/100/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "САКУРА"   '
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/100/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "САКУРА"   '
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/100/"
          st_title='Ж.БАТ-ИРЭЭДҮЙ: "САКУРА"   '
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app644"
            name="dsq-app644"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F100%2F123&t_d=%D0%96.%D0%91%D0%90%D0%A2-%D0%98%D0%A0%D0%AD%D0%AD%D0%94%D2%AE%D0%99%3A%20%22%D0%A1%D0%90%D0%9A%D0%A3%D0%A0%D0%90%22&t_t=%D0%96.%D0%91%D0%90%D0%A2-%D0%98%D0%A0%D0%AD%D0%AD%D0%94%D2%AE%D0%99%3A%20%22%D0%A1%D0%90%D0%9A%D0%A3%D0%A0%D0%90%22&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
