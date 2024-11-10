import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1 className="text-xl font-bold text-gray-900 tracking-wider">
        <span>Sergio Lopez</span>
        <span className="ml-2">Santa Rosa, CA</span>
      </h1>
      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <strong>About Sergio:</strong>
        </p>
        <p style={{ textAlign: "justify" }}>
          <strong />
          <Image
            width={300}
            height={297}
            src="/images/sergiolopez_987789897789.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 300 }}
          />
          &nbsp; &nbsp; &nbsp;
          <Image
            width={363}
            height={296}
            src="/images/sergiolopez_43432342432.jpg"
            alt=""
            style={{ float: "none", display: "inline", width: 363 }}
          />
        </p>
        <div style={{ textAlign: "justify" }}>
          Sergio Lopez was born in 1983 in Sonoma County, California. He
          received his BFA from the Academy of Art in San Francisco. Upon
          discovering oil paint and charcoal, he began filling sketchbooks
          rapidly, with real life observations and imagined ones alike.
        </div>
        <div style={{ textAlign: "justify" }}>
          Lopez credits contemporary artists in graffiti and photography as
          influences, but he most admires Golden Age illustrators and Bravura
          painters. He continues his study of the Old Masters with frequent
          museum visits.
        </div>
        <div style={{ textAlign: "justify" }}>
          There is no better way to discover the truth and essence of a scene
          than by standing before it and studying it carefully, according to
          Lopez. When he discovers a new vista, he enjoys setting up his easel
          on the spot. He uses various materials: oil and gouache, canvas to
          acrylic on newsprint and so forth.
        </div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/sidebar/bichil-uguulleg/">БИЧИЛ ҮГҮҮЛЭЛ</a>,
        <a href="/header/photo-blog/">ФОТО БЛОГ</a>
      </div>
      <div className="post_info_full right">2012.04.03</div>
      <div className="clear" />
      {/* Share Buttons */}
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app652"
            name="dsq-app652"
            // allowTransparency="true"
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F253%2F123&t_d=Sergio%20Lopez%20Santa%20Rosa%2C%20CA&t_t=Sergio%20Lopez%20Santa%20Rosa%2C%20CA&s_o=default#version=f7a73aced2afb4b2a80d8f8c751c458b"
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
