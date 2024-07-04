import React from "react";
import Link from "next/link";
import Image from "next/image";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fdprocessedid?: string;
  }
}

export default function Header() {
  return (
    <div id="header-wrapper" style={{ marginBottom: "20px" }}>
      <div className="fixed" style={{ width: "1100px" }}>
        <div id="menu" className="left">
          <ul>
            <li>
              <Link href="/">
                <p>Нийтлэл</p>
              </Link>
            </li>
            <li>
              <Link href="/header/about">Миний Тухай</Link>
            </li>
            <li>
              <Link href="/header/book">
                <p>Ном</p>
              </Link>
            </li>
            <li>
              <Link href="/header/photo-blog">
                <p>Фото блог</p>
              </Link>
            </li>
            <li>
              <Link href="/header/contact">
                <p>Холбоо барих</p>
              </Link>
            </li>
          </ul>
        </div>{" "}
        {/* End #Menu */}
        <div className="search_container right">
          <input
            id="search"
            type="text"
            className="left watermark"
            fdprocessedid="usxdps"
          />
          <div className="search_btn left">Хайх</div>
          <div className="clear" />
        </div>{" "}
        {/* End #Search */}
        <div className="top-social right">
          <Link href="http://twitter.com/Iregedui" target="blank">
            <Image
              alt=""
              src="/images/template/1320742998_social_twitter_box_blue.png"
              width={32}
              height={28}
            />
          </Link>
          <Link href="http://facebook.com/iregedui" target="blank">
            <Image
              alt=""
              src="/images/template/1320811471_social_facebook_box_blue.png"
              width={32}
              height={28}
            />
          </Link>
          <Link href="http://youtube.com/iregedui" target="blank">
            <Image
              alt=""
              src="/images/template/youtube-icon.png"
              width={32}
              height={28}
            />
          </Link>
          <Link href="http://www.flickr.com/photos/iregedui" target="blank">
            <Image
              alt=""
              src="/images/template/flickr-icon.png"
              width={32}
              height={28}
            />
          </Link>
        </div>{" "}
        {/* End #Search */}
      </div>{" "}
      {/* End .Fixed */}
    </div>
  );
}
