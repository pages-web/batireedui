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
  href: string;
}

export default function page() {
  const currentPosts = postList;
  return (
    <div className="content">
      <div id="content" style={{ display: "block" }}>
        <h1>САНАА</h1>
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
    </div>
  );
}

const postList: Post[] = [
  {
    id: 1,
    imageUrl: "/images/thumb_sample.jpg",
    title: "УНАСАН БӨХӨД УЛИГ МУНДАХГҮЙ Ч ...",
    href: "/news/unasan-bohod-ulig-mundahgui...",
    content:
      " Саяхан миний бие МУИС-ийн Төлөөлөн Удирдах Зөвлөл (ТУЗ)-ийн 5 багшийн төлөөлөлийн орон тоонд Монгол хэл, соёлын сургуулийн нийт багш нарын хурлаас (цэвэр 46 багшаас 25 санал авсан шүү, ажилтан ороогүй ...",
    post: "Нийтэлсэн: 2012-04-02, 14:36",
    category: "Ангилал: САНАА",
  },
  {
    id: 2,
    imageUrl: "/images/sidebar/5923562124479434990_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭПҮЙ: МУИС ХЭВЛЭЛИЙН ГАЗАР БАЙГУУЛЪЯ ",
    href: "/news/J.Bat-Ireedui-muis-hevleliin...",
    content:
      "Дэлхийн их сургуулиуд бүгд өөрийн гэсэн хэвлэлийн газартай байдаг. Тухайлбал бидний сайн мэдэх Оксфорд Университи Пресс (www.oup.co.uk), Харвард Университи Пресс (www.hup.harward.edu), Кембриж Университи Пресс (www.cambridge.org), Йэле Университи Пресс (www.yale.edu/yup), Колумб ...",
    post: "Нийтэлсэн: 2012-04-03, 13:11",
    category: " Ангилал: САНАА",
  },
  {
    id: 3,
    imageUrl: "/images/sidebar/5425866568312427103_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: АВААРЫН ГЭРЭЛ",
    href: "/news/J.Bat-Ireedui-avaariin-gerel...",
    content:
      " Бүтэн сайн өдөр &nbsp;Энх тайвны гүүрээс ирэх чиглэлд Төв шуудангийн уулзврын замын гэрэл дээр араас ойр хавьд машингүй болохоор нь “аваарын гэрлээ” асааж байгаад машин дотроосоо нэг зураг дарах зуурт ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: " Ангилал: САНАА",
  },
  {
    id: 4,
    imageUrl: "/images/sidebar/4619274960347279293_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: АЛСЫН ХАРАА",
    href: "/",
    content:
      "“Алсын хараа” гэж нэг сайхан монгол үг бий. Холын бодол, уужуу ухаан, тулга тойрсон зүйл биш алс хэт, ирээдүйн бодол, ухаан гэсэн утгаар хэрэглэгддэг энэ хэлц үг бол холыг харах ...",
    post: "Нийтэлсэн: 2012-03-29, 15:27",
    category: " Ангилал: САНАА",
  },
  {
    id: 5,
    imageUrl: "/images/sidebar/336130240535442318_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ГАР УТАС",
    href: "/news/J.Bat-Ireedui-gar-utas",
    content:
      "Гар утас гээч дэлгэрч эхэлсэн цаг саяхан. Дөнгөж саяхан л ерээд оны эхээр Лондонд гар утас анх гарч Моторолла-гийн хүн цохиод унагачихмаар хүнд хар утсаар найзыгаа таксинаас Монголтой яриулж гайхуулж ...",
    post: "Нийтэлсэн: 2012-03-29, 15:24 ",
    category: " Ангилал: САНАА",
  },
  {
    id: 6,
    imageUrl: "/images/sidebar/4425855568174426757_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: БУЯНТ УХААД БУУХ САЙХАН, ХАРИН ...",
    href: "/news/J.Bat-Ireedui-buynt...",
    content:
      "Буянт ухаад буух сайхан хэмээн нэгэн яруу найрагч дуу алдан шүлэглэсэн санагдана. Нээрээ л Буянт Ухаад буух сайхан, агаар нь цэнгэг, амисгал уужим тэнүүн. Энэ буянтай сайхан нэр алга болох ...",
    post: "Нийтэлсэн: 2012-03-28, 18:40",
    category: " Ангилал: САНАА",
  },
  {
    id: 7,
    imageUrl: "/images/sidebar/3189166939203473143_301_x_200.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ДУУ СОНСОХООР BBC, VOA СОНСОГТУН",
    href: "/sidebar/bichil-uguulleg/14",
    content:
      "Миний блог үзэгч залуучууд яаж гадаад хэл хурдан сурах вэ тэр дундаа англи хэлээ хэрхэн богино хугацаанд сайжруулах вэ гэсэн асуулт их ирүүлж байна. Би нэг их сүрхий арга чарга ...",
    post: "Нийтэлсэн: 2012-03-24, 19:26",
    category: " Ангилал: САНАА",
  },
];
