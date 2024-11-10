"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Pagination from "@mui/material/Pagination";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Post {
  id: number;
  imageUrl?: string;
  title: string;
  content: string;
  post: string;
  category: string;
  href: string;
}

export default function Page() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
    router.push(`/sidebar/mongol-tehnologi/?page=${newPage}`);
  };

  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div
      className="content"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div id="content" style={{ display: "block" }}>
        <h1>МОНГОЛ АМАН СОЁЛ</h1>
        <div className="post_list">
          {currentPosts.map((post) => (
            <div key={post.id} className="post_intro">
              <Link href={post.href}>
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
      <Pagination
        count={Math.ceil(postList.length / postsPerPage)}
        page={currentPage}
        onChange={handleChange}
      />
    </div>
  );
}

const postList: Post[] = [
  {
    id: 1,
    imageUrl: "/images/thumb_sample.jpg",
    title: "МОНГОЛ ДААЛУУНЫ ГУНШИН",
    href: "/news/mongol-daaluunii-gunshin",
    content:
      "ЁОЗ: Ёгзолдоржийн хөдөөнөөс Ёнзон хамбын гадаанаас Цайны сүүний гуйлгачин Цалам барьсан дээрэмчин Хон хэрээний нүд Хоёр нүдний дуран Хойт хотын данжаад БӨХӨӨН: Өөхий бөөхий дөрөв Өвчүү номин шаргал Бөгжөө Сэнгийн ...",
    post: "ННийтэлсэн: 2012-02-19, 08:38",
    category: "МОНГОЛ АМАН СОЁЛ",
  },
];
