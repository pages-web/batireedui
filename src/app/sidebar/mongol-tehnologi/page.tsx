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
        <h1>МОНГОЛ ТЕХНОЛОГИ</h1>
        <div className="post_list">
          {currentPosts.map((post) => (
            <div key={post.id} className="post_intro">
              <Link href="/sidebar/mongol-tehnologi">
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
    title: "БОРЦ ХЭРХЭН ХИЙХ ВЭ?Г",
    content:
      "Саяхан монголчууд идэш хийлээ. Одоо махаа борцлохоор бэлтгэж байгаа байх. Борц бол нүүдэлчин монголчуудын бас нэг гол хүнс. Ялангуяа удаан хадгалах боломжтой учир гадаадад суугаа монголчууд нэлээд хэрэглэж байгаа харагддаг. ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "МОНГОЛ ТЕХНОЛОГИ",
  },
  {
    id: 2,
    imageUrl: "/images/thumb_sample.jpg",
    title: "АЗАРГА ХЭРХЭН ТАВИХ ВЭ?",
    content:
      "Азарга хэрхэн тавих вэ? Азарга тавихад монголчууд их анхаарч сайн үрээгээр азарга тавихыг хичээдэг. Яагаад гэвэл азарга бол адуун сүргийн манлай, адууг хамгаалагч юм. Азарга тавих үрээний шинж хэмээвээс, бие ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "МОНГОЛ ТЕХНОЛОГИ",
  },
  {
    id: 3,
    imageUrl: "/images/sidebar/5268115055044818239_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: МОНГОЛ ЦАГ ",
    content:
      "Тээр жил билээ. Монголч эрдэмтэдийн хэддүгээр ч билээ хурал болж салбар хуралдуунууд явж байлаа. Хэлшинжлэлийн салбар хуралдааныг монгол хэлтэй монхор Галсан гуайн хэлээр орос хэлтэй доктор Галсан гуай удирдаж байсан ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "МОНГОЛ ТЕХНОЛОГИ",
  },
  {
    id: 4,
    imageUrl: "/images/thumb_sample.jpg",
    title: "УХНА ЯАЖ ТАВИХ ВЭ?",
    content:
      "   Ухна яаж тавих вэ? Өсгөлөн, чийрэг, том биетэй, хошуу уртавтар, эвэр хэт шорон биш, үс сорлог, ноолуур арвин, зүс хар, хөх, улаан өнгийн бараандуу байх зэрэг арваад шинж бүрдсэн ишгээр ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "МОНГОЛ ТЕХНОЛОГИ",
  },
];
