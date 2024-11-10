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
}

export default function Page() {
  const currentPosts = postList;
  return (
    <div id="wrapper">
      <div id="content">
        <div id="content" style={{ display: "block" }}>
          <h1>ЯПОН ОРОН, ЯПОНЫ СОЁЛ</h1>
          <div className="post_list">
            {currentPosts.map((post) => (
              <div key={post.id} className="post_intro">
                <Link href={`/ypon/${post.id}`}>
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
    </div>
  );
}
const postList: Post[] = [
  {
    id: 1,
    imageUrl: "/images/thumb_sample.jpg",
    title: "TOKYO TO USE ODA TO PROMOTE JAPAN'S SATELLITE INDUSTRY",
    content:
      "  TOKYO (Kyodo) -- The government has decided to provide funding for developing countries' space satellite projects under its official development assistance, government sources said Friday. The first such aid funds ...",
    post: "Нийтэлсэн: 2012-04-02, 14:36",
    category: "Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 2,
    imageUrl: "/images/sidebar/not-found.png",
    title: "Ж.БАТ-ИРЭЭДҮЙ: ФҮЖИ ХАЙРХАНЫ НААДАМ",
    content:
      "Фүжи хайрханы наадам сайхан боллоо. Японд оршин суугаа монголчууд их хайрханы өлмийд Монгол наадмаа дэлгэр сайхан хийлээ. Тэмүжин Монгол хотхон, Япон дахь Монголчуудын холбооноос зохион байгуулсан эл наадамд есөн хөлт цагаан ...",
    post: "Нийтэлсэн: 2012-02-14, 17:33",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 3,
    imageUrl: "/images/sidebar/4215025560847564724_301_x_200.png",
    title: "ЯПОНЫ ГАЗАР ХӨДЛӨЛТ БА ЦҮНАМИ",
    content: "Тавиур дээрээс ширээн дээр унасан байдал...",
    post: "Нийтэлсэн: 2011-03-11, 12:40",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 4,
    imageUrl: "/images/sidebar/764456706711522699_301_x_200.png",
    title: "ДАРУМА",
    post: "Нийтэлсэн: 2009-12-25, 20:50",
    content:
      "Дарума гэдэг бол жижигхэн, бөөрөнхий цаасаар наасан хүүхэлдэй бөгөөд түүнийг Зэн буддизмыг үндэслэгч Энэтхэг ламыг төлөөлсөн гэж үздэг. Домгоос үзвэл тэрбээр алхаж чаддаггүй учир нь тэр мөргөл бясалгал хийж есөн ...",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 5,
    imageUrl: "/images/sidebar/not-found.png",
    title: "ВАЛЕНТИНЫ ӨДӨР/ЦАГААН ӨДӨР",
    content:
      "Японд Валентины өдрийг жаахан өөр тэмдэглэдэг. Хоёрдугаар сарын 14-нд эмэгтэйчүүд эрчүүдэд шоколад өгдөг, харин эрчүүд эмэгтэйчүүддээ юм өгдөггүй. Охидууд найз хөвгүүд болон дуртай хөвгүүддээ, эхнэрүүд нь нөхөртөө өгдөг. Эмэгтэй ажилтан ...",
    post: "Нийтэлсэн: 2009-12-23, 21:05",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 6,
    imageUrl: "/images/sidebar/not-found.png",
    title: "ХУРИМ",
    content:
      "Хосууд гэрлэхээр шийдвэл залуу бүсгүйн гэрт зочилж эцэг, эхээс нь зөвшөөрөл эрнэ. Гэрлэх зөвшөөрөл авсаны дараа залуу мөн дахин сүйт бүсгүйн гэрт эцэг, эхийн хамт очино. Тэгээд тэд бүгд хамтдаа ...",
    post: "Нийтэлсэн: 2009-12-22, 21:10",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 7,
    imageUrl: "/images/sidebar/not-found.png",
    title: "ЦАЙ",
    content:
      "Цай Японд 1200 орчим жилийн өмнө Хятадаас ирж маш хурдан хугацаанд хамгийн их уудаг ундаа болжээ. Японд хамгийн их уудаг цай бол цайны навчнаас гаргаж авсан ногоон цай болой. Мөн ...",
    post: "Нийтэлсэн: 2009-12-21, 21:15",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 8,
    imageUrl: "/images/sidebar/not-found.png",
    title: "БЭЛЭГ",
    content:
      "Япончууд олон үйл явдлыг таширлан барууныхан шиг бэлэг өгдөг хүмүүс. Тухайлбал төрсөн өдөр, төгсөлт, хурим болон хэн нэгэн хүүхэдтэй болох тохиолдол, шинэ байр сууцанд нүүж орох, эсвэл өвдөж зовсон үед ...",
    post: "Нийтэлсэн: 2009-12-20, 21:55",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 9,
    imageUrl: "/images/sidebar/not-found.png",
    title: "БҮШИДО БОЛ ЁС ЗҮЙН ХЭМ ХЭМЖЭЭ",
    content:
      "Бүшидо бол үндэстэний билэг тэмдэг болсон сакура цэцгийн адил Японы нэг чухал хэсэг билээ. Энэ бол тийм их хуучирч муудчихсан, гундаж хатчихсан зүйл, түүхийн зүгээр нэг буян өглөг биш юм. ...",
    post: "Нийтэлсэн: 2009-07-29, 12:15",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
];
