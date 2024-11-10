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
        <span style={{ marginRight: "8px" }}>MADISON</span>
        <span>CITY</span>
      </h1>

      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <span>
            MADISON - people know it and love it as one of the most livable
            cities in America. Its also been called one of the best walking
            cities, the healthiest city in America, home to one of the worlds
            ten best public spaces (the Capitol Square) and the #1 college
            sports town in America. Its been home to a diverse cast of
            well-known individuals, from John Muir, Aldo Leopold, and Frank
            Lloyd Wright to Thornton Wilder, Chris Farley, and the Zucker
            Brothers.
          </span>
        </p>
        <p>
          <Image
            width={300}
            height={400}
            src="/images/forbidden/92.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <strong>Wisconsin Land Mark</strong>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/forbidden/98.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <strong>Lovely monkeys</strong>
        </p>
        <p>
          <Image
            width={300}
            height={340}
            src="/images/forbidden/103.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <strong>Capitol view from the University hill</strong>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/forbidden/96.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <strong>Magic Wall inside the building</strong>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/forbidden/101.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <strong>Wisconsin University Bascom Hall</strong>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/forbidden/94.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <strong>Bicycle Hiring Project for people in city</strong>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/forbidden/95.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <strong>Wisconsin Institute for Discovery</strong>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/forbidden/99.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <strong>Lake Madison</strong>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/forbidden/93.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <div>Wisconsin University Building&nbsp;</div>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/forbidden/97.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <strong>Capital of Wisconsin in the night</strong>
        </p>
        <p>
          <Image
            width={350}
            height={240}
            src="/images/forbidden/102.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
        </p>
        <p>
          <strong>Sun clock from the students</strong>
        </p>
        <p style={{ textAlign: "justify" }}>
          <span>
            <br />
          </span>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.03.07</div>
      <div className="clear" />

      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app6054"
            name="dsq-app6054"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F169%2F123&t_d=MADISON%20CITY%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&t_t=MADISON%20CITY%20%7C%20%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
