"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Post {
  id: number;
  img?: string;
  title: string;
  content: string;
  content2: string;
  content3: string;

  category: string;
}

export default function Page() {
  const { id } = useParams();
  const postId = Number(id);
  const post = postList.find((p) => p.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div id="content" style={{ display: "block" }}>
      <h1>
        <span className="cufon cufon-canvas" style={{ width: 51, height: 16 }}>
          <canvas
            width={76}
            height={18}
            style={{ width: 76, height: 18, top: "-2px" }}
          />
          <span>{post.title}</span>
        </span>
      </h1>
      <div className="post_content_full">
        <div style={{ textAlign: "justify" }}>
          <strong>
            <Image
              src={post.img || ""}
              alt={post.title}
              width={200}
              height={200}
              style={{
                float: "left",
                display: "inline",
                width: 150,
                marginRight: 10,
              }}
            />
            {post.content}
          </strong>
        </div>
        <div style={{ textAlign: "justify" }}>
          <strong>
            <div style={{ textAlign: "justify" }}>{post.content2}</div>
          </strong>
        </div>

        <div style={{ textAlign: "justify" }}>{post.content3}</div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/sidebar/yopon-oron-yoponii-soyl">ЯПОН ОРОН, ЯПОНЫ СОЁЛ</a>
      </div>
      <div className="post_info_full right">2009.12.22</div>
      <div className="clear" />
    </div>
  );
}

const postList: Post[] = [
  {
    id: 1,
    title: "TOKYO TO USE ODA TO PROMOTE JAPANS SATELLITE INDUSTRY",
    img: "/images/ypon/jpan.jpg",
    category: "Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
    content:
      "TOKYO (Kyodo) -- The government has decided to provide funding for developing countries' space satellite projects under its official development assistance, government sources said Friday.",
    content2:
      "The first such aid funds are expected to be offered to Vietnam to help Japanese companies secure business related to a planned satellite launch by the Southeast Asian country. 		The government had previously opposed disbursing ODA funds for satellite projects on the grounds that the ODA program should primarily serve the goal of eradicating poverty. But Tokyo has changed its mind after seeing European countries successfully use ODA funding to benefit their aerospace industries. Japan now plans to extend low-interest, yen-denominated loans to emerging economies to support Japanese firms in the race to secure satellite-related deals abroad, they said. Since Seiji Maehara became foreign minister last year, the ministry has shifted its position on funding foreign satellite projects with aid funds as Maehara believes the government should help to promote Japanese infrastructure exports. Vietnam earlier asked Japan for loans to carry out its 30 billion yen project to build a space center and launch a weather satellite.",
    content3:
      "Among Japanese companies, NEC Corp. and Mitsubishi Electric Corp. manufacture satellites. French and Belgian firms have already been awarded contracts in connection with the Vietnamese space program, apparently aided by their respective countries' ODA. Japanese companies are afraid of falling behind Western competitors and only one Japanese satellite, with key components made by Japanese firms, has been delivered to a foreign buyer. Japan is aiming to export five to 10 satellites in five years' time. The government earmarked funding for the development of advanced small satellites in its draft budget for the year from April. It will also send a delegation of government and corporate officials to Mongolia and Cambodia in February in the hope of winning satellite-related business. (Mainichi Japan) January 1, 2011 THE MAINICHI DAILY NEWS",
  },
  {
    id: 2,
    title: "Ж.БАТ-ИРЭЭДҮЙ: ФҮЖИ ХАЙРХАНЫ НААДАМ",
    img: "/images/ypon/2.jpg",
    content:
      "Фүжи хайрханы наадам сайхан боллоо. Японд оршин суугаа монголчууд их хайрханы өлмийд Монгол наадмаа дэлгэр сайхан хийлээ. Тэмүжин Монгол хотхон, Япон дахь Монголчуудын холбооноос зохион байгуулсан эл наадамд есөн хөлт цагаан тугаа залж, Токио, Сайтама, Нагояа, Осака, Шизуока, Яаманаши зэрэг аймаг аймгаас ирсэн төрөл бүрийн ажил мэргэжил эрхлэж, сурч, судалгаа хийж буй Монголчууд хуран цуглалаа. Мөн монголыг дэмждэг, монголчуудтай хамтарч ажилладаг япончууд, монголд ажиллаж байсан ЖАЙКА-гийн төлөөлөгчид хүрэлцэн ирсэн байлаа. Монгол үндэсний хүчит 32 бөх зодоглож аймгийн арслан С.Дамба уран мэх, ухаан самбаагаа уралдуулан түрүүлж, аймгийн начин Ж.Мөнххуяг үзүүрлэлээ. Залуу бөх Д.Тамир, Б.Мөнххуяг нар үлдэж аймгийн цолтнуудтай ана мана үзэж шөвгийн дөрөвт үлдлээ. Аймгийн арслан Дамба энэ оны гуравдугаар сард Токиод болсон Монгол үндэстний хаврын баярын барилдаанд мөн түрүүлсэн билээ. Сурын харваачид цэц мэргэнээ сорин хавтай сайхан харваж эрэгтэйд Эрхэмбаяр, эмэгтэйд Мөнхжаргал нар түрүүлжээ. 1-8 настай хүүхдүүдийн “морины” уралдаан хөгжилтэй хөөрхөн боллоо. Шатрын тэмцээнд Дижимо компаний ажилтан Д.Ганзориг, Амарзаяа нар түрүүллээ. Наадмын үеэр архи дарс, шар цагаан айраг, идээ будаа, хуушуур бууз, хавиргатай шөл гээд идэж, уухынх нь элбэг дэлбэг гэж жигтэйхэн байлаа. Мөн наадмын үеэр Фүжи хайрхан ууланд гарах аялал зохион байгуулж Япон дахь Монгол Улсын Элчин Сайдын Яамны ажилтан Т.Сэлэнгэ тэргүүтэй хэсэг залуучууд залуу хүмүүсийн ид хав, хүч тэнхээг үзүүлэн шөнийн 10 цагаас эхлэн авирч өглөөний улаан нарыг Фүжи хайрханы оройд угтлаа. Ер нь Фүжи Хайрханд гарах нь Японд суугаа монголчуудын бас нэгэн бахархал аж. ",
    content2:
      "Фүжи хайрхан бол Хоншу аймгийн нутагт Кавагүчи, Яаманака, Сай, Мотосу, Шожи хэмээх таван нуурын дунд, Моунт Тате, Моунт Хаку хэмээх гурван сүжигт хайрханы нэг болж оршдог 3,776 метр өндөр, зэрэглэлээрээ 37 дугаарт ордог, хамгийн сүүлд 1707 онд амитай байсан уул юм. Энэ уул тэнгэр цэлмэг сайхан үед Токио, Ёокохама, Чиба, Сайтамагаас ил харагдана. Энэ ууланд долоон сарын нэгнээс найман сарын 27 хүртэл авирахыг зөвшөөрдөг бөгөөд шөнө дундаас эхлэн авирч өглөөний алтан нарыг өндөр хайрханы оройд үзэхийг санал болгодог аж. Бусад үед авирах боломжгүй аюултай цаг улирал гэж үздэг юм байна. Тийм учраас манай Монгол наадмын үеэр авирах нь хамгийн тохиромжтой цаг хугацаа аж. Наадмаас буцсан зочид наадамчид зам зуураа Ширатонотакигийн гайхамшигт хүрхээг үзэж, Фүжи уулын үзэсгэлэнт таван нуурын нэг томоохон нь болох Кавагүчико нуурын эрэг дээр амран тухаллаа. Монгол залуу Жавхлан Ширатонотакигийн хүрхрээний 3 метр гүн цүнхээлд сэлж монгол эрийн зориг золбоо, хүч тамирыг гайхуулан олны нүд баясгав. ",
    content3:
      "Наадмыг зохион байгуулсан “Тэмүжин Монгол хотхон” нь гурван жилийн өмнө байгуулагдсан юм байна. Арав орчим монгол гэрт Японы болон гадаадын жуулчдыг хүлээн авдаг аж. Энэ хотхон Фүжи хайрханы хормой үзэсгэлэнт сайхан бэлд байрлах бөгөөд Ц.Гантулга хэмээх Дүрслэх урлагийн сургууль төгссөн зураач залуу гэргийн хамт хариуцан ажиллуулж байна. Тэрбээр мэргэжлээс гадна морин хуур, хоёр гурван төрлийн хөөмийг өөрийн сонирхолоор чадварлаг сайхан сурсан авияасаа наадамчин олонд сонирхуулсан нь гэнэтийн сонин бэлэг боллоо. Тэрбээр бидний зорилго бол мөнгө зоос олохдоо бишээ, цаашид энэ наадмаа улам сайхан болгохын төлөө ажиллана, гол нь манайхан хүний нутагт байгаа ч гэсэн Монголдоо байгаа юм шиг наадах нөхцлийг бүрдүүлэхийн төлөө ажиллана гэж итгэлтэй хэлж байлаа. Ийнхүү Япон дахь Монголчуудын наадам өргөн сайхан болж өнгөрлөө. Дараа жилийн наадам юухан байх вэ дээ. Наадмын дараа эрүүл байвал улсын наадам үзнэ хэмээх алдарт яруу найрагч Дашдоржийн Нацагдоржийн үг гүн утга агуулгатай болсон шиг санагдана.",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 3,
    title: "ЯПОНЫ ГАЗАР ХӨДЛӨЛТ БА ЦУНАМИ",
    img: "/images/ypon/3.jpg",
    content:
      "Тавиур дээрээс ширээн дээр унасан байдал виур дээр байсан номыг шалан дээр тараасан байдал За өнөөдөр ингээд сүүлийн 100 жилд тохиож байгаа аймшигт газар хөдлөлтийн гэрч болдог юм байжээ. Гадаад хэргийн яаманд хичээлээ заачихаад Чуо чиглэлийн хурдан шугмаар буцаж явахнээ газар хөдлөөд ёстой аймаар юм боллоо. Газар хөдлөлт байшинд ялангуяа сууж юмуу хэвтэж байхад бол сайн мэдрэгддэг харин галт тэргэнд барагтай бол мэддэгдэггүй гэдэг. Галт тэрэг бол ерөөсөө усан дээр байгаа завь аятай л байлаа. Эхлээд энэ галт тэрэг нь эвдэрээд зогсож байгаа юм байхдаа гэж гайхахнаа хүмүүс шуугиад цонхоор хараад, зарлаад уналаа. Кичижожигоос хөдлөөд  Митака буудалд хүрэх замын дунд шууд зогсчихсон чинь гарч бууж болдоггүй, хоёр цаг шахам суугаад гараад ирсэн чинь бүх галт тэрэгний шугам хааж, такси, автобус, утас мутас бөөн очер дараалал болсон байлаа. Арай гэж автобус дамжсаар ажил дээрээ ирэхнээ хамаг номыг минь сэгсрээд тараагаад хаячихсан байдаг байгаа. Ядаж байхад бүх урсдаг шат, лифт автоматаар зогссон тул 8 давхарт арай гэж аахилаж уухилж гарлаа. Манай хөрш профессорыг 8 давхрын өрөөндөө байхад хөдөлж, их номтой хэлэх үү арайтай номондоо дарагдчихсангүй нэг юм амь мэнд үлджээ.",
    content2:
      "Миаги аймагт голомтондоо магнитудийн 8.9 буюу 12.2 баллын хүчтэй хөдөлсөн байна. 10 метр өндөр цунами үүснэ гэж таамаглаж байсан ч хамгийн өндөртөө 28-36 метр хүрсэн байна. Хүн, байшин, барилга, машин тэрэг, усан онгоц монгоц бол их усны хүчинд зүгээр л нэг зомгол төдий аж.1923 оны Их Кантогийн газар хөдлөлтөөс хойш зуун жилд хөдлөж байгаа хамгийн хүчтэй хөдлөлт гэнэ. Энэ үеийн хөдлөлтөөр дор хаяж 140 мянган хүн нас барсан аж. Тэр үед ч мэдээж байшин барилга, цахилгааны хамгаалалт энэ тэр нь манайх шиг л юм байгаа биз дээ, гал түймэрт ихэнхи хүн нь үхсэн гэх юм билээ. Өнөөдрийн энэ аюулыг дэлхий нийтээрээ зурагтаар харж байгаа тул илүү тайлбар хэрэггүй биз дээ. Бараг бүтэн өдөржин, шөнөжин ойр ойр хөдөлсөөр л байна. Бүх төрлийн галт тэрэг, болон гар гэрийн утас хаагдсан байна. Холбоо барих боломжгүй болж байна. Харин мессеж дамжиж байна. Хувийн болон хувьсгалын бүх галт тэрэгний шугам зогссон тул Токиогийн гудамжнуудад такси, автобусны оочер хэдэн зуун метр хүрлээ.Газар хөдлөлт болон цунамид нас барсан хүний тоо нийтдээ 1000 гарчихлаа, мэдээж улам нэмэгдэх байх. 2000-аад айл гэр орох оронгүй, оочих аягагүй боллоо, мөн 1800 орчим айл их бага хэмжээгээр цунамид хамрагдсан байна. (Энэ далимд хэлэхэл цүнамиг Ш.Баатар нөхөр цохих долгион гэж орчуулсан харагдана. Бас болох л юм.) 1800 орчим хүн ор сураггүй байна, 300 гаруй хүний цогцос Сэндай хавийн уснаас цуглуулж авсан байна. Хэдэн зуун хүн их бага хэмжээгээр Японы нийт нутаг дэвсгэрт гэмтэж бэртжээ. Өглөөний 3.59-д Нагано, Нийгата болон Токиогийн хойд хэсгээр 6.5 баллын хүчтэй түлхэлт өгсөн байна. Шөнө унтаж байхад хөдлөөд л байсан. Камайшигийн боомтоос хорь гаруй контайнер, машин хөвсөн байна. Цунами буюу цохих долгионоос хамгаалах хаалга гэж байдаг юм байна тэрийгээ бүгдийг хаагаад хаагаад барсангүй гэж мэдэгдэж байна. 10 метр долгион чинь барагтай юм тэсгээхгүй л дээ. Цунамигийн нөлөө дэлхийн бараг 30 оронд мэдрэгдэж нөлөөлж магадгүй байгаа тул болгоомжтой байхыг сануулж байна. Дэлхийн 23 орон Австрали, Хятад, Өмнөд Солонгос, Мексик, Шинэ Зеланд, Сингапур, Индонези, Энэтхэг, Орос, Түрк, Герман, Франц, Бэльги, Арабын нэгдсэн улс, Швейцар, Жордан тусламж дэмжлэг үзүүлэхээ мэдэгдсэнийг гадаад яамны сайд нь мэдээллээ. Япон дах гадаад улс орнуудын элчин сайдын яамдад ямар нэгэн айхтар хүндрэл гараагүй байна.",
    content3:
      "Жэй Аар буюу Японы галт тэрэгний гол компани бүх хөдөлгөөн үйлчилгээгээ зогсоолоо, үүнд Тохокү, Нагано, Яамагата, Жоецү, болон Акитагийн чиглэлийн хурдан галт тэрэг мөн орж байгаа. Мөн хувийн Кеио болон Одакюу шугам бас бүрэн зогссон бол өнөө өглөөнөөс хувийн шугмууд ажиллаж эхэллээ.Агаарын тээвэрт бас нэлээд хүнд нөлөөлсөн байна, өчигдөрийн байдлаар дотоодын 711 нислэг цуцлагдаж, Наритагийн онгоцны буудалд 13000 хүн, Ханедагийн буудалд 10 мянга гаруй хүн сандарч хоносон байна. Энэ өдөр Наритагаас монголын МИАТ-ын нислэг таарч 40 гаруй хүнтэй нисэх байсан Боинг хоосон хөөрч хөөрхөн шатсан гэсэн мэдээ монголын сайтуудаар тавигджээ.Японы засгийн газар үндэсний хэмжээний томоохон компаниудыг улс оронд тулгарсан хүнд үед ард түмэндээ туслахыг уриалсан байна. Мөн Японы Эдийн Засгийн Яам Японы дэлгүүрийн холбоо, Сүлжээ дэлгүүрүүдийн холбоо, бусад нийгэмлэгүүдийг туслахыг хүссэн шаардлага хүргүүлжээ.За харин нэг юм онцлоход япон хүмүүс бол ийм хэцүү үед юманд маш тайван ханддаг улс юм байна гэдэг нь харагдлаа. Тэгж айхтар хөдлөж байхад үймж шуугихгүй, журам ёс дэс дараагаа нягт барьж ажиллах юм. Энэ олон сая хүн орилоод хашгираад дайраад унавал цунамигаасаа аюултай юм болох янзтай. Ийм айхтар байгалийн аюулын аман дээр байдаг улст тайван уужуу байх л хамгийн чухал зүйл байдаг юм байна даа гэж бодогдож байлаа. Үүнийг бүр хар багаас хүүхэд байхаас сурч төлөвшисөн байдаг бололтой.",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 4,
    title: "ДАРУМА",
    img: "/images/ypon/4.jpg",
    content:
      "Дарума гэдэг бол жижигхэн, бөөрөнхий цаасаар наасан хүүхэлдэй бөгөөд түүнийг Зэн буддизмыг үндэслэгч Энэтхэг ламыг төлөөлсөн гэж үздэг. Домгоос үзвэл тэрбээр алхаж чаддаггүй учир нь тэр мөргөл бясалгал хийж есөн жил суусан юм ажээ. Хоёр зуун жилийн настай дарума бизнес болон амь амьдралын амжилт, сайн сайхныг бэлгэдэж байдаг. Одоо цагт түүнийг заримдаа шалгалтыг амжилттай өгөх зэрэгт хэрэглэдэг. Дарумагийн нүүрнээс бусдыг улаан өнгөөр буддаг бөгөөд голдуу нүдийг нь будалгүй орхисон байдаг. Хүмүүс ямар нэгэн зүйл хүсвэл нэг нүдийг будна. Хэрэв хүсэл мөрөөдөл биелэж гүйцэлдвэл нөгөө нүдийг будна. Дарумагийн ёроолыг хүндрүүлсэн байдаг бөгөөд хэзээ ч цохигдож унадаггүй онцлогтой. Хэчнээн олон удаа цохисон ч босоо хэвээрээ л байна. Энэ бол түүний бууж өгөхгүйн утгат бэлгэ тэмдэг болдог.",
    content2: "DARUMA",
    content3:
      "A daruma is a small, round papier-mache doll that is said to represent the Indian monk who founded the Zen sect, Legend says that he became unable to walk because he sat in continuous meditation for nine years. For about two hundred years the daruma has been considered a good luck charm for success in either kife or in business. Nowadays, they are sometimes used to wish for other things such as successfully passing examinations. Daruma are painted red, except for the face, and don’t usually have the eyes painted in. When whishing for something, people paint in one eye. If the wish comes true, they paint in the other. The bottoms of daruma are weighted and bounce back by themselves when knocked over. Even if they ar knocked down many times, they always bounce back, so they are a symbol of never giving up.",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 5,
    title: "ВАЛЕНТИНЫ ӨДӨР/ЦАГААН ӨДӨР",
    img: "/images/ypon/5.jpg",
    content:
      "Японд Валентины өдрийг жаахан өөр тэмдэглэдэг. Хоёрдугаар сарын 14-нд эмэгтэйчүүд эрчүүдэд шоколад өгдөг, харин эрчүүд эмэгтэйчүүддээ юм өгдөггүй. Охидууд найз хөвгүүд болон дуртай хөвгүүддээ, эхнэрүүд нь нөхөртөө өгдөг. Эмэгтэй ажилтан нар эрэгтэй ажилтан нартаа өгдөг. Энэ шоколадыг гири чоко гэх бөгөөд үнэндээ хайраа илэрхийлэх арга биш юм. Валентины өдрөөр дэлгүүрүүд маш олон төрлийн шоколад танилцуулж эмэгтэйчүүд түүнээс сонгодог. Тэгээд гуравдугаар сарын 14-нд цагаан өдөр ширээ эсрэгээр эргэдэг. Энэ өдөр хөвгүүд, эрэгтэйчүүд шоколад болон жигнэмэг, чихэр буцааж өгдөг. Энэ өдөр Японд их хэмжээний худалдаа хийдэг.",
    content2:
      "VALENTINE’S DAY/WHITE DAY Valentine’s Day is celebrated a little differently in Japan. On February 14th, woman give chocolate to men, but men give nothing in return. Girls give chocolate to their boyfriends or to boys they like, and wives give it to their husbands. Female workers also give it to their male coworkers, but this is called giri choco (duty chocolate) and isn’t really a sign of affection. As Valentine’s Day approaches, stores reserve large amounts of space to display chocolates and they fill with woman making purchases. ",
    content3:
      "Then, on March 14th, comes White Day and the tables are turned. On this day, boys and men got chocolate gove cookies or sweets in return. This day is unique to Japan and provides another large sales boost to stores.",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 6,
    title: "ХУРИМ",
    img: "/images/ypon/7.jpg",
    content:
      "Хосууд гэрлэхээр шийдвэл залуу бүсгүйн гэрт зочилж эцэг, эхээс нь зөвшөөрөл эрнэ. Гэрлэх зөвшөөрөл авсаны дараа залуу мөн дахин сүйт бүсгүйн гэрт эцэг, эхийн хамт очино. Тэгээд тэд бүгд хамтдаа а накодо буюу зуучийг сонгож, хуримлах өдрийг хэлэлцэн тогтоно. Накодо бол ер нь тухайн залууг сайн мэддэг настай хүн байна. Залуучууд голдуу өөрийнхөө дарга, захирлыг зууч буюу накодо болох хүсэлт тавьдаг. Накодогийн эхнэр нь мөн накодогийн нэмэлт хүч болдог. Хуримын товыг тогтохдоо уламжлалт ёсоор аль болох азгүй өдөр сонгохоос зайлсхийдэг. Хуримаас ойролцоогоор зургаан сарын өмнө юуино хэмээх ёслолыг хийнэ. Энэ үеэр хуримын зууч охины гэр бүлийн гэрчид мөнгө болон бараа таваарыг хуримд бэлтгэх зориулалтаар гардуулна.",
    content2: "WEDDING",
    content3:
      "Once a couple decides to get married, the man visits the woman’s house to get permission from her parents. After receiving permission, the man visits the woman’s parents again, this time with his parents as well. Together they choose a nakodo (a go-between) and decide on a wedding date. The nakodo is usually an older married person who the man knows. The man generally asks his boss to be the nakodo. The nakodo’s wife serves as an additional nakodo. The actual wedding date is often chosen to avoid traditionally unlucky days. About six months before the wedding a ceremony called yuino is held. At this time, the nakodo hands money or goods from the groom to the woman’s family to help prepare for the wedding.",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 7,
    title: "ЦАЙ",
    img: "/images/ypon/7.jpg",
    content:
      "Цай Японд 1200 орчим жилийн өмнө Хятадаас ирж маш хурдан хугацаанд хамгийн их уудаг ундаа болжээ. Японд хамгийн их уудаг цай бол цайны навчнаас гаргаж авсан ногоон цай болой. Мөн цайны навчнаас бүтэн боловсруулж авсан барууны цайнууд (хар цай зэрэг) болон хагас боловсруулсан оолон цай (Хятадад их уудаг) –г хэрэглэдэг. Ногоон цайг ямар нэгэн чихэр болон сүүгүй хэрэглэх бөгөөд эрүүл мэндэд чухал тустай. Япон хүмүүс ногоон цайндаа маш дуртай бөгөөд чанар, үнийн хувьд маш олон төрлийн болой.",
    content2: "TEA",
    content3:
      "Tea came to Japan from China about 1,200 years ago and quickly became the most popular drink around. The most common tea in Japan is green tea, which is made from unfermented tea leaves. Western teas (i.e.black teas) by contrast, are made from fermented tea leaves, and oolong tea (popular in China) is made from half-fermented tea leaves. Green tea is always taken straight with no sugar or cream added and has been shown to have great health benefits. Japanese people take their green tea seriously and there are many brands of differing quality and price.",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 8,
    title: "БЭЛЭГ",
    img: "/images/ypon/8.jpg",
    content:
      "Япончууд олон үйл явдлыг таширлан барууныхан шиг бэлэг өгдөг хүмүүс. Тухайлбал төрсөн өдөр, төгсөлт, хурим болон хэн нэгэн хүүхэдтэй болох тохиолдол, шинэ байр сууцанд нүүж орох, эсвэл өвдөж зовсон үед бэлэг өгдөг. Түүнчлэн сургууль, ажилд орох, мөн тодорхой насанд хүрэхэд мөн бэлэг өгнө. Чүгэн болон сейбо хэмээх хоёр төрлийн улирлын чанартай бэлэг байдаг. Чүгэн нь зуны бэлэг, долоо, наймдугаар сард өгдөг. Сейбо нь өвлийн бэлэг буюу арван хоёр сард өгдөг. Хоёулаа өөрийн сайн харьцаатай байдаг дарга, харилцагч, багш нарт өгдөг. Бэлгийн үнэ цэнэ голдуу 3000-5000 йений хооронд байдаг. Нийтлэг бэлэгт шар айраг, угаалгын нунтаг, саван, хүнсний зүйл болон бэлгийн карт багтана. Энэ сарын үеэр арилжааны телевизүүд чүгэн, сейбог санал болгож их дэлгүүрүүд энэ үеэр зарж борлуулдаг. Мөнгөөр бэлэг өгөхдөө тусгай дугтуйд хийж, гоё туузаар орооно. Тууз нь голдуу улаан болоод цагаан судалтай байдаг. Тусгай арга хэмжээ тухайлбал хурим зэрэг маш сайн чанарын дугтуй хэрэглэнэ. Өгөх мөнгөний дүн тухайн үйл явдал болон хүмүүсийн хоорондын харилцаанаас шалтгаална.",
    content2: "Presents",
    content3:
      "Japanese people give gifts on many of the same occasions as in the West. For example, for birthdays, graduаons and weddings as well as when someone has a baby, moves into a new house or gets sick. However, they also give gifts for entering school, getting a job, and reaching certain ages. In addition, there are two seasonal gift-giving events, chugen and seibo. Chugen is a summer gift, usually given in July or August. Seibo is a winter gift gven in December. Both are usually given to one’s boss, clients or teachers as a way to maintain good relations. The value of the gift is usually between Y3,000 and Y5,000. Popular gifts are beer, detergent, soap, food or gift certificates. Many commercials advertising chugen and seibo are braodcast on TV in the weeks leading up to these seasons and department stores have sales at this time. For tgifts of money, as special envelope with a fancy ribbon is used. The ribbon usually has red and white strings. For special occasions, such as weddings, high quality envelopes are used. The amount of money given depends on the occasion, and the relationship between giver and recipent.",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
  {
    id: 9,
    title: "БҮШИДО БОЛ ЁС ЗҮЙН ХЭМ ХЭМЖЭЭ",
    img: "/images/ypon/9.jpg",
    content:
      "Бүшидо бол үндэстэний билэг тэмдэг болсон сакура цэцгийн адил Японы нэг чухал хэсэг билээ. Энэ бол тийм их хуучирч муудчихсан, гундаж хатчихсан зүйл, түүхийн зүгээр нэг буян өглөг биш юм. Гоо сайхан, хүч чадлаараа өдий хүртэл амидарсаар байгаа үнэт зүйл билээ. Энэ бол гарт баригдаж, нүдэнд харагдах хэлбэр дүрсгүй боловч ариун тансаг үнэр нь бидэнд мэдрэгдсээр байгаа зүйл. Түүнийг төрүүлж, төлөвшүүлсэн нийгэм нь аль хэдийн үгүй болжээ. Феодалын нийгмийн үр төл болсон бүшидо ёс зүйн дэг сургаалаараа одоо ч биднийг гэрэлтүүлэн гийгүүлсээр байна. Харамсалтай нь эрдэмтэн судлаачид хүртэл мэдэхгүйгээсээ болж ёс зүйн тогтолцоо хэзээ ч хаана ч байгаагүй хэмээн дутуу дулимаг дүгнэлт хийж байсан. Карл Маркс “Капитал” –даа “Одоо ч амид оршин буй Японы феодализмын улс төр, нийгмийн тогтолцоог судлан үзэхийг” уншигчдад сануулж байсан билээ. Би ч гэсэн миний уншигчид Японы ёс зүйн хэм хэмжээнээс суралцана гэдэгт найдаж байна. Би Европ болоод Японы феодализмыг харицуулах зорилго тавиагүй. Миний зорилго бол Бушидогийн уг гарал, эх үүсвэр, онцлог, номлолыг бичих хэрэг байлаа. Мөн түүний нийгэм олонд үзүүлэх нөлөө, цаашид хэрхэн нөлөөлж оршин тогтох чадварын талаар бичих хэрэгтэй байгаа юм. Бүшидо хэмээх уг япон үг нь ойролцоо утгаар нь хэрэглэж байгаа англи хэлний chivalry буюу ёс зүйн тогтолцоо гэдэг энэ үг, мөн horsemanship буюу морь унасан хүн гэдгээс ч өргөн дэлгэр утга агуулгатай юм. Бу-ши-до гэдэг бол Цэргийн зам мөр гэсэн утгатай үг. Энэ бол тэдний ажил төрөл, өдөр тутмын үг яриа, үйл хөдлөлдөө дагаж мөрдөх учиртай ёс журам аж. Тэдний ёс суртахууны хууль журам юм. Үүнээс үүдэн би бүшидо хэмээх япон үгийг нь хэрэглэмээр байна. Яагаад гэвэл юутай ч харицуулашгүй өөр бөгөөд өөрийн гэсэн зан төрх, сэтгэлгээтэй учраас тэр. Үндэсний өвөрмөц чанарыг өөртөө агуулж байдаг. ",
    content2:
      "Энэ бол гагц Япон хэлэнд биш бусад хэлэнд ч байдаг зүйл. Бушидо бол самуурай нарын дагаж мөрдөх ёстой ёсзүйн цогц дүрэм журам юм. Энэ нь эр хүний зүрхээр бичигдсэн хэлэлцэгдэж батлагдаагүй хууль юм. Бүшидо бол ганц хүний ухаан сэтгэлгээгээр биш ард түмний төр улсаа зэр зэвсгийн хүчээр төвхнүүлж эхлэснээс хойшхи хэдэн зуун жилийн үр дүнд бий болсон зүйл юм. Арван долдугаар зууны үеэр цэргийн хууль буюу бүкэ хатто гэж байлаа. Тэдэнд хэрхэн гэрлэх, цэргийн хуаранд хэрхэн амидрах зэрэгхэн байснаас биш ёс суртахууны талаар тэгнэ ингэнэ гэсэн юм бараг байсангүй. Ийм учир бүшидог тэнд, төдийгөөс эхлэжээ гэж тодорхой цаг хугацаа хэлэх боломжгүй юм. Харин ямар ч байсан феодалын нийгмийн үед бий болсон нь тодорхой бөгөөд бүр нарийн цаг хугацаа хэлэх боломжгүй юм. Англид феодалын улс төрийн тогтолцоо Норманы эзлэн түрэмгийлэлийн үеэс (1066) тогтсон гэж үздэг. Японд 12 дугаар зуунд Ёритомогийн үеэс бий болсон гэж үздэг. Харин Английн феодал тогтолцооны нийгмийн хэлбэрүүд нь Вилияамын Хаант улсаас өмнөх үед хамаарна. Японд бол феодал тогтолцоо Ёоритомогийн үеэс бүр өмнө үр нь соёолж байжээ. Японд европийн адил феодалын тогтолцоо бүрэлдэн бий болоход бүши давхарга аяндаа нийгмийн хүч болон тодрон гарч ирсэн байна. Энэ нь харуул, хамгаалагч гэсэн утгатай самуурай хэмээх үг юм. Сино-Япон хэлний бүкэ буюу бүши-г Японд их хэрэглэх болжээ. Үгийн утга нь тусгай анги давхаргын хөлөг баатруудын тулаан гэсэн шиг утгатай аж. Уг удмаасаа байлдах дайтахыг өдөр тутмын үйл хэргээ болгосон бүдүүн бараг улс байж. Сүүлдээ тэд байгалийн шалгарлаар шигшигдэн үлдсэн улс юм. Урт удаан хугацааны дайн тулаан үргэлжлэх явцад хүч зоригоороо шалгаран үлджээ. Эмэрсоны үгээр хэлбэл тэд бол “жинхэнэ эрмэг адгуус адил бүдүүлэг, хүчит , хүний үнэргүй эрчүүд” байсан байна. Тэдэнд олон сайн тал, эрхэм хүндэтгэл, өндөр хариуцлага байсан. Удалгүй тэд хариуцлагаа ухамсарлаж, тухайлбал өөр өөрсдийн овог аймгийн өмнөөс тулалдах тул өөрсдийн нийтлэг шалгууртай болох ёстойг анзаарсан байна. Тэдэнд ёстой эр хүн шиг үзэх тулаан, хүүхдийнх шиг цэвэр ариун зан суртал алин болохыг шүүх хэмжүүр хэрэгтэй болжээ. Энэ бол цэрэг дайчин, энгийн ард иргэний ёс зүйн үндэс биш биз? Англи банди хоёр янзын бодолтой. Нэгдүгээрт жижиг хүүхдийг дээрэлхэхгүй, хоёрдугаарт том хүүхдэд бууж өгөхгүй, айж хулчийж зугтахгүй. Энэ бол Английн суут төрийг цогцлоох маш том тулгуур суурь болсон аж. Бушидо ч мөн адил үүнтэй эн тэнцүү юм. Зарим зоригтой эрчүүд мөн дайнд итгэдэг. Бусдын хувьд бүх урлагийн үндэс суурь, их ашиг, эр хүний чадал хүчийг харуулдаг гэж үздэг. Хүүхэд ахуй наснаасаа ийм үзэл бодлыг өвөрлөн өсөж өндийхийн зэрэгцээ аж амидрал нь өргөжин, хүмүүстэй түмэн зүйлийн утас учигаар холбогдож ирэхийн цагт хүүхэд ахуйнхаа итгэл үнэмшлийг залж, өөрийнхөөрөө улам гүнзгийрүүлэн хөгжүүлдэг. Өндөр дээд ёс суртахуунгүй дайн тулаан байсан бол бүшигийн мөрөөдөл болоод самуурай аль хэдийн үгүй болох байсан байх. Бас нэг нөхөр “дайн, шашин, нэр төр гурав бол Христосын гурван сүнс” гэсэн байдаг. Японд бол Бүшидогийн амин сүнс гэж хэлэх хэд хэдэн зүйл бий. ",
    content3:
      "Chivalry is as much a part of Japan as its national flower, the cherry blossom. It is not an old, dry, historical virtue. It is still a living object of power an beauty. While it has no shape, we know that we are under its influence. The social conditions in which it was born have long disappeared. The light of chivalry, which was a child of feudalism, still shines upon us with its moral teaching. It is a pleasure for me to think about it, as it is for some English people to think about their past knights in shining armor. It is sad and disappointing to note, however, that even some scholars do not know that chivalry ever existed anywhere at any time. Carl Marx, in his Capital, however, urged his readers to study the social and political institutions of feudalism, as it then existed in Japan. I also hope my readers will study the chivalry of present day Japan. I do not intend to compare European and Japanese feudalism. My attempt is rather to write about the origin and sources of our chivalry, its character and teaching. I also write about its influence on the masses and the continuing permanence of that influence. The Japanese word which I have roughly call chivalry is more than just horsemanship. Bu-shi-do literally means Military-Knight-Ways. These are the ways which fighting nobles should observe in their daily lives and follow in their work. They are the moral rules of warrior class. From now on I would like to use the Japanese word because it is a teaching which is very unique and produces a distinct type of mind and character. So it is with some words. They are very expressive of national character. This is not just the case with some Japanese words but also other languages. Bushido, then, is a set of moral rules which the samurai had to follow. It is an unspoken law written only in the heart of man. It was founded not by one man alone but was the result of the natural growth of centuries of military careers. Early in the 17th century there were military laws (buke hatto). They had to do mostly with marriages, castles and so on, almost nothing about moral instruction. We cannot, therefore, point to a define time and say, “Here is where it began.” It was born in the feudal age but feudalism itself is hard to identify with a specific time. In England the political institutions of feudalism may be said to date from the Norman Conquest (1066). In Japan we may also say that its rise was at the same time Yoritomo came to power in the 12th century. But in England we find that the social previous to William the Conqueror. The seeds of feudalism in Japan also existed long before Yoritomo. Also, in Japan as in Europe, when feudalism formally started, the professional class of warriors naturally became widely known. These were known as samurai, meaning guards or attendants. The Sino-Japanese word buke or bushi came into common use in Japan. The words mean “fighting knights,” who were a privileged class. Originally they must have been a rough breed whose work was fighting. They were survived over periods of constant war. To borrow Emerson’s phrase, they were “a rude race, all masculine, with brutish strength.” They had many advantages, great honor and heavy responsibility. Soon they left the need of a common standard of behavior, especially since they were always fighting and belonged to different clans. They were in need of some measure by which to be judged such as fair play in fight, a primitive sense of childhood morality. Is this not the root of all military and civic virtue? The British boy had two ideals: 1) never bully a smaller boy and 2) never run away from a bigger one. This is the basis on which very strong morals can be built. This is the basis on which the greatness of England was built. The same was true of Bushido. Some of the most gentle-hearted of men also believe in war. For others it is the foundation of all the arts, high virtues and powers of men; war nourishes the great nations. Childhood begins with these ideas and so does knighthood, but this faith seeks its own justification, satisfaction and development. War without high moral support would fall far short of the ideals of knighthood and the samurai. One man said that religion, war and glory were the three souls of a perfect Christian knight. In Japan there were several sources of Bushido.",
    category: " Ангилал: ЯПОН ОРОН, ЯПОНЫ СОЁЛ",
  },
];
