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
        <h1>ЭШ ҮГС</h1>
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
    imageUrl: "/images/sidebar/brain-adams.png",
    title: "brain-adams",
    href: "/news/brain-adams",
    content:
      " ЭНЭ ХӨГЖМИЙН ЕРТӨНЦӨД ЯМАР НЭГЭН ОРОН ЗАЙ ЭЗЛЭЖ БАЙГААГАА БИ МЭДДЭГ, МЭДЭРДЭГ. ХЭРЭВ БИ ЭНЭ ЕРТӨНЦӨД АМЖИЛТ ОЛООГҮЙ БОЛ ЯАХ БАЙСАН ЮМ, БҮҮ МЭД. ЯМАР Ч БАЙСАН НЭГ ЗҮЙЛ ХИЙХ ...",
    post: "Нийтэлсэн: 2009-12-26, 22:15",
    category: "Ангилал: ЭШ ҮГС",
  },
  {
    id: 2,
    imageUrl: "/images/sidebar/4997806631357537317_301_x_200.png",
    title: "Поп Жон Поул II",
    href: "/news/pop-jon-poul",
    content:
      "Ирээдүй маргаашаас биш өнөөдрөөс эхлэдэг.&nbsp;Асуудлыг нударгаар шийдэх нь эр хүний зан биш. Тэнэглэл нь бурханы бэлэг ч гэсэн буруугаар ашиглах ёсгүй.Эрх чөлөө гэдэг бидний хийх дуртайг биш харин бидний хийх ёстойг ...",
    post: "Нийтэлсэн: 2009-12-23, 22:50",
    category: " Ангилал: ЭШ ҮГС",
  },
  {
    id: 3,
    imageUrl: "/images/sidebar/9056475194510685604_301_x_200.png",
    title: "William Blake",
    href: "/news/william-blake",
    content:
      " Дайсныг мартах нь найзаа мартахаас амархан. It is easier to forgive an enemy than forgive a friend.William Blake 1757 оны 11 сарын 28 нд төрж, 1827 оны 8 сарын 12 ...",
    post: "2009-12-18, 22:30",
    category: " Ангилал: ЭШ ҮГС",
  },
  {
    id: 4,
    imageUrl: "/images/sidebar/3211625169114799044_301_x_200.png",
    title: "Далай ламын гүн ухаан",
    href: "/news/dalai-lamiin-gun...",
    content:
      "Та бусдыг аз жаргалтай байлгахыг хүсвэл хайр энэрэлд суралц. Өөрөө аз жаргалтай байхыг хүсэж байвал хайр энэрэлд суралц. Энэ бол миний энгийн шашин. Сүм дуган хэрэггүй. Толгой эргүүлсэн гүн ухаан ...",
    post: "Нийтэлсэн: 2009-12-14, 00:15",
    category: " Ангилал: ЭШ ҮГС",
  },
  {
    id: 5,
    imageUrl: "/images/sidebar/1341311383585863738_301_x_200.png",
    title: "Luciano Pavarotti",
    href: "/news/Luciano-pavarotti",
    content:
      "ХӨГЖИМ СОНСОХОД ТАНД ӨӨР УУРАГ ТАРХИ ХЭРЭГГҮЙ.You don't need any brains to listen to music.Luciano Pavarotti 1935 оны 10 сарын 2007 оны 9 сарын 6 нд өнгөрсөн.",
    post: "Нийтэлсэн: 2009-12-12, 22:25 ",
    category: " Ангилал: ЭШ ҮГС",
  },
];
