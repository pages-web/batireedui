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
        <span>Luciano</span>
        <span>Pavarotti</span>
      </h1>
      <div className="post_content_full">
        <p>
          <strong>
            <span>
              <Image
                width={81}
                height={133}
                src="/images/images6.jpg"
                alt=""
                style={{
                  float: "left",
                  display: "inline",
                  width: 81,
                  marginRight: 10,
                }}
              />
              ХӨГЖИМ СОНСОХОД ТАНД ӨӨР УУРАГ ТАРХИ ХЭРЭГГҮЙ.
            </span>
          </strong>
          <br />
          <span>You don&apos;t need any brains to listen to music.</span>
          <br />
          <br />
          <span>
            Luciano Pavarotti 1935 оны 10 сарын 2007 оны 9 сарын 6 нд өнгөрсөн.
          </span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,
      </div>
      <div className="post_info_full right">2009.12.12</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/60/"
          st_title="Luciano Pavarotti"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/60/"
          st_title="Luciano Pavarotti"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/60/"
          st_title="Luciano Pavarotti"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/60/"
          st_title="Luciano Pavarotti"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/60/"
          st_title="Luciano Pavarotti"
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app632"
            name="dsq-app632"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F60%2F123&t_d=Luciano%20Pavarotti%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=Luciano%20Pavarotti%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
