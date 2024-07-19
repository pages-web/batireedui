"use client";
import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearch } from "../SearchContext";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    fdprocessedid?: string;
  }
}

export default function Header() {
  const { setSearchTerm } = useSearch();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchClick = () => {
    handleSearchChange;
  };

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
        </div>
        <div className="search_container right">
          <input
            id="search"
            type="text"
            className="left watermark"
            // value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="search_btn left" onClick={handleSearchClick}>
            Хайх
          </div>
          <div className="clear" />
        </div>

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
        </div>
      </div>
    </div>
  );
}
