"use client";

import React from "react";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

interface Post {
  id: number;
  imageUrl?: string;
  title: string;
  content: string;
  price: string;
}

export default function Page() {
  const router = useRouter();

  const [bookCurrentPage, setBookCurrentPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setBookCurrentPage(newPage);
    router.push(`/header/book/?page=${newPage}`);
  };

  const postsPerPage = 10;
  const indexOfLastPost = bookCurrentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <head>
        <title>Миний номнууд | Бат-Ирээдүй</title>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div id="content" style={{ display: "block" }}>
          <div className="pagination">
            <div className="post_list">
              {currentPosts.map((post) => (
                <div key={post.id} id="book" className="post_intro">
                  {/* Your post item structure */}

                  {post.imageUrl && (
                    <Image
                      alt={post.title}
                      src={post.imageUrl}
                      width={180}
                      height={247}
                    />
                  )}
                  <h2>{post.title}</h2>
                  <div id="book" className="post_content">
                    {post.content}
                  </div>
                  <div className="print">price {post.price}</div>
                </div>
              ))}
              <div className="dot-border-bottom-full" />
              {/* Pagination component */}
            </div>
          </div>
        </div>
        <Pagination
          count={Math.ceil(postList.length / postsPerPage)} // Total number of pages
          page={bookCurrentPage}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

const postList: Post[] = [
  {
    id: 1,
    imageUrl: "/images/book/9216242246717820242_180_x_247.png",
    title: "ЭВЭРТЭЙ ЭМЭЭ",
    price: "5.00USD",
    content:
      "Дэлхий ертөнцийн сонин сайхан, солиу гажуу, Ж.БАТ-ИРЭЭДҮЙ, Б.АРИГУНЗУЛ",
  },
  {
    id: 2,
    imageUrl: "/images/book/6425910618774315712_180_x_247.png",
    title: "“ИРЭЭДҮЙН ЕРТӨНЦ“ НИЙТЛЭЛ БИЧЛЭГИЙН ШИНЭ НОМ, ",
    price: "8.00USD",
    content:
      " Он жилийн охорхон бодол, исээ, бичил үгүүлэл, татлага, мэдээ мэдээлэл,",
  },
  {
    id: 3,
    imageUrl: "/images/book/7610322725513582374_180_x_247.png",
    title: "МОНГОЛ ХЭЛНИЙ ТООНЫ БОЛОН ХЭМТ ҮГИЙН САН",
    price: "6.00USD",
    content: "Монгол хэлний тооны үгийн сан жишээний хамт,",
  },
  {
    id: 4,
    imageUrl: "/images/book/2456073702971551262_180_x_247.png",
    title: "МОНГОЛ-ЯПОН ЯРИАНЫ ДЭВТЭР",
    price: "5.00USD",
    content:
      "Япон хэлтэй монгол хэл суралцагч, болон жуулчлагч нарт зориулвай.",
  },
  {
    id: 5,
    imageUrl: "/images/book/5337497365961638776_180_x_247.png",
    title: "“COLLOQUIAL MONGOLIAN“ NEW-YORK, LONDON, ROUTLEDGE,",
    price: "60.00USD",
    content:
      "  Лондоны Их Сургуульд ажиллаж байхдаа Британий Монголч эрдэмтэн Алан Сандерсийн хамт бэлтгэж Лондонд хэвлүүлэв.",
  },
  {
    id: 6,
    imageUrl: "/images/book/4526717844309056618_180_x_247.png",
    title: "МОНГОЛ ЁС ЗАНШЛЫН ИХ ТАЙЛБАР ТОЛЬ",
    price: "15.00USD",
    content:
      " Нэрт монголч эрдэмтэн Х.Нямбуугийн гэгээн дурсгалд зориулан судлаач Ч.Арьяасүрэнгийн хамт бэлтгэн хэвлүүлэв",
  },
  {
    id: 7,
    imageUrl: "/images/book/4606271830311144364_180_x_247.png",
    title: "МОНГОЛ-АНГЛИ, АНГЛИ-МОНГОЛ ТОВЧИЛСОН ҮГИЙН ТОЛЬ БИЧИГ",
    price: "10.00USD",
    content:
      " Эрхилсэн Осакагийн Хууль, Эдийн Засгийн Их Сургуулийн Профессор Сонг Жае Мог,",
  },
  {
    id: 8,
    imageUrl: "/images/book/4526712844308056599_180_x_247.png",
    title: "МОНГОЛ БИЧГИЙН ТОВЧ ТОЛЬ",
    price: "1993",
    content:
      " Д.Баасанбатын хамт, Кирил үсэгтэй хүн монгол бичиг сурахад зориулсан гарын авлага",
  },
  {
    id: 9,
    imageUrl: "/images/book/4526716844296056523_180_x_247.png",
    title: "“ЭРТНИЙ МОНГОЛ ХЭЛ“ УБ., 1995",
    price: "1995",
    content: " Профессор Ц.Шагдарсүрэнгийн хамт бэлтгэж хэвлүүлэв",
  },
  {
    id: 10,
    imageUrl: "/images/book/2026569603142736964_180_x_247.png",

    title: "“МОНГОЛ УЛСЫН ЕРӨНХИЙЛӨГЧ Н.ЭНХБАЯРЫН ҮГ, СЭТГЭЛГЭЭНИЙ ЕРТӨНЦ“",
    price: "2009",
    content:
      "  Н.Энхбаярын 2005-2009 онд Ерөнхийлөгчөөр ажиллах хугацаандаа хэлсэн үгийн ишлэл ном",
  },
  {
    id: 11,
    imageUrl: "/images/book/7107359048247595454_180_x_247.png",

    title: "МОНГОЛ ЯРИАНЫ СУРАХ БИЧИГ I, /АУДИО CD ТЭЙ/",
    price: "25.00USD",
    content: "",
  },
  {
    id: 12,
    imageUrl: "/images/book/712896800398022127_180_x_247.png",

    title: "Colloquial Mongolian: The Complete Course for Beginners ",
    price: "2007",
    content: "",
  },
  {
    id: 13,
    imageUrl: "/images/book/5477029149206725921_180_x_247.png",

    title:
      "Oxford Monsudar English-Mongolian, Mongolian-English Pocket Dictionary",
    price: "2008",
    content: " ",
  },
  {
    id: 14,
    imageUrl: "/images/book/2715375538606186295_180_x_247.png",

    title: "Mongolian: Lonely Planet Phrasebook",
    price: "8.99USD",
    content: "",
  },
  {
    id: 15,
    imageUrl: "/images/book/4526705844177056262_180_x_247.png",

    title: "ЗҮЙР ЦЭЦЭН ҮГИЙН ЗҮЙЛЭЭР ХУВААСАН ТОЛЬ",
    price: "5.00USD",
    content: "",
  },
  {
    id: 16,
    imageUrl: "/images/book/8151647670248223542_180_x_247.png ",

    title: "МОНГОЛ ХЭЛНИЙ ХЭЛЗҮЙН ДАГАВАР, НӨХЦӨЛ, БАЙМЖ ҮГИЙН САН",
    price: "5.00USD",
    content:
      "Эрхилсэн Проф. Сон Жаемог, (Osaka University of Economics and Law), Монгол хэлний хэлзүйн дагавар нөхцлийн сан, жишээний хамт",
  },
  {
    id: 17,
    imageUrl: "/images/book/4606271830311144367_180_x_247.png",

    title: "МОНГОЛ-АНГЛИ ХЭЛНИЙ ХЭЛЦ ҮГ, ХЭВШМЭЛ ХЭЛЛЭГИЙН ДҮЙМЭН",
    price: "15.00USD",
    content:
      "Англи хэлний хэлц үг болон хэвшмэл хэллэгийг монгол хэлээр утга дүйлгэн орчуулах нь",
  },
  {
    id: 18,
    imageUrl: "/images/book/4606271830311144354_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ ХЭВШМЭЛ ХЭЛЛЭГ ДЭХ ХЭЛЦ ҮГИЙН УТГА",
    price: "15.00USD",
    content:
      "Эрхилсэн профессор К.Окада, Хэвшмэл хэллэгийн хэлц үгийг багтаасан анхны гарын авлага",
  },
  {
    id: 19,
    imageUrl: "/images/book/4606271830311144368_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ ХЭЛЦ ҮГ, ХЭЛЛЭГИЙН УТГА ХЭРЭГЛЭЭ",
    price: "25.00USD",
    content:
      "Эрхилсэн Монгол Улсын Шинжлэх Ухааны гавияат ажилтан, проф. Б.Пүрэв-Очир, монгол хэлний хэлц үгийн талаар дангаар хийсэн анхны сурах бичиг,",
  },
  {
    id: 20,
    imageUrl: "/images/book/4606271830311144365_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ ОЙРОЛЦОО УТГАТ ХЭЛЦ ҮГИЙН ТОВЧ ТОЛЬ БИЧИГ",
    price: "5.00USD",
    content: "Эрхилсэн Проф. Ж.Баянсан, Гадаадын хүнд зориулсан гарын авлага",
  },
  {
    id: 21,
    imageUrl: "/images/book/4606271830311144361_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ ОЙРОЛЦОО, ЭСРЭГ УТГАТ ҮГ, ХЭЛЛЭГИЙН ТОЛЬ БИЧИГ",
    price: "20.00USD",
    content:
      "Эрхилсэн Монгол Улсын гавияат багш, проф. Ц.Сүхбаатар, Ойролцоо болон эсрэг үгийг хамтатган багтаасан орчин үеийн аргаар хийсэн анхны толь бичиг",
  },
  {
    id: 22,
    imageUrl: "/images/book/4606271830311144353_180_x_247.png",

    title:
      "TRAVELLER'S LANGUAGE GUIDE MONGOLIAN BY J.BAT-IREEDUI AND B.NOMUNZUL",
    price: "15.00USD",
    content:
      "   Эрхилсэн Б.Хонгорзул, Гадаад хүнд зориулсан ярианы дэвтэр, товч дүймэн,",
  },
  {
    id: 23,
    imageUrl: "/images/book/2648878010542609348_180_x_247..png",

    title:
      "GUIDE DE CONVERSATION MONGOL-FRANCAIS Ж.БАТ-ИРЭЭДҮЙ, Б.АЛТАНГҮЛ, УБ., 200",
    price: "5.00USD",
    content:
      "Франц хэлтэн жуулчин аялагч нарт зориулсан монгол хэлний гарын авлага, бэсрэг толь бичиг",
  },
  {
    id: 24,
    imageUrl: "/images/book/3053747924194378749_180_x_247.png",

    title:
      "МОНГОЛ ХЭЛНИЙ ЕРӨӨЛ БЭЛГЭ, ХАРААЛ ЗҮХЭЛ ҮГИЙН САН, Ж.БАТ-ИРЭЭДҮЙ, 2009",
    price: "5.00USD",
    content:
      "Эрхилсэн Г.Буянтогтох (МУИС), Монгол хэлний ерөөх бэлгэдэх, хараах зүхэх, уулга алдах үг хэллэгийн жишээ, хэлхээс.",
  },
  {
    id: 25,
    imageUrl: "/images/book/5685538708772867931_180_x_247.png",

    title: "МОНГОЛ ГАЗАР, УСНЫ НЭРИЙН САН, Ж.БАТ-ИРЭЭДҮЙ, 2009",
    price: "5.00USD",
    content:
      " Эрхилсэн Профессор Х.Футаки, Монголын уран зохиолын газар усны нэрийн санг бүрдүүлсэн, жишээ, нэрсийн хэлхээтэй.",
  },
  {
    id: 26,
    imageUrl: "/images/book/8528456223137058412_180_x_247.png",

    title: "МОНГОЛ ХҮНИЙ НЭР, ХОЧ НЭРИЙН САН, Ж.БАТ-ИРЭЭДҮЙ, 2009",
    price: "5.00USD",
    content:
      " Эрхилсэн Ц.Сувд (МУИС), Монгол уран зохиол дах хүний нэр, хоч нэрийн сан, жишээтэй, хэлхээстэй.",
  },
  {
    id: 27,
    imageUrl: "/images/book/5089535785766541502_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ ХОРШОО ҮГ ХЭЛЛЭГИЙН ТОВЧ ТОЛЬ БИЧИГ",
    price: "10.00USD",
    content: "Монгол хэлний хоршоо үгийн анхны толь бичиг,",
  },
  {
    id: 28,
    imageUrl: "/images/book/3764501656369252091_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ ХЭЛЗҮЙН САН, Ж.БАТ-ИРЭЭДҮЙ, УБ., 2009",
    price: "15.00USD",
    content:
      " Эрхилсэн Проф. К.Окада, Монгол хэлний анхан болон дундаас дээш төвшинд суралцагч нарт зориулсан гарын авлага, сурах бичиг",
  },
  {
    id: 29,
    imageUrl: "/images/book/4526712844306056587_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ ҮГ, УТГЫН САН, Ж.БАТ-ИРЭЭДҮЙ, УБ., 2006, 2007",
    price: "15.00",
    content:
      "  Эрхилсэн проф. К.Коппе, Б.Батсүх, Гадаадын хүнд зориулсан үгийн сангийн бүрэн хэмжээний сурах бичиг",
  },
  {
    id: 30,
    imageUrl: "/images/book/4876089759559715712_180_x_247.png",

    title:
      "GOLDENKEY TO MONGOLIAN, WITH AUDIO CD, BY А.MUNKHTSETSEG, KH.DELGERMAA,",
    price: "25.00USD",
    content: "Хянан тохиолдуулсан Ж.Бат- Ирээдүй",
  },
  {
    id: 31,
    imageUrl: "/images/book/8336879002899606361_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ СОНСОХ ДАДЛАГА",
    price: "15.00USD",
    content:
      "Эрхилсэн дэд проф. Д.Баасанбат, Ахисан төвшиний монгол хэлтэй хүнд зориулсан си ди-тэй сурах бичиг, Монголын Уран зохиолын 11 шилдэг үгүүлэл багтжээ.",
  },
  {
    id: 32,
    imageUrl: "/images/book/7239591283736064459_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ СОНСОХ ДАДЛАГА",
    price: "2009",
    content:
      " Энэхүү “Монгол хэлний сонсох дадлага” I, II номыг Монгол хэл сурч байгаа гадаадын хүмүүст зориулсан. ",
  },
  {
    id: 33,
    imageUrl: "/images/book/1505629938414706722_180_x_247.png",

    title: "АНУ-ЫН ЕРӨНХИЙЛӨГЧ БАРАК ОБАМА, ТҮҮНИЙ ШИЛДЭГ ИЛТГЭЛҮҮД",
    price: "6.00USD",
    content:
      " Edited by J.Bat-Ireedui, CD book, Энэ номд түүний намтар, Чикагод хэлсэн ялалтын үг, АНУ-ын Ерөнхийлөгчийн тангараг өргөхдөө хэлсэн үг болон АНУ-ын 43 Ерөнхийлөгчийн товч намтар багтсан.",
  },
  {
    id: 34,
    imageUrl: "/images/book/1429872152358769395_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ ХОРШОО ҮГ, ХЭЛЛЭГИЙН САН",
    price: "2009",
    content:
      "Эрхилсэн Профессор Канг Шинь, (БНСУ-ын Дан Күгийн Их Сургууль), Монгол хэлний хоршоо үг, хэллэгийн анхны бүрэн толь бичиг, 440 хуудастай, Үнэ 25.00",
  },
  {
    id: 35,
    imageUrl: "/images/book/2097843027366184035_180_x_247.png",

    title: "МОНГОЛ ХЭЛНИЙ ХЭЛЦ ҮГИЙН САН",
    price: "2009",
    content:
      "Эрхилсэн К.Окада, Ж.Баянсан, Монгол хэлний хэлц үгийн бүрэн хэмжээний толь бичиг, 10 орчим мянган үг хэллэгтэй, ISBN 99929-0-1076, 309 хуудастай, Үнэ 25.00 USD",
  },
];
