"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Post {
  id: number;
  imageUrl?: string;
  title: string;
  content: string;
  post: string;
  category: string;
  content2: string;
}

export default function Page() {
  const { id } = useParams();
  const postId = Number(id);
  const post = postList.find((p) => p.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: post.content2 }}></div>;
}
const postList: Post[] = [
  {
    id: 1,
    imageUrl: "/images/book/tgaIGKDQqhA.png",
    title: "Харвардын хөгжимчин",

    content2:
      '<div id="content" style="display: block;"><h1><span style="margin-right: 8px;">Харвардын</span><span>хөгжимчин</span></h1><div class="post_content_full"><p><iframe width="100%" height="400" src="http://www.youtube.com/embed/tgaIGKDQqhA?autoplay=1&showinfo=0&rel=0" frameborder="0" allowfullscreen=""></iframe></p></div><div class="post_info_full left">Ангилал: <a href="/">Home</a>, <a href="/sidebar/video-bolon-bichleg/">ВИДЕО БОЛОН БИЧЛЭГ</a></div><div class="post_info_full right">2012.07.09</div><div class="clear"></div></div>',

    content: "",
    post: "Нийтэлсэн: 2012-04-02, 14:36",
    category: "Ангилал: видео-болон-бичлэг",
  },
  {
    id: 2,
    imageUrl: "/images/thumb_sample.jpg",
    title:
      " New York Democracy Forum Dinner 2011 - Tsakhiagiin Elbegdorj, President of Mongolia",

    content2:
      '<div id="content" style="display: block;"><h1><span style="margin-right: 8px;">New</span><span style="margin-right: 8px;">York</span><span style="margin-right: 8px;">Democracy</span><span style="margin-right: 8px;">Forum</span><span style="margin-right: 8px;">Dinner</span><span style="margin-right: 8px;">2011</span><span style="margin-right: 8px;">-</span><span style="margin-right: 8px;">Tsakhiagiin</span><span style="margin-right: 8px;">Elbegdorj,</span><span style="margin-right: 8px;">President</span><span style="margin-right: 8px;">of</span><span>Mongolia</span></h1><div class="post_content_full"><p><iframe src="http://www.youtube.com/embed/zAN8g57B-FA" frameborder="0" width="420" height="315"></iframe></p></div><div class="post_info_full left">Ангилал: <a href="/sidebar/video-bolon-bichleg/">ВИДЕО БОЛОН БИЧЛЭГ</a></div><div class="post_info_full right">2012.03.07</div><div class="clear"></div></div>',

    content:
      "Дэлхийн их сургуулиуд бүгд өөрийн гэсэн хэвлэлийн газартай байдаг. Тухайлбал бидний сайн мэдэх Оксфорд Университи Пресс (www.oup.co.uk), Харвард Университи Пресс (www.hup.harward.edu), Кембриж Университи Пресс (www.cambridge.org), Йэле Университи Пресс (www.yale.edu/yup), Колумб ...",
    post: "Нийтэлсэн: 2012-04-03, 13:11",
    category: " Ангилал: видео-болон-бичлэг",
  },
  {
    id: 3,
    imageUrl: "/images/thumb_sample.jpg",
    title: "'Чи юуг хайрладаг тэр зүйлээ л олох хэрэгтэй,' Стэв Жоб",
    content2: "",
    content:
      "STEVE JOBS: YOUR TIME IS LIMITED, SO DON'T WASTE IT LIVING SOMEONE ELSE'S LIFE. &nbsp; АППЛЕ компанийг үндэслэгч СТИВ ЖОБС-ийн 2005 оны 6 дугаар сарын 12 нд буюу хавдар хэмээх ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: " Ангилал: видео-болон-бичлэг",
  },
  {
    id: 4,
    imageUrl: "/images/thumb_sample.jpg",
    title: "GEORGE MICHAEL: LAST CHRISTMAS",

    content2:
      '<div id="content" style="display: block;"><h1 style="font-family: \'YourCustomFont\', sans-serif; font-size: 24px; font-weight: bold; margin: 0; padding: 0;">GEORGE MICHAEL: "LAST CHRISTMAS"</h1><div class="post_content_full"><p><iframe src="http://www.youtube.com/embed/XQ383Um0y2Q" frameborder="0" width="420" height="315"></iframe></p><p><strong>Last Christmas I gave you my heart&nbsp;<br />But the very next day you gave it away&nbsp;<br />This year To save me from tears&nbsp;<br />I\'ll give it to someone special&nbsp;<br /><br />Last Christmas I gave you my heart&nbsp;<br />But the very next day you gave it away&nbsp;<br />This year To save me from tears&nbsp;<br />I\'ll give it to someone special&nbsp;<br /><br />Once bitten and twice shy&nbsp;<br />I keep my distance&nbsp;<br />But you still catch my eye&nbsp;<br />Tell me baby&nbsp;<br />Do you recognize me?&nbsp;<br />Well&nbsp;<br />It\'s been a year&nbsp;<br />It doesn\'t surprise me&nbsp;<br />(Happy Christmas)&nbsp;<br />I wrapped it up and sent it&nbsp;<br />With a note saying "I love you"&nbsp;<br />I meant it&nbsp;<br />Now I know what a fool I\'ve been&nbsp;<br />But if you kissed me now&nbsp;<br />I know you\'d fool me again&nbsp;<br /><br />Last Christmas I gave you my heart&nbsp;<br />But the very next day you gave it away&nbsp;<br />This year To save me from tears&nbsp;<br />I\'ll give it to someone special&nbsp;<br /><br />A crowded room Friends with tired eyes&nbsp;<br />I\'m hiding from you&nbsp;<br />And your soul of ice&nbsp;<br />My god I thought you were&nbsp;<br />Someone to rely on&nbsp;<br />Me?&nbsp;<br />I guess I was a shoulder to cry on&nbsp;<br /><br />A face on a lover with a fire in his heart&nbsp;<br />A man under cover but you tore me apart&nbsp;<br />Now I\'ve found a real love you\'ll never fool me again&nbsp;<br /><br />Last Christmas I gave you my heart&nbsp;<br />But the very next day you gave it away&nbsp;<br />This year To save me from tears&nbsp;<br />I\'ll give it to someone special&nbsp;<br /><br />Last Christmas I gave you my heart&nbsp;<br />But the very next day you gave it away&nbsp;<br />This year To save me from tears&nbsp;<br />I\'ll give it to someone special&nbsp;<br /><br />A face on a lover with a fire in his heart&nbsp;<br />A man under cover but you tore him apart&nbsp;<br />Maybe next year I\'ll give it to someone&nbsp;<br />I\'ll give it to someone special</strong></p></div><div class="post_info_full left">Ангилал: <a href="/sidebar/video-bolon-bichleg">ВИДЕО БОЛОН БИЧЛЭГ</a></div><div class="post_info_full right">2012.03.06</div><div class="clear"></div></div>',

    content:
      "Last Christmas I gave you my heart&nbsp;But the very next day you gave it away&nbsp;This year To save me from tears&nbsp;I'll give it to someone special&nbsp;Last Christmas I gave you ...",
    post: "Нийтэлсэн: 2012-03-29, 15:27",
    category: " Ангилал: видео-болон-бичлэг",
  },
  {
    id: 5,
    imageUrl: "/images/sidebar/qPpQeo_QWkA.png",
    title: "СОЛОНГОСЫН АРДЫН ХӨГЖИМ ЯТГА",

    content2:
      '<div id="content" style="display: block;"><h1 style="font-family: \'YourCustomFont\', sans-serif; font-size: 24px; font-weight: bold; margin: 0; padding: 0; line-height: 1.2;">СОЛОНГОСЫН АРДЫН ХӨГЖИМ ЯТГА</h1><div class="post_content_full"><p><iframe width="100%" height="400" src="http://www.youtube.com/embed/qPpQeo_QWkA?autoplay=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe></p></div><div class="post_info_full left">Ангилал: <a href="/sidebar/video-bolon-bichleg">ВИДЕО БОЛОН БИЧЛЭГ</a></div><div class="post_info_full right">2012.02.08</div><div class="clear"></div></div>',

    content: "",
    post: "Нийтэлсэн: 2012-03-29, 15:24 ",
    category: " Ангилал: видео-болон-бичлэг",
  },
  {
    id: 6,
    imageUrl: "/images/sidebar/0.jpg",
    title: "In Madison ",

    content2:
      '<div id="content" style="display: block;"><h1 style="font-family: \'YourCustomFont\', sans-serif; font-size: 24px; font-weight: bold; margin: 0; padding: 0;">In Madison</h1><div class="post_content_full"><p><iframe width="100%" height="400" src="http://www.youtube.com/embed/XarLc7UGvPI?autoplay=1&showinfo=0&rel=0" frameborder="0" allowfullscreen></iframe></p></div><div class="post_info_full left">Ангилал: <a href="/sidebar/video-bolon-bichleg">ВИДЕО БОЛОН БИЧЛЭГ</a></div><div class="post_info_full right">2011.11.13</div><div class="clear"></div></div>',

    content:
      "Буянт ухаад буух сайхан хэмээн нэгэн яруу найрагч дуу алдан шүлэглэсэн санагдана. Нээрээ л Буянт Ухаад буух сайхан, агаар нь цэнгэг, амисгал уужим тэнүүн. Энэ буянтай сайхан нэр алга болох ...",
    post: "Нийтэлсэн: 2012-03-28, 18:40",
    category: " Ангилал: видео-болон-бичлэг",
  },
];
