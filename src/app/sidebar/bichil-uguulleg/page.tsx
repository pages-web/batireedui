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
    imageUrl: "/images/sidebar/horlon.png",
    title: "Хорлон",
    content:
      "Хүүхдүүд заримдаа нэг хорлонтой юм хийдэг дээ. Яаж ч болдоггүй. Загнаад нэмэргүй, зодоод ч өнгөрсөн хорвоо болдог. Жишээ нь хоёр настай хүүхэд компьютерийн дэлгэцэн дээр шохойгоор баахан зураад гортон гаргачихсан ...",
    post: "Нийтэлсэн: 2012-03-29, 15:27",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 5,
    imageUrl: "/images/thumb_sample.jpg",
    title: "Why Mongolia and Sri Lanka are top of the stock markets",
    content:
      " One exchange is the world's smallest, the other is in a country recovering from war, but they're both thriving By James Moore Tuesday, 28 December 201ZE   If you had ...",
    post: "Нийтэлсэн: 2012-03-29, 15:24 ",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 6,
    imageUrl: "/images/sidebar/muis.png",
    title:
      "Ж.Бат-Ирээдүй: МУИС ХЭВЛЭЛИЙН ГАЗАР БУЮУ MONGOLIAN NATIONAL UNIVERSITY PRESS БАЙГУУЛЪЯ",
    content:
      "Дэлхийн их сургуулиуд бүгд өөр өөрийн  хэвлэлийн газартай байдаг. Энэ хэвлэлийн газар их сургуулиудын бас нэг имиж, нэр нүүр болж явдаг. Тухайлбал бидний сайн мэдэх Оксфорд Университи Пресс (www.oup.co.uk), Харвард Университи ...",
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
    imageUrl: "/images/sidebar/mungunii-agent.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: МӨНГӨНИЙ АНТЕН",
    content:
      "Хүн хүний мөнгө хийх арга өөр өөр. Капиталист нийгэмд том хүн байтугай хүүхэд мөнгө хийх аргаа олдог тухай өмнө би бичиж байсан. Өнөөдөр бас нэг мөнгө хийдэг “ухаантай арга” мэдлээ. Энэ ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 12,
    imageUrl: "/images/sidebar/hobby.png",
    title: "БАС НЭГЭН ХОББИ",
    content:
      "Та бүхэнд 2011 оны 9 дүгээр сарын 04-07 нд болсон МАНЖИЙН ҮЕИЙН МОНГОЛЫН ТҮҮХ БИЧЛЭГ, АРХИВЫН БАРИМТ олон улсын эрдэм шинжилгээний бага хурлын үеэр 9 дүгээр сарын 7 ний өдөр ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 13,
    imageUrl: "/images/sidebar/phone.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ГАР УТАС",
    content:
      "Гар утас гээч дэлгэрч эхэлсэн цаг саяхан. Дөнгөж саяхан л ерээд оны эхээр Лондонд гар утас анх гарч Моторолла-гийн хүн цохиод унагачихмаар хүнд хар утсаар найзыгаа таксинаас Монголтой яриулж гайхуулж...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
  {
    id: 14,
    imageUrl: "/images/sidebar/bbc.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ДУУ СОНСОХООР BBC, VOA СОНСОГТУН",
    content:
      "Миний блог үзэгч залуучууд яаж гадаад хэл хурдан сурах вэ тэр дундаа англи хэлээ хэрхэн богино хугацаанд сайжруулах вэ гэсэн асуулт их ирүүлж байна. Би нэг их сүрхий арга чарга ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "БИЧИЛ ҮГҮҮЛЭЛ",
  },
];
