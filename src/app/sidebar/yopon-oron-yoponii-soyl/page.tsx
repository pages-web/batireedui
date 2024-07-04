"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  imageUrl?: string;
  title: string;
  content: string;
  post: string;
  category: string;
}

export default function Page() {
  const currentPosts = postList;
  return (
    <div className="content">
      <div id="content" style={{ display: "block" }}>
        <h1>ЯПОН ОРОН, ЯПОНЫ СОЁЛ</h1>
        <div className="post_list">
          {currentPosts.map((post) => (
            <div key={post.id} className="post_intro">
              <Link href="/sidebar/yopon-oron-yoponii-soyl">
                {post.imageUrl && (
                  <Image
                    alt={post.title}
                    src={post.imageUrl}
                    width={301}
                    height={200}
                  />
                )}
              </Link>
              <h2>{post.title}</h2>
              <div className="post_info">{post.post}</div>
              <div className="post_content">{post.content}</div>
              <div className="post_info">
                <span>{post.category}</span>
                <span className="pipe">|</span> 0 Сэтгэгдэл
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const postList: Post[] = [
  {
    id: 1,
    imageUrl: "/images/thumb_sample.jpg",
    title: "TOKYO TO USE ODA TO PROMOTE JAPAN'S SATELLITE INDUSTRY",
    content:
      "  TOKYO (Kyodo) -- The government has decided to provide funding for developing countries' space satellite projects under its official development assistance, government sources said Friday. The first such aid funds ...",
    post: "Нийтэлсэн: 2012-04-02, 14:36",
    category: "Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 2,
    imageUrl: "/images/sidebar/not-found.png",
    title: "Sergio Lopez Santa Rosa, CA ",
    content: "",
    post: "Нийтэлсэн: 2012-04-03, 13:11",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 3,
    imageUrl: "/images/sidebar/4215025560847564724_301_x_200.png",
    title: "ОРЧИН ҮЕИЙН ОНГОЦНЫ ЗАГВАРУУД",
    content: "",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 4,
    imageUrl: "/images/sidebar/764456706711522699_301_x_200.png",
    title: "БЕРЛИН ХОТ",
    content: "",
    post: "Нийтэлсэн: 2012-03-29, 15:27",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 5,
    imageUrl: "/images/sidebar/not-found.png",
    title: "ВЕНА ХОТ",
    content: "",
    post: "Нийтэлсэн: 2012-03-29, 15:24 ",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 6,
    imageUrl: "/images/sidebar/not-found.png",
    title: "БЕЛГИ УЛСЫН БРҮССЭЛ ХОТ",
    content: "",
    post: "Нийтэлсэн: 2012-03-28, 18:40",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 7,
    imageUrl: "/images/sidebar/not-found.png",
    title: "Унгарын Будапешт хот",
    content: "",
    post: "Нийтэлсэн: 2012-03-24, 19:26",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 8,
    imageUrl: "/images/sidebar/not-found.png",
    title: "ГӨТТИНГЭН ХОТ",
    content: "",
    post: "Нийтэлсэн: 2012-03-24, 19:20",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 9,
    imageUrl: "/images/sidebar/not-found.png",
    title: "МУУ ХҮН ИДСЭНЭЭ ГЭЖ",
    content: "",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
];
