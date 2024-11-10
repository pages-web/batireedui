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
        <span>William</span>
        <span>Blake</span>
      </h1>
      <div className="post_content_full">
        <div>
          <strong>
            <Image
              src="/images/imagesCAH7KHJ7.jpg"
              alt=""
              width={118}
              height={145}
              style={{
                float: "left",
                display: "inline",
                width: 118,
                marginRight: 10,
              }}
            />
            Дайсныг мартах нь найзаа мартахаас амархан.
          </strong>
        </div>
        <p>
          <br />
          <span>It is easier to forgive an enemy than forgive a friend.</span>
          <br />
          <br />
          <span>
            William Blake 1757 оны 11 сарын 28 нд төрж, 1827 оны 8 сарын 12 нд
            нас баржээ.
          </span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,<a href="/sidebar/temdeglel/">ТЭМДЭГЛЭЛ</a>
      </div>
      <div className="post_info_full right">2009.12.18</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/61/"
          st_title="William Blake"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/61/"
          st_title="William Blake"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/61/"
          st_title="William Blake"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/61/"
          st_title="William Blake"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/61/"
          st_title="William Blake"
        />
      </div> */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app5401"
            name="dsq-app5401"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F61%2F123&t_d=William%20Blake%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=William%20Blake%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
