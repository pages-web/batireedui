"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/navigation";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FacebookShareButton, TwitterShareButton } from "next-share";

interface Post {
  id: number;
  imageUrl?: string;
  title: string;
  post: string;
  link: string;
}

const postsPerPage = 5;

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
    <>
      <head>
        <title>ФОТО БЛОГ | Бат-Ирээдүй</title>
        <link rel="icon" href="/images/favicon.ico" />
      </head>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div id="content" style={{ display: "block" }}>
          <div className="post_list_photo">
            {currentPosts.map((post) => (
              <div key={post.id} className="post_intro_photo">
                <div className="post_intro_photo_img">
                  {post.imageUrl && (
                    <Link href={post.link}>
                      <Image
                        alt={post.title}
                        src={post.imageUrl}
                        width={640}
                        height={476}
                      />
                    </Link>
                  )}
                </div>
                <div className="post_info_photo">
                  <h2>{post.title}</h2>
                  <p>{post.post}</p>
                  <div
                    className="right"
                    style={{ display: "flex", gap: "8px" }}
                  >
                    <FacebookShareButton url={"http://facebook.com"}>
                      <FacebookIcon
                        style={{ width: 30, height: 20, color: "blue" }}
                      />
                    </FacebookShareButton>
                    <TwitterShareButton url={"https://twitter.com/"}>
                      <TwitterIcon
                        style={{ width: 30, height: 20, color: "blue" }}
                      />
                    </TwitterShareButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

const postList: Post[] = [
  {
    id: 1,
    imageUrl: "/images/2270636313166314111_639_x_476.png",
    title: "ЗУН ЦАГ",
    link: "/news/zun-tsag",
    post: "2012-07-09, 18:15",
  },
  {
    id: 2,
    imageUrl: "/images/2931696708452888811_639_x_634.png",
    title: "Sergio Lopez Santa Rosa, CA ",
    link: "/photos/sergio-lopez",
    post: "Нийтэлсэн: 2012-04-03, 13:11",
  },
  {
    id: 3,
    imageUrl: "/images/2424887863782883115_639_x_465.png",
    title: "ОРЧИН ҮЕИЙН ОНГОЦНЫ ЗАГВАРУУД",
    link: "/photos/orchin-uyiin-ongots",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
  },
  {
    id: 4,
    imageUrl: "/images/3425853568282427083_639_x_428.png",
    title: "БЕРЛИН ХОТ",
    link: "/photos/berlin-hot",
    post: "Нийтэлсэн: 2012-03-29, 15:27",
  },
  {
    id: 5,
    imageUrl: "/images/6425874568305427037_639_x_955.png    ",
    title: "ВЕНА ХОТ",
    link: "/photos/vena-hot",
    post: "Нийтэлсэн: 2012-03-29, 15:24 ",
  },
  {
    id: 6,
    imageUrl: "/images/2673365644194483286_639_x_639.png",
    title: "БЕЛГИ УЛСЫН БРҮССЭЛ ХОТ",
    link: "/photos/belgi-ulsiin...",
    post: "Нийтэлсэн: 2012-03-28, 18:40",
  },
  {
    id: 7,
    imageUrl: "/images/4949020292100778226_639_x_427.png",
    title: "Унгарын Будапешт хот",
    link: "/photos/ungariin-budashipt-hot",
    post: "Нийтэлсэн: 2012-03-24, 19:26",
  },
  {
    id: 8,
    imageUrl: "/images/4606271830365144462_639_x_955.png",
    title: "ГӨТТИНГЭН ХОТ",
    link: "/photos/gottingen-hot",
    post: "Нийтэлсэн: 2012-03-24, 19:20",
  },
  {
    id: 9,
    imageUrl: "/images/6913296888041232243_639_x_427.png",
    title: "МУУ ХҮН ИДСЭНЭЭ ГЭЖ",
    link: "/photos/muu-hun...",
    post: "Нийтэлсэн: 2012-03-24, 19:11",
  },
  {
    id: 10,
    imageUrl: "/images/4606271830380144569_639_x_427.png",
    link: "/photos/er-hunii-chimeg...",
    title: "Эр хүний чимэг хурдан морь, хурц хутга гэж байлаа",
    post: "Нийтэлсэн: 2012-03-24, 19:01",
  },
  {
    id: 11,
    imageUrl: "/images/4526753844552057020_639_x_479.png",
    link: "/photos/hoshoo-dursgal-gedeg...",
    title: "ХӨШӨӨ ДУРСГАЛ ГЭДЭГ УЧИРТАЙ",
    post: "Нийтэлсэн: 2013-02-07, 22:48",
  },
  {
    id: 12,
    imageUrl: "/images/4606271830356144498_639_x_479.png",
    post: "Нийтэлсэн: 2012-03-24, 18:38",
    link: "/photos/london-bolon...",
    title: "ЛОНДОН БОЛОН ГРИЙНВИЧ ",
  },
  {
    id: 13,
    imageUrl: "/images/4606271830377144562_639_x_479.png",
    title: "СӨҮЛ БҮЛГОГСИ ХОТ",
    link: "/photos/soul-bulgogsi-hot",
    post: "Нийтэлсэн: 2012-03-24, 18:34",
  },
  {
    id: 14,
    imageUrl: "/images/4606271830362144451_639_x_479.png",
    post: "Нийтэлсэн: 2012-03-24, 18:30",
    link: "/photos/washington-dc",
    title: "ВАШИНГТОН ДИ СИ",
  },
  {
    id: 15,
    imageUrl: "/images/4606271830367144468_639_x_852.png",
    title: "ЯПОНЫ КОБЭ ХОТ",
    link: "/photos/yponii-kobe-hot",
    post: "Нийтэлсэн: 2012-03-24, 18:26",
  },
  {
    id: 16,
    imageUrl: "/images/4606271830353144496_639_x_479.png",
    title: "АНГЛИЙН КЕМБРИЖ ХОТ",
    link: "/photos/angiliin-kembrij",
    post: "Нийтэлсэн: 2012-03-24, 18:20",
  },
  {
    id: 17,
    imageUrl: "/images/4606271830355144491_639_x_427.png",
    link: "/photos/mongol-undestnii-ihk...",
    title: "МОНГОЛ ҮНДЭСТНИЙ ИХ БАЯР НААДАМ САЙХАН БОЛЛОО",
    post: "Нийтэлсэн: 2012-03-24, 17:35",
  },
  {
    id: 18,
    imageUrl: "/images/4526757844484056784_639_x_427.png",
    link: "/photos/arvan-hoyor-jiliin...",
    title:
      "АРВАН ХОЁР ЖИЛИЙН БАРИМАЛ ХАА БУЙ ВЭ? Ийм хөөрхөн баримал Улаанбаатар хотын яг хаана байдаг вэ? Таасан хүнийг таван  номоор шагнана",
    post: "Нийтэлсэн: 2012-03-24, 17:27",
  },
  {
    id: 19,
    imageUrl: "/images/4606271830314144372_639_x_852.png",
    title: "ХАРВАРД ХАВИЙН ЗУРГУУД",
    link: "/photos/harvard-haviin...",
    post: "Нийтэлсэн: 2012-03-24, 15:08",
  },
  {
    id: 20,
    imageUrl: "/images/992067526353350925_639_x_479.png",
    title: "FORBIDDEN CITY",
    link: "/photos/forbidden-city",
    post: "Нийтэлсэн: 2012-03-24, 14:45",
  },
  {
    id: 21,
    imageUrl: "/images/4526712844305056585_639_x_479.png",
    title: "WASHINGTON CITY",
    link: "/photos/washington-city",
    post: "Нийтэлсэн: 2012-03-07, 14:30",
  },
  {
    id: 22,
    imageUrl: "/images/4526712844308056600_639_x_479.png",
    title: "INDIANA BLOOMINGTON CITY",
    link: "/photos/indiana-bloomington",
    post: "Нийтэлсэн: 2012-03-07, 14:11",
  },
  {
    id: 23,
    imageUrl: "/images/4606271830303144276_639_x_852.png",
    title: "MADISON CITY",
    link: "/photos/madison-city",
    post: "Нийтэлсэн: 2012-03-07, 10:07",
  },
  {
    id: 24,
    imageUrl: "/images/4606271830304144274_639_x_479.png",
    title: "ҮНДЭСНИЙ НОМЫН САН ЖИЛИЙН ОЙГОО ТЭМДЭГЛЭЖ БАЙНА",
    link: "/photos/undesnii-nomiin-san...",
    post: "Нийтэлсэн: 2012-03-07, 09:46",
  },
  {
    id: 25,
    imageUrl: "/images/6020850505460124702_639_x_479.png",
    title: "МӨНХ ТЭНГЭРИЙН БИЧИГ ҮЗЭСГЭЛЭН НЭЭГДЛЭЭ",
    link: "/photos/monh-tengeriin-bichig...",
    post: "Нийтэлсэн: 22012-03-06, 21:14",
  },
  {
    id: 26,
    imageUrl: "/images/8108357235634088675_639_x_479.png",
    title: "КАНБЕРРАГААС СИДНЕЙ ОРОХ ЗАМД",
    link: "/photos/kanberragaas-sydney-oroh-zamd",
    post: "Нийтэлсэн: 2012-03-03, 17:35",
  },
  {
    id: 27,
    imageUrl: "/images/4577307916564930171_639_x_479.png",
    title: "СИДНЕЙ ХОТООР",
    link: "/photos/sydney-hotoor",
    post: "Нийтэлсэн: 2012-03-02, 23:23",
  },
  {
    id: 28,
    imageUrl: "/images/4577306916566930151_639_x_479.png",
    title: "ГАЗАР ГАЗРЫН ЦАГДАА",
    link: "/photos/gazar-gazriin-tsagdaa",
    post: "Нийтэлсэн: 2012-03-01, 00:03",
  },
  {
    id: 29,
    imageUrl: "/images/7020856505475124779_639_x_852.png",
    title: "ГАЗАР ГАЗРЫН ГАЛЫН ХОШУУ",
    link: "/photos/gazar-gazriin...",
    post: "Нийтэлсэн: 2012-02-29, 23:52",
  },
  {
    id: 30,
    imageUrl: "/images/45508006008433166_639_x_835.png",
    title: "ДЭЛХИЙН НЭРТ МОНГОЛЧ ЭРДЭМТЭД",
    link: "/photos/delhiin-nert-erdemten...",
    post: "Нийтэлсэн: 2012-02-29, 22:48",
  },
  {
    id: 31,
    imageUrl: "/images/9020877505501124707_639_x_852.png",
    title: "ТЭМДЭГ БА БЭЛГЭДЭЛ",
    link: "/photos/temdeg-ba-belgedel",
    post: "Нийтэлсэн:  2012-02-29, 12:23",
  },
  {
    id: 32,
    imageUrl: "/images/IMG_8055.png",
    title: "АНУ-ын КОНГРЕССИЙН НОМЫН САН",
    link: "/photos/kongressiin-nomiin-san",
    post: "Нийтэлсэн: 2012-02-15, 09:24",
  },
  {
    id: 33,
    imageUrl: "/images/6020846505469124764_639_x_479.png",
    title: "АНУ-ын ВАШИНГТОН ХОТ",
    link: "/photos/use-washington",
    post: "Нийтэлсэн: 2011-12-07, 23:46",
  },
  {
    id: 34,
    imageUrl: "/images/4577304916580930216_639_x_479.png",
    title: "АВСТРАЛИЙН СИДНЕЙ ХОТ",
    link: "/photos/australia-sydney",
    post: "Нийтэлсэн: 2011-12-07, 23:38",
  },
  {
    id: 35,
    imageUrl: "/images/4606271830311144364_639_x_477.png",
    title: "ГЭРЭЛ ЗУРАГ БА МУИС",
    link: "/photos/gerel-zurag-ba-muis",
    post: "Нийтэлсэн: 2011-11-30, 19:45",
  },
  {
    id: 36,
    imageUrl: "/images/8020857505483124750_639_x_479.png",
    title: "SHOP AND DESIGN",
    link: "/photos/shop-and-design",
    post: "Нийтэлсэн: 2011-11-30, 12:10",
  },
  {
    id: 37,
    imageUrl: "/images/1992067526353350925_639_x_479.png",
    title:
      "АВСТРАЛИЙН ҮНДЭСНИЙ ИХ СУРГУУЛИЙН МОНГОЛ СУДЛАЛЫН ТӨВИЙН АНХНЫ ХУРАЛ",
    link: "/photos/australiin-undesnii-ih...",
    post: "Нийтэлсэн: 2011-11-25, 19:35",
  },
  {
    id: 38,
    imageUrl: "/images/4606271830314144370_639_x_479.png",
    title: "УЛААНБААТАРААС КАНБЕРРА ОРОХ ЗАМД ",
    link: "/photos/ulaanbaataraas-kanberra",
    post: "Нийтэлсэн: 2011-11-23, 19:50",
  },
  {
    id: 39,
    imageUrl: "/images/4606271830304144288_639_x_900.png",
    title: "МӨНХ ТЭНГЭРИЙН БИЧИГ КАЛЛИГРАФИЙН ҮЗЭСГЭЛЭН НЭЭГДЭНЭ",
    link: "/photos/monh-tengeriin-niitelsen",
    post: "Нийтэлсэн: 2011-11-14, 09:50",
  },
  {
    id: 40,
    imageUrl: "/images/8020857505483124736_639_x_851.png",
    title: "HARVARD",
    link: "/photos/harvard",
    post: "Нийтэлсэн: 2011-11-13, 23:12",
  },
  {
    id: 41,
    imageUrl: "/images/3425846568147426791_639_x_425.png",
    title: "ДАЛАЙ ЛАМ",
    link: "/photos/dalai-lam",
    post: "Нийтэлсэн: 2011-11-11, 21:09",
  },
  {
    id: 42,
    imageUrl: "/images/7425883568314427012_639_x_427.png",
    title: "ГҮРРАГЧАА БААТАР",
    link: "/photos/gurragchaa-baatar",
    post: "Нийтэлсэн: 2011-11-11, 14:20",
  },
  {
    id: 43,
    imageUrl: "/images/6425866568176426799_639_x_427.png",
    title: "НУТГИЙН БӨХ",
    link: "/photos/nutgiin-boh",
    post: "Нийтэлсэн: 2011-11-06, 19:44",
  },
  {
    id: 44,
    imageUrl: "/images/5760616088303185005_639_x_852.png",
    title: "ЭЦЭГ ЧОЙБАЛСАНГИЙН ЭНЭ ХӨШӨӨ ХАА БАЙДАГ ВЭ?",
    link: "/photos/etseg-choibalsangiin...",
    post: "Нийтэлсэн: 2011-06-16, 17:25",
  },
  {
    id: 45,
    imageUrl: "/images/8462490603935385985_639_x_427.png",
    title: "Германы Көлн хот",
    link: "/photos/germanii-koln",
    post: "Нийтэлсэн: 2011-05-21, 15:20",
  },
  {
    id: 46,
    imageUrl: "/images/3309367106246171953_639_x_428.png",
    title: "ПАРИС ХОТ",
    link: "/photos/paris-hot",
    post: "Нийтэлсэн: 2011-05-20, 15:35",
  },
  {
    id: 47,
    imageUrl: "/images/1509201253231384425_639_x_479.png",
    title: "НУТГИЙН ЗҮГ",
    link: "/photos/nutgiin-zug",
    post: "Нийтэлсэн: 2011-04-11, 15:45",
  },
  {
    id: 48,
    imageUrl: "/images/7260105755001287238_639_x_479.png",
    title: "ТОКИО ХОТЫН АМЬДРАЛ",
    link: "/photos/tokio-hotiin-amidral",
    post: "Нийтэлсэн: 2011-03-30, 11:55",
  },
  {
    id: 49,
    imageUrl: "/images/8638902098159385138_639_x_479.png",
    title: "НАРИТА, ТОКИО ХОТЫН БАЙДАЛ",
    link: "/photos/narita-tokio",
    post: "Нийтэлсэн: 2011-03-17, 12:25",
  },
  {
    id: 50,
    imageUrl: "/images/4891743514782525551_639_x_479.png",
    title: "Шинийн хоёронд Токио орчимоор",
    link: "/photos/shiniin-hoyrond...",
    post: "Нийтэлсэн: 2011-02-04, 13:00",
  },
  {
    id: 51,
    imageUrl: "/images/201276529332523735_639_x_878.png",
    link: "/photos/drop-dead",
    title: "Drop-dead sexy audio gears",
    post: "Нийтэлсэн: 2011-01-02, 14:30 ",
  },
];
