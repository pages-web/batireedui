"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "next-share";

export default function page() {
  return (
    <div id="content">
      <h1>
        <p>Ж.Бат-Ирээдүй: &quot;БУРУУТАН&quot;</p>
      </h1>
      <div className="post_content_full">
        <p>
          <strong>
            Монгол бичгээс уншиж, татлага буланд байгаа кирил эхтэй тулгаж
            өөрийгөө шалгана уу?
          </strong>
        </p>
        <p>
          <strong>
            <Image
              src="/images/buruutan.png"
              width={450}
              height={637}
              alt=""
              style={{ float: "none", display: "inline", width: 450 }}
            />
          </strong>
        </p>
        <p>
          <strong>
            <span>Монгол бичгээр бичсэн Энхсувд (МУИС)</span>
            <br />
          </strong>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay">
          ЭХ ХЭЛ БИЧИГТЭЭ ЭЗЭН НЬ БАЙЦГААЯ
        </Link>
      </div>
      <div className="post_info_full right">2012.04.02</div>
      <div className="clear" />
      {/* Share Buttons */}
      <div id="share_buttons" style={{ display: "flex", gap: "15px" }}>
        <span
          className="st_facebook_hcount"
          st-url="http://batireedui.com/post/213/"
          st-title='Ж.Бат-Ирээдүй: "БУРУУТАН"'
          st-processed="yes"
        >
          <span
            style={{
              textDecoration: "none",
              color: "#000000",
              display: "inline-block",
              cursor: "pointer",
            }}
            className="stButton"
          >
            <span>
              <span
                className="stMainServices st-facebook-counter"
                style={{
                  display: "flex",
                }}
              >
                <FacebookShareButton
                  url={"http://facebook.com"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  {" "}
                  <Image
                    alt=""
                    width={60}
                    height={22}
                    src="/images/fb-share.png"
                  />
                  <span className="stArrow">
                    <span
                      className="stButton_gradient stHBubble"
                      style={{ display: "inline-block" }}
                    >
                      <span className="stBubble_hcount">2</span>
                    </span>
                  </span>
                </FacebookShareButton>
                &nbsp;
              </span>
            </span>
          </span>
        </span>
        <span
          className="st_twitter_hcount"
          st-url="http://batireedui.com/post/213/"
          st-title='Ж.Бат-Ирээдүй: "БУРУУТАН"'
          st-processed="yes"
        >
          <span
            style={{
              textDecoration: "none",
              color: "#000000",
              display: "inline-block",
              cursor: "pointer",
            }}
            className="stButton"
          >
            <span>
              <span className="stMainServices st-twitter-counter" style={{}}>
                <TwitterShareButton
                  url={"https://twitter.com/"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                  }}
                >
                  <Image
                    alt=""
                    width={60}
                    height={22}
                    src="/images/twitter-share.png"
                  />

                  <span className="stArrow">
                    <span
                      className="stButton_gradient stHBubble"
                      style={{ display: "inline-block" }}
                    >
                      <span className="stBubble_hcount">0</span>
                    </span>
                  </span>
                </TwitterShareButton>
                &nbsp;
              </span>
            </span>
          </span>
        </span>
        <span
          className="st_linkedin_hcount"
          st-url="http://batireedui.com/post/213/"
          st-title='Ж.Бат-Ирээдүй: "БУРУУТАН"'
          st-processed="yes"
        >
          <span
            style={{
              textDecoration: "none",
              color: "#000000",
              display: "inline-block",
              cursor: "pointer",
            }}
            className="stButton"
          >
            <span>
              <span className="stMainServices st-linkedin-counter">
                <LinkedinShareButton
                  url={"https://www.linkedin.com/"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <Image
                    alt=""
                    width={60}
                    height={22}
                    src="/images/in-share.png"
                  />

                  <span className="stArrow">
                    <span
                      className="stButton_gradient stHBubble"
                      style={{ display: "inline-block" }}
                    >
                      <span className="stBubble_hcount">0</span>
                    </span>
                  </span>
                </LinkedinShareButton>
                &nbsp;
              </span>
            </span>
          </span>
        </span>
        <span
          className="st_plusone_hcount"
          st-url="http://batireedui.com/post/213/"
          st-title='Ж.Бат-Ирээдүй: "БУРУУТАН"'
          st-processed="yes"
        >
          <div
            style={{
              display: "inline-block",
              overflow: "hidden",
              lineHeight: 0,
              position: "relative",
              verticalAlign: "middle",
              bottom: 0,
              width: 75,
              height: 21,
            }}
          >
            &nbsp;
            <div
              id="___plusone_0"
              style={{ position: "absolute", width: 450, left: "-10000px" }}
            >
              <iframe
                ng-non-bindable=""
                frameBorder={0}
                // hspace={0}
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                style={{
                  position: "absolute",
                  top: "-10000px",
                  width: 450,
                  margin: 0,
                  borderStyle: "none",
                }}
                tabIndex={0}
                // vspace={0}
                width="100%"
                id="I0_1719815422261"
                name="I0_1719815422261"
                src="https://apis.google.com/u/0/se/0/_/+1/fastbutton?usegapi=1&size=medium&count=true&origin=http%3A%2F%2Fbatireedui.com&url=http%3A%2F%2Fbatireedui.com%2Fpost%2F213%2F&gsrc=3p&ic=1&jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.IKZeRvoAYNY.O%2Fam%3DAAAQ%2Fd%3D1%2Frs%3DAHpOoo-SMWTzMRJrTty6iE5dL_aWGYOnuw%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh&id=I0_1719815422261&_gfid=I0_1719815422261&parent=http%3A%2F%2Fbatireedui.com&pfname=&rpctoken=26607686"
                data-gapiattached="true"
              />
            </div>
            {/* <g:plusone
              href="http://batireedui.com/post/213/"
              size="medium"
              count="true"
              callback="plusoneCallback"
              data-gapiscan="true"
              data-onload="true"
              data-gapistub="true"
            /> */}
          </div>
        </span>
        <span
          className="st_fblike_hcount"
          st-url="http://batireedui.com/post/213/"
          st-title='Ж.Бат-Ирээдүй: "БУРУУТАН"'
          st-processed="yes"
        >
          <span
            style={{
              textDecoration: "none",
              color: "#000000",
              display: "inline-block",
              cursor: "pointer",
              position: "relative",
              margin: "3px 3px 0",
              padding: 0,
              fontSize: 11,
              lineHeight: 0,
              verticalAlign: "bottom",
              overflow: "visible",
            }}
          >
            <div
              data-action=""
              data-send="false"
              data-layout="button_count"
              data-show-faces="false"
              className="fb-like fb_iframe_widget"
              data-href="http://batireedui.com/post/213/"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="action=&app_id=419540251399068&container_width=0&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F213%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
            >
              <span style={{ verticalAlign: "bottom", width: 90, height: 28 }}>
                <iframe
                  name="ff31be4ee3b928a05"
                  width="1000px"
                  height="1000px"
                  data-testid="fb:like Facebook Social Plugin"
                  title="fb:like Facebook Social Plugin"
                  frameBorder={0}
                  allowTransparency={true}
                  allowFullScreen={true}
                  scrolling="no"
                  allow="encrypted-media"
                  src="https://www.facebook.com/plugins/like.php?action=&app_id=419540251399068&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df7d6ad69dc44f7ac3%26domain%3Dbatireedui.com%26is_canvas%3Dfalse%26origin%3Dhttp%253A%252F%252Fbatireedui.com%252Fff387a902c0a9b8d7%26relation%3Dparent.parent&container_width=0&href=http%3A%2F%2Fbatireedui.com%2Fpost%2F213%2F&layout=button_count&locale=en_US&sdk=joey&send=false&show_faces=false"
                  style={{
                    border: "none",
                    visibility: "visible",
                    width: 90,
                    height: 28,
                  }}
                  className=""
                />
              </span>
            </div>
          </span>
        </span>
      </div>
      <div className="disqus">
        <div id="disqus_thread">
          <iframe
            id="dsq-app8159"
            name="dsq-app8159"
            allowTransparency={true}
            frameBorder={0}
            scrolling="no"
            tabIndex={0}
            title="Disqus"
            width="100%"
            src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F213%2F123&t_d=%D0%96.%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9%3A%20%22%D0%91%D0%A3%D0%A0%D0%A3%D0%A3%D0%A2%D0%90%D0%9D%22&t_t=%D0%96.%D0%91%D0%B0%D1%82-%D0%98%D1%80%D1%8D%D1%8D%D0%B4%D2%AF%D0%B9%3A%20%22%D0%91%D0%A3%D0%A0%D0%A3%D0%A3%D0%A2%D0%90%D0%9D%22&s_o=default#version=6c27b7b2e58aef7c0a19eb6da9bdf7b0"
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
