import React from "react";

const Page = () => {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1
        style={{
          fontSize: "24px",
          lineHeight: "1.5",
          display: "flex",
          gap: "5px",
          fontWeight: "bold",
        }}
      >
        <span>Харвардын</span>
        <span>хөгжимчин</span>
      </h1>
      <div className="post_content_full">
        <p>
          <iframe
            width="100%"
            height={400}
            src="http://www.youtube.com/embed/tgaIGKDQqhA?autoplay=1&showinfo=0&rel=0"
            frameBorder={0}
            // allowFullScreen=""
          />
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,
        <a href="/sidebar/video-bolon-bichleg">ВИДЕО БОЛОН БИЧЛЭГ</a>
      </div>
      <div className="post_info_full right">2012.07.09</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/263/"
          st_title="Харвардын хөгжимчин"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/263/"
          st_title="Харвардын хөгжимчин"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/263/"
          st_title="Харвардын хөгжимчин"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/263/"
          st_title="Харвардын хөгжимчин"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/263/"
          st_title="Харвардын хөгжимчин"
        />
      </div> */}
      <div className="disqus"></div>
    </div>
  );
};

export default Page;
