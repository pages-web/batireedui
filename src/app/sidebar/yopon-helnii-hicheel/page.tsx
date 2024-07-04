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
        <h1>ЯПОН ХЭЛНИЙ ХИЧЭЭЛ</h1>
        <div className="post_list">
          {currentPosts.map((post) => (
            <div key={post.id} className="post_intro">
              <Link href="/sidebar/yopon-helnii-hicheel">
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
    imageUrl: "/images/sidebar/1341311383585863740_301_x_200.png",
    title: "TOKYO TO USE ODA TO PROMOTE JAPAN'S SATELLITE INDUSTRY",
    content:
      "  TOKYO (Kyodo) -- The government has decided to provide funding for developing countries' space satellite projects under its official development assistance, government sources said Friday. The first such aid funds ...",
    post: "Нийтэлсэн: 2012-04-02, 14:36",
    category: "Ангилал: ЯПОН ХЭЛНИЙ ХИЧЭЭЛ",
  },
];
