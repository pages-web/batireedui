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
}

export default function Page() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
    router.push(`/sidebar/delhiin-shildeg-10-uguulleg/?page=${newPage}`);
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
        <h1>ДЭЛХИЙН ШИЛДЭГ 10 ИЛТГЭЛ</h1>
        <div className="post_list">
          {currentPosts.map((post) => (
            <div key={post.id} className="post_intro">
              <Link href="/">
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
        shape="rounded"
        color="primary"
      />
    </div>
  );
}

const postList: Post[] = [
  {
    id: 1,
    imageUrl: "/images/thumb_sample.jpg",
    title: "'Чи юуг хайрладаг тэр зүйлээ л олох хэрэгтэй,' Стэв Жоб",
    content:
      "STEVE JOBS: YOUR TIME IS LIMITED, SO DON'T WASTE IT LIVING SOMEONE ELSE'S LIFE. &nbsp; АППЛЕ компанийг үндэслэгч СТИВ ЖОБС-ийн 2005 оны 6 дугаар сарын 12 нд буюу хавдар хэмээх ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 2,
    imageUrl: "/images/sidebar/not-found.png",
    title: "ДЭВИД КАЛХОУН: ӨӨРИЙГӨӨ МЭД, ЗОРИЛГОТОЙ, ӨӨРТӨӨ ҮНЭНЧ БАЙ",
    content:
      "Дэвид Калхоун Бизнесмен, Женерал Элэктрик болон Ниелсэнд удирдах албан тушаал эрхлэгч Виржиниагийн Технологийн Их Сургуулийн Төгсөлтийн баярт хэлсэн үг, 2005 Ерөнхийлөгч Стегерт Танаа их баярлалаа. Виржиниа Тект сургуульд суралцах ...",
    post: "Нийтэлсэн: 2012-04-03, 13:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 3,
    imageUrl: "/images/sidebar/not-found.png",
    title:
      " STEVE JOBS: YOUR TIME IS LIMITED, SO DON'T WASTE IT LIVING SOMEONE ELSE'S LIFE.",
    content:
      "Зургийг Бат-Ирээдүй Номунзул АППЛЕ компанийг үндэслэгч СТИВ ЖОБС-ийн 2005    оны 6 дугаар сарын 12 нд буюу хавдар хэмээх аюулт өвчний онош тогтоосноос  хойш яг жилийн дараа дэлхийн нэртэй их сургуулиудын ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
];
