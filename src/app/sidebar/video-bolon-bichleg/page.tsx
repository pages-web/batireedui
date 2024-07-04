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
        <h1>видео-болон-бичлэг</h1>
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
    </div>
  );
}

const postList: Post[] = [
  {
    id: 1,
    imageUrl: "/images/book/tgaIGKDQqhA.png",
    title: "Харвардын хөгжимчин",
    content: "",
    post: "Нийтэлсэн: 2012-04-02, 14:36",
    category: "Ангилал: видео-болон-бичлэг",
  },
  {
    id: 2,
    imageUrl: "/images/thumb_sample.jpg",
    title:
      " New York Democracy Forum Dinner 2011 - Tsakhiagiin Elbegdorj, President of Mongolia",
    content:
      "Дэлхийн их сургуулиуд бүгд өөрийн гэсэн хэвлэлийн газартай байдаг. Тухайлбал бидний сайн мэдэх Оксфорд Университи Пресс (www.oup.co.uk), Харвард Университи Пресс (www.hup.harward.edu), Кембриж Университи Пресс (www.cambridge.org), Йэле Университи Пресс (www.yale.edu/yup), Колумб ...",
    post: "Нийтэлсэн: 2012-04-03, 13:11",
    category: " Ангилал: видео-болон-бичлэг",
  },
  {
    id: 3,
    imageUrl: "/images/thumb_sample.jpg",
    title: "'Чи юуг хайрладаг тэр зүйлээ л олох хэрэгтэй,' Стэв Жоб",
    content:
      "STEVE JOBS: YOUR TIME IS LIMITED, SO DON'T WASTE IT LIVING SOMEONE ELSE'S LIFE. &nbsp; АППЛЕ компанийг үндэслэгч СТИВ ЖОБС-ийн 2005 оны 6 дугаар сарын 12 нд буюу хавдар хэмээх ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: " Ангилал: видео-болон-бичлэг",
  },
  {
    id: 4,
    imageUrl: "/images/thumb_sample.jpg",
    title: "GEORGE MICHAEL: LAST CHRISTMAS",
    content:
      "Last Christmas I gave you my heart&nbsp;But the very next day you gave it away&nbsp;This year To save me from tears&nbsp;I'll give it to someone special&nbsp;Last Christmas I gave you ...",
    post: "Нийтэлсэн: 2012-03-29, 15:27",
    category: " Ангилал: видео-болон-бичлэг",
  },
  {
    id: 5,
    imageUrl: "/images/sidebar/qPpQeo_QWkA.png",
    title: "СОЛОНГОСЫН АРДЫН ХӨГЖИМ ЯТГА",
    content: "",
    post: "Нийтэлсэн: 2012-03-29, 15:24 ",
    category: " Ангилал: видео-болон-бичлэг",
  },
  {
    id: 6,
    imageUrl: "/images/sidebar/vi/XarLc7UGvPI.png   ",
    title: "In Madison ",
    content:
      "Буянт ухаад буух сайхан хэмээн нэгэн яруу найрагч дуу алдан шүлэглэсэн санагдана. Нээрээ л Буянт Ухаад буух сайхан, агаар нь цэнгэг, амисгал уужим тэнүүн. Энэ буянтай сайхан нэр алга болох ...",
    post: "Нийтэлсэн: 2012-03-28, 18:40",
    category: " Ангилал: видео-болон-бичлэг",
  },
];
