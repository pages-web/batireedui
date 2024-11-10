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
        <span>Монгол</span>
        <span>мал</span>
        <span>тамгалах</span>
        <span>ёс</span>
        <span>ба</span>
        <span>орчин</span>
        <span>үе</span>
      </h1>
      <div className="post_content_full">
        <p>
          <object
            height={600}
            width="100%"
            type="application/x-shockwave-flash"
            data="http://d1.scribdassets.com/ScribdViewer.swf"
            style={{ outline: "none" }}
          >
            <param
              name="movie"
              value="http://d1.scribdassets.com/ScribdViewer.swf"
            />
            <param name="wmode" value="opaque" />
            <param name="bgcolor" value="#ffffff" />
            <param name="allowFullScreen" value="true" />
            <param name="allowScriptAccess" value="sameDomain" />
            <param
              name="flashvars"
              value="document_id=99574053&access_key=key-nfdvuxj0m2z3x38rjxo&page=1&viewMode=list"
            />
            <embed
              src="http://d1.scribdassets.com/ScribdViewer.swf?document_id=99574053&access_key=key-nfdvuxj0m2z3x38rjxo&page=1&viewMode=list"
              height={600}
              width="100%"
              type="application/x-shockwave-flash"
              // allowscriptaccess="sameDomain"
              // allowFullScreen="true"
              // wmode="opaque"
              // bgcolor="#ffffff"
            />
          </object>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/">Home</a>,<a href="/sidebar/lekts-seminar">ЛЕКЦ СЕМИНАР</a>
      </div>
      <div className="post_info_full right">2012.07.09</div>
      <div className="clear" />
      {/* Share Buttons */}
      {/* <div id="share_buttons">
        <span
          className="st_facebook_hcount"
          st_url="http://batireedui.com/post/264/"
          st_title="Монгол мал тамгалах ёс ба орчин үе"
        />
        <span
          className="st_twitter_hcount"
          st_url="http://batireedui.com/post/264/"
          st_title="Монгол мал тамгалах ёс ба орчин үе"
        />
        <span
          className="st_linkedin_hcount"
          st_url="http://batireedui.com/post/264/"
          st_title="Монгол мал тамгалах ёс ба орчин үе"
        />
        <span
          className="st_plusone_hcount"
          st_url="http://batireedui.com/post/264/"
          st_title="Монгол мал тамгалах ёс ба орчин үе"
        />
        <span
          className="st_fblike_hcount"
          st_url="http://batireedui.com/post/264/"
          st_title="Монгол мал тамгалах ёс ба орчин үе"
        />
      </div> */}
      <div className="disqus"></div>
    </div>
  );
};

export default Page;
