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
    router.push(`/sidebar/bichil-uguulleg/?page=${newPage}`);
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
        <h1>БИЧИЛ ҮГҮҮЛЭЛ</h1>
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
    imageUrl: "/images/sidebar/2931696708452888811_301_x_200.png",
    title: "Sergio Lopez Santa Rosa, CA",
    content:
      "About Sergio: &nbsp; &nbsp; &nbsp; Sergio Lopez was born in 1983 in Sonoma County, California. He received his BFA from the Academy of Art in San Francisco. Upon discovering oil ...",
    post: "Нийтэлсэн: 2012-04-02, 14:36",
    category: "Ангилал: БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 2,
    imageUrl: "/images/sidebar/1341311383585863743_301_x_200.png",
    title: "НҮГЭЛ ГЭЭЧ ЮУ БОЛОХСОН?",
    content:
      "Таван завсаргүй нүгэл, таван шадар нүгэл, арван хар нүгэл буй. Бурхнуудыг гүтгэх, дайныг дарсныг алах, ирсний биенээс цус гаргах, бурсан хуваргуудын нөхөр салгах, сүм суварга эвдэх, сүжигт эд булаах, дүлбэ ...",
    post: "Нийтэлсэн: 2012-04-03, 13:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 3,
    imageUrl: "/images/sidebar/1960033123397180911_301_x_200.png",
    title: "Машин барьж болох уу?Т",
    content:
      "Машин барьж болно. Ихэнхи гадаад улсууд &nbsp;өөрийн жолооны үнэмлэхээр Японд машин барьж болно. Гэхдээ тэр үнэмлэхээр &nbsp; арван хоёр сар л барих эрхтэй. &nbsp;Монголчуудын хувьд монголынхоо жолооны үнэмлэхээр барих эрх ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 4,
    imageUrl: "/images/sidebar/1960033123397180911_301_x_200.png",
    title: "Хорлон",
    content:
      "Хүүхдүүд заримдаа нэг хорлонтой юм хийдэг дээ. Яаж ч болдоггүй. Загнаад нэмэргүй, зодоод ч өнгөрсөн хорвоо болдог. Жишээ нь хоёр настай хүүхэд компьютерийн дэлгэцэн дээр шохойгоор баахан зураад гортон гаргачихсан ...",
    post: "Нийтэлсэн: 2012-03-29, 15:27",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 5,
    imageUrl: "/images/sidebar/2694311628150063079_301_x_200.png",
    title: "Дэлхийн хамгийн өндөр уулс",
    content:
      "Дэлхийн өндөр уулс Уулсын нэрс орчин метр А Еверест  Гималай 8848 Б К2 Гималай 8611 В Канченжунга    Гималай 8598 Г Лотце Гималай 8511 Д Яалунг КангГималай ...",
    post: "Нийтэлсэн: 2012-03-29, 15:24 ",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 6,
    imageUrl: "/images/sidebar/2694311628150063078_301_x_200.png",
    title: "Тивүүдийн өндөр уулс",
    content:
      " Тивүүдийн өндөр уулс Уулын нэр Тив метр 1 Еверест Ази 8848 2 Аконцагуа Өмнөд Америк6906 3 Макинлей Хойд Америк 6194 4 Килманжаро Африк 5895 5 Элбрус Европ 5633 6 ...",
    post: "Нийтэлсэн: 2012-03-28, 18:40",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 7,
    imageUrl: "/images/sidebar/5178276119046511429_301_x_200.png",
    title: "Ж.Бат-Ирээдүй: ХЭМЖЭЭС",
    content:
      "Ж.Бат-Ирээдүй &nbsp; Цаг хугацааны хэмжээс 2011 он буюу 2011 дэх нэг жилийн хугацаа шилжирч байна. Энэ жил би юу хийж гийгүүлэв? хэмээн өөрөө өөрөөсөө асуухуй хойшоо урагшаа холхисоор, хоосон ...",
    post: "Нийтэлсэн: 2012-03-24, 19:26",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 8,
    imageUrl: "/images/sidebar/2694311628150063072_301_x_200.png",
    title: "Дэлхийн томоохон хүрхрээнүүд",
    content:
      "Хүрхээ Улс метр А Анжел Венесулиа 979 Б Тугела Өмнөд Африк  948 В Утигард Норвеги 800 Г Мондефоссен Норвеги 774 Д Ёосемите АНУ 739 Е Остре Мардола Норвеги 657 ...",
    post: "Нийтэлсэн: 2012-03-24, 19:20",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 9,
    imageUrl: "/images/sidebar/108821351591093851_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: CV (Си Ви) хэрхэн бичих вэ?",
    content:
      "Энэ бол зөвлөгөө шүү. Одоо Монголд аливаа ажил төрлийн зар ялангуяа жаахан гайгүй ажлын зарлал дээр төрийн албан хаагчийн анкет буюу бидний хэлж заншсанаар нэгдүгээр маягт гэхээсээ илүү CV –гээ ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 10,
    imageUrl: "/images/sidebar/5178276119046511429_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ХЭМЖЭЭС",
    content:
      "Цаг хугацааны хэмжээс 2011 он буюу 2011 дэх нэг жилийн хугацаа шилжирч байна. Энэ жил би юу хийж гийгүүлэв? хэмээн өөрөө өөрөөсөө асуухуй хойшоо урагшаа холхисоор, хоосон шахуу үдэж байна. ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 11,
    imageUrl: "/images/sidebar/2694311628150063074_301_x_200.png",
    title: "Дэлхийн томоохон арлууд",
    content:
      "Арал хав.дөр.км 1. Грийнланд 2.176.000 2. Шинэ Гивениа                820.657 3. Борнео 743.254 4. Мадаксакар  ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 12,
    imageUrl: "/images/sidebar/2694311628150063074_301_x_200.png",
    title: "Дэлхийн томоохон арлууд",
    content:
      "Арал хав.дөр.км 1. Грийнланд 2.176.000 2. Шинэ Гивениа                820.657 3. Борнео 743.254 4. Мадаксакар  ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 13,
    imageUrl: "/images/sidebar/2694311628150063074_301_x_200.png",
    title: "Дэлхийн томоохон арлууд",
    content:
      "Арал хав.дөр.км 1. Грийнланд 2.176.000 2. Шинэ Гивениа                820.657 3. Борнео 743.254 4. Мадаксакар  ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 14,
    imageUrl: "/images/sidebar/2694311628150063074_301_x_200.png",
    title: "Дэлхийн томоохон арлууд",
    content:
      "Арал хав.дөр.км 1. Грийнланд 2.176.000 2. Шинэ Гивениа                820.657 3. Борнео 743.254 4. Мадаксакар  ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
];
