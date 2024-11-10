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
        <span>BRAIN</span>
        <span>ADAMS</span>
      </h1>
      <div className="post_content_full">
        <div style={{ textAlign: "justify" }}>
          <strong>
            <Image
              width={200}
              height={200}
              src="/images/images11.jpg"
              alt=""
              style={{
                float: "left",
                display: "inline",
                width: 200,
                marginRight: 10,
              }}
            />
            ЭНЭ ХӨГЖМИЙН ЕРТӨНЦӨД ЯМАР НЭГЭН ОРОН ЗАЙ ЭЗЛЭЖ БАЙГААГАА БИ МЭДДЭГ,
            МЭДЭРДЭГ. ХЭРЭВ БИ ЭНЭ ЕРТӨНЦӨД АМЖИЛТ ОЛООГҮЙ БОЛ ЯАХ БАЙСАН ЮМ,
            БҮҮ МЭД. ЯМАР Ч БАЙСАН НЭГ ЗҮЙЛ ХИЙХ Л БАЙСАН БАЙХ. ХӨГЖМИЙН
            ДЭЛГҮҮРТ АЖИЛ ОЛОХ ЮМ УУ, ДОР ХАЯЖ НЭГ ХАМТЛАГТ ТОГЛОХ БАЙХ. ЗА ЯМАР
            Ч БАЙСАН ХЭЗЭЭ Ч ОД БОЛОХГҮЙ Л БАЙСАН.
          </strong>
        </div>
        <p style={{ textAlign: "justify" }}>
          <br />
          <span>
            I always knew I&apos;d be in music in some sort of capacity. I
            didn&apos;t know if I&apos;d be successful at it, but I knew
            I&apos;d be doing something in it. Maybe get a job in a record
            store. Maybe even play in a band. I never got into this to be a
            star.
          </span>
          <br />
          <br />
          <span>Bryan Adam 1959 оны 11 сарын 5 нд төрсөн.</span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,
      </div>
      <div className="post_info_full right">2009.12.26</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/59/"
          st_title="BRAIN ADAMS"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/59/"
          st_title="BRAIN ADAMS"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/59/"
          st_title="BRAIN ADAMS"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/59/"
          st_title="BRAIN ADAMS"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/59/"
          st_title="BRAIN ADAMS"
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app5397"
            name="dsq-app5397"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F59%2F123&t_d=BRAIN%20ADAMS%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=BRAIN%20ADAMS%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
