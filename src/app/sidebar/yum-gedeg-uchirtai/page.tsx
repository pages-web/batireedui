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
    router.push(`/sidebar/yum-gedeg-uchirtai/?page=${newPage}`);
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
        <h1>ЮМ ГЭДЭГ УЧИРТАЙ</h1>
        <div className="post_list">
          {currentPosts.map((post) => (
            <div key={post.id} className="post_intro">
              <Link href="/sidebar/yum-gedeg-uchirtai">
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
    imageUrl: "/images/sidebar/11341311383585863738_301_x_200.png",
    title: "ДОЛООН ТАХИЛЫН УТГА УЧИР АНУ",
    content:
      "“Хамгийн урд нүүрэнд долоон цөгц эгнүүлсний&nbдахь нь цэцэгтэй, дөрөв дэх нь хүжтэй, тав дахдахь нь ус, долоо дах нь ...",
    post: "Нийтэлсэн: 2012-04-02, 14:36",
    category: "Ангилал: ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 2,
    imageUrl: "/images/sidebar/1341311383585863739_301_x_200.png",
    title: "ӨЛЗИЙТ НАЙМАН ТЭМДЭГИЙН УЧИР",
    content:
      "“... өлзийт найман тэмдэг буюу найман тахил ярайж байна. Нисванисын халууныг буюу элдэв нүгэлт хүслийн шуналыг дарах бэлгэдэл болсон цагаан шүхэр, цэвэр алтаар цутгаж хийсэн бодь гөрөөсний дүрс, тус жаргалангийн ...",
    post: "Нийтэлсэн: 2012-04-03, 13:11",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 3,
    imageUrl: "/images/sidebar/not-found.png",
    title: "ОМ МА НИ БАД МЭ ХУМ-ЫН УЧИР",
    content:
      "Эх болсон зургаан зүйл хамаг амьтны оройн дээд нь тэнгэр нар бөгөөд түүнийг ом гэж томьёолно. Түүний дараах нь асар нар бөгөөд ма гэж тодорхойлно. Гурав дахь нь ни буюу ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 4,
    imageUrl: "/images/sidebar/413818969443438782_301_x_200.png",
    title: "ГАРЫН ҮСЭГ ЭЭ ГЭЖ",
    content:
      "Өнөөдрийн залуу дот ком хэмээх сайтад хоймроор голдуу суудаг нөхдүүдийн,&nbsp;&nbsp;манайдаа гайгүй&nbsp;томчуудын гарын үсэгтэй нэг мэдэгдэх захидал гээч юм нийтлэгдэж. Сүрийг үзүүлж байгаа бололтой юм.&nbsp;Хууль ёс нарийн, журам дүрэм хатуу газар ...",
    post: "Нийтэлсэн: 2012-03-29, 15:27",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 5,
    imageUrl: "/images/sidebar/4526753844552057020_301_x_200.png",
    title: "ХӨШӨӨ ДУРСГАЛ ГЭДЭГ УЧИРТАЙ",
    content:
      "Champs Elysees, Paris,&nbsp; Берлиний ханын ор мөр Near Berlin Haupbahnhoff Бетховений хөшөө, Бонн Герман хүн чулуу, Гөттингэн хот Berlin, Reihstagiin orchim Berlin, near Berlin State Library &nbsp;Дэлхий, Гөттингэн хот Хумбольдтын ...",
    post: "Нийтэлсэн: 2012-03-29, 15:24 ",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 6,
    imageUrl: "/images/sidebar/1341311383585863735_301_x_200.png",
    title: "Ж.Бат-Ирээдүй: ШАШНЫ ГАЗАР ЧӨТГӨР, ХУУЛИЙН ГАЗАР ХУЛГАЙ",
    content:
      "Монголчууд ёс бус, хууль биш зүйлийг зүйрлэн нэрлэсэн олон сайхан зүйр сэцэн үг сэтгэсэн улс. Сүүлийн үед шашны хүн нь хормой хотоо дарахаа байлаа, хуулийн хүмүүс нь ч худал хулгайгаа ...",
    post: "Нийтэлсэн: 2012-03-28, 18:40",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 7,
    imageUrl: "/images/sidebar/4275913238521694038_301_x_200.png",
    title: " Ж.БАТ-ИРЭЭДҮЙ: ХАЛУУРАЛТ ӨГӨХ",
    content:
      "Ажил дээрээ ирээд өглөөний мэдээ үзэж, вэб хуудас эргүүлж суутал “H1N1 вирусын шинэ тохиолдол нь халууралт єгєхгvйгээр илэрдэг” гэсэн гарчигтай нэг мэдээ байна. Гарчигийг нь хараад дургүй хүрчихлээ. Энэ мэргэжлийн ...",
    post: "Нийтэлсэн: 2012-03-24, 19:26",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 8,
    imageUrl: "/images/sidebar/2540923457385988975_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: АФОРИЗМ",
    content:
      " МИНИЙ АФОРИЗМ •&nbsp;“Аавын минь өгөх байсан алганы талыг ээж минь өгсөн юм, ээжийн минь үнэрлэсэн хайрын талыг аав минь өгч явуулжээ.”&nbsp; • “Аавын эрсэн адууны хагасыг ээж гэртээ суугаад олно.” ...",
    post: "Нийтэлсэн: 2012-03-24, 19:20",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 9,
    imageUrl: "/images/sidebar/7702542839519698801_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ЗАСДАГ ХҮН",
    content:
      "  Багш аа, засдаг хүн гэж юу гэсэн утгатай юм бэ, миний толинуудаас олддоггүй гэж Японд соёл судлалаар сурч байгаа нэг монгол оюутан утасдаж байна. Хуучин утга зохиол уншиж байгаа бололтой ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 10,
    imageUrl: "/images/sidebar/4322796414409707984_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ISSN ГЭЖ ЮУ ВЭ?",
    content:
      " ISSN гэж ямар утгатай үг вэ? Энэ бол International Standard Serial Number гэдэг үгийн товчлол. Энэ бол олон хувиар цувралаар хэвлэгдэх хэвлэлд өгдөг Олон Улсын Стандарт дугаар юм.&nbsp;Өнөөдөр надад 2010 ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 11,
    imageUrl: "/images/sidebar/4275913238521694039_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ:  НЭР",
    content:
      "Гадаадынханд хичээл заахад хүний санаанд оромгүй юм асуух нь энүүхэнд. Өөр өнцгөөс харж байгаа нь тэр бололтой. Саяхан нэг нөхөр бас нэг сонин юм асуулаа. Энэ бол хүний нэрийн тухай ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 12,
    imageUrl: "/images/sidebar/8020870505493124723_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ТАМГАНЫ ХИШИГ",
    content:
      "Монгол нутагт намрын сэрүүн орж, зарим нутгаар цас хэдийн орж, оройдоо жихүүн сэрүүхэн болжээ. Өнөөдөр намрын дунд сарын шинийн таван, цагаан бар өдөр байлаа. Энэ өдөр би Баянчандмань сумын адуучин ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 13,
    imageUrl: "/images/sidebar/2568291542428959536_301_x_200.png ",
    title: "ГАЙ ГАЗАР ДОРООС,",
    content:
      " Гай газар дороос. Токио хотод сүүлийн хэдэн жил амьдрахад хэд хэдэн удаа хүчтэй газар хөдлөж, 2008 оны хавар Ибараки мужид нэг том уул модтой юутай хүүтэйгээ нүүгээд замдаа таарсан зам, ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
  {
    id: 14,
    imageUrl: "/images/sidebar/7710025194981158245_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ:  НОМ БОЛ ХҮН ТӨРӨЛХТӨНИЙ ОЮУНЫ ӨМЧ",
    content:
      " НОМ БОЛ ЗӨВХӨН ТУХАЙН ҮНДЭСТНИЙОЮУНЫ ӨМЧ БИШ ХҮН ТӨРӨЛХТӨНИЙХХүн төрөлхтөн оюун ухаанаараа бүтээсэн бүхнээрээ ном судар бүтээж, номын сандаа хадгалж, түүнийг үе үеэрээ дамжуулан уншиж, сурч боловсордог жамтай. Ямар ч ...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
    category: "ЮМ ГЭДЭГ УЧИРТАЙ",
  },
];
