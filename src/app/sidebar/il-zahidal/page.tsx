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

export default function page() {
  const currentPosts = postList;
  return (
    <div className="content">
      <div id="content" style={{ display: "block" }}>
        <h1>ИЛ ЗАХИДАЛ</h1>
        <div className="post_list">
          {currentPosts.map((post) => (
            <div key={post.id} className="post_intro">
              <Link href="/il-zahidal">
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
    imageUrl: "/images/sidebar/not-found.png",
    title:
      "    Ж.БАТ-ИРЭЭДҮЙ: МОНГОЛЧУУДЫГ ЭРҮҮЛ ЭСЭН БАЙЛГАХЫН ТӨЛӨӨ АЖИЛЛААРАЙ",
    content:
      "Миний бие шинэ ерөнхийлөгчийг тангараг өргөхийнх нь өмнөхөн ийм нэг ил захидал маягийн юм бичсэн юмаа. Тэгээд эхийг EMS буухиа шуудангаар явуулсаныг яана. Тэр очсон л байж таараа. Монгол үндэстний ...",
    post: "Нийтэлсэн: 2012-04-02, 14:36",
    category: "Ангилал: ИЛ ЗАХИДАЛ",
  },
];
