"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/navigation";

interface Post {
  id: number;
  imageUrl?: string;
  title: string;
  content: string;
  post: string;
  category: string;
}
const postsPerPage = 10;

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(postList.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = postList.slice(startIndex, startIndex + postsPerPage);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) setCurrentPage(Number(savedPage));
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page.toString());
  };
  return (
    <div
      className="content"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div id="content" style={{ display: "block" }}>
        <h1>МЭДЭЭ МЭДЭЭЛЭЛ</h1>
        <div className="post_list">
          {currentPosts.map((post) => (
            <div key={post.id} className="post_intro">
              <Link href={`/sidebar/medee/${post.id}`}>
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
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
}

const postList: Post[] = [
  {
    id: 1,
    imageUrl: "/images/sidebar/4577304916580930216_301_x_200.png",
    title: "АЗИ НОМХОН ДАЛАЙН ОРНУУДЫН МОНГОЛ СУДЛАЛЫН ТӨЛӨВ",
    content:
      "Өнгөрсөн оны сүүлээр Монгол Судлалын Үндэсний зөвлөлийн төлөөлөгчид Австрали, Япон, Солонгос Улсын монгол судлалын гол төвүүдээр ажлын айлчлал хийсэн юм. Тус төлөөлөгчидийн бүрэлдэхүүнд миний бие оролцож Австрали, Япон, Өмнөд Солонгос ...",
    post: "Нийтэлсэн: 2012-04-02, 14:36",
    category: "Ангилал: МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 2,
    imageUrl: "/images/sidebar/2633159397291630612_301_x_200.png",
    title: "ИНАЛКО-той гэрээ байгууллаа",
    content:
      "МУИС-ийн захирал профессор Санжбэгзийн Төмөр-Очир 2012 оны 5 дугаар сарын 25 нд Францын дорно дахины хэл иргэншлийн үндэсний дээд сургуулийн захирал профессор, монголч эрдэмтэн Жак Легрантай хоёр их сургуулийн хамтын ...",
    post: "Нийтэлсэн: 2012-04-03, 13:11",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 3,
    imageUrl: "/images/sidebar/2694311628150063077_301_x_200.png",
    title: "ДЭЛХИЙН ХАМГИЙН ТОМ ГАЗАР ХӨДЛӨЛТ",
    content: "Хамгийн хүчтэй газар хөдлөлтүүд 1 Гансу 6 ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 4,
    imageUrl: "/images/sidebar/2694311628150063076_301_x_200.png",
    title: "Дэлхийн хамгийн идэвхитэй галт уулс",
    content:
      "Галт уул Улс Гол үеүд 1. Килауеа Хавай 1823-1987 2. Стромболи Итали 1768-1952 3. Санторини/Тхира Греек 1470-1870 4. Сайнт Хэлэнс АНУ 1800-87, 1980-аад он 5. Вулкано Итали 1890 6. Кракатоа ...",
    post: "Нийтэлсэн: 2012-03-29, 15:27",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 5,
    imageUrl: "/images/sidebar/2694311628150063079_301_x_200.png",
    title: "Дэлхийн хамгийн өндөр уулс",
    content:
      "Дэлхийн өндөр уулс Уулсын нэрс орчин метр А Еверест  Гималай 8848 Б К2 Гималай 8611 В Канченжунга    Гималай 8598 Г Лотце Гималай 8511 Д Яалунг КангГималай ...",
    post: "Нийтэлсэн: 2012-03-29, 15:24 ",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 6,
    imageUrl: "/images/sidebar/2694311628150063078_301_x_200.png",
    title: "Тивүүдийн өндөр уулс",
    content:
      " Тивүүдийн өндөр уулс Уулын нэр Тив метр 1 Еверест Ази 8848 2 Аконцагуа Өмнөд Америк6906 3 Макинлей Хойд Америк 6194 4 Килманжаро Африк 5895 5 Элбрус Европ 5633 6 ...",
    post: "Нийтэлсэн: 2012-03-28, 18:40",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 7,
    imageUrl: "/images/sidebar/2694311628150063073_301_x_200.png",
    title: "Дэлхийн хамгийн урт голууд",
    content:
      "УРТ ГОЛ Гол Тив км 1 Нил Африк 6670 2 Амазон Өмнөд Америк 6448 3 Миссиссиппи Хойд Америк 5970 4 Еннисей-Ангар- Сэлэнгэ Ази 5540 5 Янце Ази 5530 6 ...",
    post: "Нийтэлсэн: 2012-03-24, 19:26",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 8,
    imageUrl: "/images/sidebar/2694311628150063072_301_x_200.png",
    title: "Дэлхийн томоохон хүрхрээнүүд",
    content:
      "Хүрхээ Улс метр А Анжел Венесулиа 979 Б Тугела Өмнөд Африк  948 В Утигард Норвеги 800 Г Мондефоссен Норвеги 774 Д Ёосемите АНУ 739 Е Остре Мардола Норвеги 657 ...",
    post: "Нийтэлсэн: 2012-03-24, 19:20",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 9,
    imageUrl: "/images/sidebar/2694311628150063075_301_x_200.png",
    title: "Дэлхийн томоохон далай тэнгисүүд",
    content:
      "Далай хав.дөр.км. 1. Номхон далай 165.760.000 2. Атлантын далай 81.585.000 3. Энэтхэгийн далай 73.556.000 4. Аркатик               ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 10,
    imageUrl: "/images/sidebar/2694311628150063074_301_x_200.png",
    title: "Дэлхийн томоохон арлууд",
    content:
      "Арал хав.дөр.км 1. Грийнланд 2.176.000 2. Шинэ Гивениа                820.657 3. Борнео 743.254 4. Мадаксакар  ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 11,
    imageUrl: "/images/sidebar/11.jpg",
    title: "Дэлхийн томоохон цөлүүд",

    content: "",
    post: "Нийтэлсэн: 2012-04-02, 14:11",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 12,
    imageUrl: "/images/sidebar/12.jpg",
    title: "Дэлхийн хамгийн том газар нутагтай улсууд",

    content: "",
    post: "Нийтэлсэн: 2012-04-02, 14:09",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 13,
    imageUrl: "/images/sidebar/13.jpg",
    title: "Дэлхийн хамгийн жижиг нутаг дэвсгэртэй улсууд",

    content: "",
    post: "Нийтэлсэн: 2012-04-02, 14:06",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 14,
    imageUrl: "/images/sidebar/14.jpg",
    title: "Дэлхийн хамгийн их хүн амтай улсууд",

    content: "",
    post: "Нийтэлсэн: 2012-04-02, 14:02",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 15,
    imageUrl: "/images/sidebar/15.jpg",
    title: "Дэлхийн хамгийн цөөн хүн амтай улсууд",

    content: "",
    post: "Нийтэлсэн: 2012-04-02, 13:59",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 16,
    imageUrl: "/images/sidebar/16.jpg",
    title: "Нэг километрт хамгийн олон хүнтэй орнууд",

    content: "",
    post: "Нийтэлсэн: 2012-04-02, 13:57",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 17,
    imageUrl: "/images/sidebar/17.jpg",
    title: "Нэг километр талбайд хамгийн бага хүнтэй улсууд",

    content: "",
    post: "Нийтэлсэн: 2012-04-02, 13:53",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 18,
    imageUrl: "/images/sidebar/20.jpg",
    title: "Дэлхийн гол хэлнүүд",

    content: "",
    post: "Нийтэлсэн: 2012-04-02, 13:52",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 19,
    imageUrl: "/images/sidebar/21.jpg",
    title: "Ж.Бат-Ирээдүй: АВСТРАЛИД МОНГОЛ СУДЛАЛ ХӨГЖИНӨ",

    content: "",
    post: "Нийтэлсэн: 2012-02-29, 12:16",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 20,
    imageUrl: "/images/sidebar/18.jpg",
    title:
      "2011 ОНЫ 11 САРЫН 16-НЫ 11:30 Д УРАН ЗУРГИЙН ГАЛЛЕРЕЙД МӨНХ ТЭНГЭРИЙН БИЧИГ УРАН ЗУРГИЙН ҮЗЭСГЭЛЭН НЭЭГДЭНЭ",

    content: "",
    post: "Нийтэлсэн: 2011-11-15, 13:26",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 21,
    imageUrl: "/images/sidebar/23.jpg",
    title: "Эмчилгээний виз олгоно",

    content: "",
    post: "Нийтэлсэн: 2011-01-31, 13:15",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
  {
    id: 22,
    imageUrl: "/images/sidebar/24.jpg",
    title: "Алтан гадас чигийг заана",

    content: "",
    post: "Нийтэлсэн: 2009-12-20, 11:35",
    category: "МЭДЭЭ МЭДЭЭЛЭЛ",
  },
];
