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
    imageUrl: "/images/sidebar/5257626739446335936_301_x_200.png",
    title: "АРВАН ХАР НҮГЭЛ ГЭГЧ ЮУСАН БОЛ?",
    content2:
      '<div id="content" style={{ display: "block" }}> <h1 style="font-family: "Roboto", sans-serif; font-size: 16px; font-weight: bold;"> <span>АРВАН </span> <span>ХАР </span> <span>НҮГЭЛ </span> <span>ГЭГЧ </span> <span>ЮУСАН </span> <span>БОЛ?</span> </h1> <div className="post_content_full"> <p style={{ textAlign: "justify" }}> <span> <img src="/images/amarbayasmangas.jpg" alt="" style={{ float: "left", display: "inline", width: 350, marginRight: 10 }} /> <span style={{ fontSize: 14, color: "#000a83" }}> Арван хар нүгэл бол биеэр үйлдэх гурав, амаар үйлдэх гурав, сэтгэлээр үйлдэх дөрвөн хар нүгэлээс бүрдэнэ. Биеэр үйлдэх гурван хар нүгэлд нь алив амьтны амийг хөнөөх, хулгай дээрэм хийж хүчээр бусдын юмыг булаах, хүнийг янз бүрийн хэлбэрээр шулж мөлжин доромжлох болой. Ам хэлээр үйлдэх гурван хар нүгэлд, худлаа ярих, хов зөөх хоёрыг хутгах, амьтныг аашилж загнаж дээрэлхэж гүжирдэн гүтгэх болой. Сэтгэлээр үйлдэх дөрөвт бусдыг илүү үзэн билүү долоож,&nbsp;атаархан жөтөөрхөж байж ядах,&nbsp; эд хөрөнгө, эрх тушаал, алдар нэрэнд шунан дурлах, амьтанд хар санаж, хажиглан сэрдэх, үл итгэх, үмхийгээр хэхрэх ийм дөрвөн нүгэл болой. Ингээд арван хар нүгэл бүрдмүй.&nbsp; </span> </span> </p> </div> <div className="post_info_full left"> Ангилал: <a href="/">Home</a>, <a href="/sidebar/mongol-yos-zanshil"> МОНГОЛ ЁС ЗАНШИЛ </a> </div> <div className="post_info_full right">2012.02.16</div> <div className="clear" /> {/* Share Buttons */} <div className="disqus"> <div id="disqus_thread"> <iframe id="dsq-app6962" name="dsq-app6962" allowTransparency="true" frameBorder={0} scrolling="no" tabIndex={0} title="Disqus" width="100%" src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F141%2F123&t_d=%D0%90%D0%A0%D0%92%D0%90%D0%9D%20%D0%A5%D0%90%D0%A0%20%D0%9D%D2%AE%D0%93%D0%AD%D0%9B%20%D0%93%D0%AD%D0%93%D0%A7%20%D0%AE%D0%A3%D0%A1%D0%90%D0%9D%20%D0%91%D0%9E%D0%9B%3F&t_t=%D0%90%D0%A0%D0%92%D0%90%D0%9D%20%D0%A5%D0%90%D0%A0%20%D0%9D%D2%AE%D0%93%D0%AD%D0%9B%20%D0%93%D0%AD%D0%93%D0%A7%20%D0%AE%D0%A3%D0%A1%D0%90%D0%9D%20%D0%91%D0%9E%D0%9B%3F&s_o=default#version=d9bf63667ed03c99c8fc502b196e66ef" style={{ width: "1px !important", minWidth: "100% !important", border: "none !important", overflow: "hidden !important", height: "75px !important" }} horizontalscrolling="no" verticalscrolling="no" /> </div> </div> </div>',
    content:
      " Арван хар нүгэл бол биеэр үйлдэх гурав, амаар үйлдэх гурав, сэтгэлээр үйлдэх дөрвөн хар нүгэлээс бүрдэнэ. Биеэр үйлдэх гурван хар нүгэлд нь алив амьтны амийг хөнөөх, хулгай дээрэм хийж хүчээр ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "МОНГОЛ ЁС ЗАНШИЛ",
  },
  {
    id: 2,
    imageUrl: "/images/thumb_sample.jpg",
    title: "АРВАН ЦАГААН БУЯН АЛЬ БУЙ ХЭМЭЭВЭЭС",
    content2:
      '<div id="content" style={{ display: "block" }}> <h1 style="font-family: "Roboto", sans-serif; font-size: 16px; font-weight: bold;"> <span style="margin-right: 8px;">АРВАН</span> <span style="margin-right: 8px;">ЦАГААН</span> <span style="margin-right: 8px;">БУЯН</span> <span style="margin-right: 8px;">АЛЬ</span> <span style="margin-right: 8px;">БУЙ</span> <span>ХЭМЭЭВЭЭС</span> </h1> <div className="post_content_full"> <p style={{ textAlign: "justify" }}> <span style={{ color: "#000a83" }}> Арван цагаан буян аль буй хэмээвээс, нэгдүгээрт, хорхой шавьжнаас эхлээд алив амьтныг үл хөнөөж, харин аврах өршөөх арга замыг эрэлтэй, хоёрдугаарт, юмаа өгөлгүй харамласан хүнийг харааж зүхэлгүй, түүнд үл гомдож, авахыг үл бодон харин өөрөө өгч санааг нь амраах, гуравдугаарт, хүн болоод юмтай буруу харилцахыг тэвчин зүй зохицолыг эрхэмлэх, дөрөвдүгээрт, хов хэрүүл хөөж, холион бантан хутгахыг эгнэт&nbsp;жигшин, хүлээцтэй тайвуу уужуу&nbsp; байж, амирлангуйг хичээх, тавдугаарт, худлаа хэлж хуудуутай загнахыг цээрлэж, аливаа зүйлийг үнэн мөнөөр нь шударга үгүүлэх, зургаадугаарт, ширүүн дориун үг яриа хэлж гайхуулалгүй,нийлэмжтэй сайхан эв эеийг хичээж байх, долоодугаарт, ашиг хонжоо хичээсэн далд залхай үгийг тэвчиж, чин сэтгэлийн үгийг ил тод хэлж дадах, наймдугаарт нь, бусадтай арцалдах элдэв хорт сэтгэл агуулалгүй, бодож санасан зүйлээ ил шулуун хэлж байх, есдүгээрт, хомхой шунаг сэтгэлийг эгнэт цээрлэж, өрөвдөх хайрлах сэтгэлийг өөрийн болгон баримтлах, аравдугаарт, алив хүний эсрэг буруу үзэл бүхнээ засан тэвчиж, хүнлэг сэтгэлээр хандаж байх энэ арван цагаан буян буюу.&nbsp;Ж.Бат-Ирээдүй, Ч.Аръяасүрэн, “Монгол ёс заншлын их тайлбар толь”, 1999, Уб., </span> </p> </div> <div className="post_info_full left"> Ангилал: <a href="/sidebar/mongol-yos-zanshil"> МОНГОЛ ЁС ЗАНШИЛ </a> </div> <div className="post_info_full right">2012.02.16</div> <div className="clear" /> {/* Share Buttons */} <div className="disqus"> <div id="disqus_thread"> <iframe id="dsq-app6964" name="dsq-app6964" allowTransparency="true" frameBorder={0} scrolling="no" tabIndex={0} title="Disqus" width="100%" src="https://disqus.com/embed/comments/?base=default&f=batireedui&t_u=http%3A%2F%2Fbatireedui.com%2Fpost%2F140%2F123&t_d=%D0%90%D0%A0%D0%92%D0%90%D0%9D%20%D0%A6%D0%90%D0%93%D0%90%D0%90%D0%9D%20%D0%91%D0%A3%D0%AF%D0%9D%20%D0%90%D0%9B%D0%AC%20%D0%91%D0%A3%D0%99%20%D0%A5%D0%AD%D0%9C%D0%AD%D0%AD%D0%92%D0%AD%D0%AD%D0%A1&t_t=%D0%90%D0%A0%D0%92%D0%90%D0%9D%20%D0%A6%D0%90%D0%93%D0%90%D0%90%D0%9D%20%D0%91%D0%A3%D0%AF%D0%9D%20%D0%90%D0%9B%D0%AC%20%D0%91%D0%A3%D0%99%20%D0%A5%D0%AD%D0%9C%D0%AD%D0%AD%D0%92%D0%AD%D0%AD%D0%A1&s_o=default#version=d9bf63667ed03c99c8fc502b196e66ef" style={{ width: "1px !important", minWidth: "100% !important", border: "none !important", overflow: "hidden !important", height: "75px !important" }} horizontalscrolling="no" verticalscrolling="no" /> </div> </div> </div>',
    content:
      "Арван цагаан буян аль буй хэмээвээс, нэгдүгээрт, хорхой шавьжнаас эхлээд алив амьтныг үл хөнөөж, харин аврах өршөөх арга замыг эрэлтэй, хоёрдугаарт, юмаа өгөлгүй харамласан хүнийг харааж зүхэлгүй, түүнд үл гомдож, ...",
    post: "Нийтэлсэн: 2012-04-03, 12:29",
    category: "МОНГОЛ ЁС ЗАНШИЛ",
  },
];
