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
    router.push(`/sidebar/shine-tsagiin-yortontsiin-gurav/?page=${newPage}`);
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
        <h1>ШҮЛЭГ МИНЬ</h1>
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
    imageUrl: "/images/sidebar/2694311628150063082_301_x_200.png",
    title: "Ш.ГҮРБАЗАР: БИ МОНГОЛООРОО ГОЁДОГ",
    content:
      "Хөх Азийн цээжин дээр ирж буцахын учирХүмүүний алтан заяа энд байхын учирТуурайн тамгатай хөрсөн дээрУнагатай хамт тэнцэж хөлд орохын учирТунгалаг шанданы толиогХулантай хамт булаалдаж рашаан амсахын учирБи&nbsp;Монголдоо мэндэлсэнГазар тэнгэрийн савсалагад ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "ШҮЛЭГ МИНЬ",
  },
  {
    id: 2,
    imageUrl: "/images/sidebar/11960033123397180911_301_x_200.png",
    title: "ЗУНЫ ТУХАЙ ШҮЛГҮҮД",
    content:
      "А.Эрдэнэ-Очир: ЗУНЫ ШӨНӨХөнжлөө бага зэрэг яраадХөлийг нь салхи шүргээдАйлын бүсгүй гадаа унтанаЦэнхэр амьсгал салхиар надад ирээдЦээж нь жаахан товойж харагдаадАйлын бүсгүй гадаа унтана&nbsp;Б.Лхагвасүрэн: ЗУНЫ ИХ ҮДТээрсэн нохой гэрийн сүүдэртТэнийлгэсэн арьс ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "ШҮЛЭГ МИНЬ",
  },
  {
    id: 3,
    imageUrl:
      "/images/sidebar/Hf8WAb4qc0Kwx5zHk0anlU3mSIg5xvTEiUWPudnJqDMO.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ХАЙР",
    content:
      "Хэзээ ч уйдахгүй мөнхийн хайр&nbsp; Хэнтэй ч хуваахгүй амин хайр Хэрэгтэй цагт амиа ч солих Хэнээс ч гуйхгүй бүтэн хайр аа",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "ШҮЛЭГ МИНЬ",
  },
  {
    id: 4,
    imageUrl: "/images/sidebar/okyo+051009+172.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: БОРООТОЙ ӨДРИЙН БОДОЛ",
    content:
      "Бороотой өдөр бодол гархилана, Борцтой цай гал дээр даргилна, Босоод явахлаар суумаар, Буцаад хэвтэхлээр босмоор... Гэрийн хаалгаар алсад бороо цайрна, Гэрэл хааж үүлс дээр нь бүрсийнэ, Бүгээн морьтой гийчин&nbsp; Бүүр ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "ШҮЛЭГ МИНЬ",
  },
  {
    id: 5,
    imageUrl: "/images/sidebar/3425848568158426808_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ИЖИЙ МИНИ",
    content:
      " Хавар хаврын хахирган шуурганаас&nbsp;Хаацайлж хамгаалсэн ижий минь дээ&nbsp;Хайр харын дуу бүхэнд&nbsp;Хайлж, хатуужсан ижий минь ээ&nbsp;Нарт орчлонд буянаа хурааж&nbsp;Намбайж жаргасан ижий минь ээ&nbsp;Зун зуны халуун нарнаас&nbsp;Зулайг минь халхалсан ижий минь дээ&nbsp;Замбуулин ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "ШҮЛЭГ МИНЬ",
  },
  {
    id: 6,
    imageUrl: "/images/sidebar/1579098031861065427_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ХҮНИЙ ААШ",
    content:
      "Асгартал орохоор үерлэлээ гэх, Аашлаж загнахаар агсарлаа гэх юм Дуутай тэнгэрийг хургүй гэх, Дурласан залууг сохор гэх юм. Навч унахаар намар гэх Намайг унахаар чамайг гэх. Нар гарахаар халлаа гэх, ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "ШҮЛЭГ МИНЬ",
  },
  {
    id: 7,
    imageUrl: "/images/sidebar/1410780065433751748_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: САКУРА",
    content:
      "Санаа алдахад нь Санаашраад догдлоно чинээ бодсонгүй,Салаад унахад ньСалхинд хийснэ чинээ санасангүй.Бороо минь чи түүн дээр бүү дусДуслыг чинь тэр даахгүй, хүнддэнэ.Салхи минь чи түүнийг бүү сэв,Сэвшээг тэнь тэр тэвчихгүй, ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "ШҮЛЭГ МИНЬ",
  },
];
