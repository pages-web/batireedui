import { NextResponse } from "next/server";

type Post = {
  id: number;
  imageUrl: string
  link: string
  post: string
  title: string
  content: string;
};


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const allItems: Post[] = [
    {
      id: 1,
      imageUrl: "/images/thumb_sample.jpg",
      link: "/news/unasan-bohod-ulig-mundahgui...",
      title: " УНАСАН БӨХӨД УЛИГ МУНДАХГҮЙ Ч ...",
      post: "Нийтэлсэн: 2013-02-07, 22:48",
      content:
        "   Саяхан миний бие МУИС-ийн Төлөөлөн Удирдах Зөвлөл (ТУЗ)-ийн 5багшийн төлөөлөлийн орон тоонд Монгол хэл, соёлын сургуулийн нийтбагш нарын хурлаас (цэвэр 46 багшаас 25 санал авсан шүү, ажилтанороогүй ...",
    },
    {
      id: 2,
      imageUrl: "/images/SYDNYE28112011116.png",
      link: "/news/azi-nomhon-dalain-ornuud...",
      title: "АЗИ НОМХОН ДАЛАЙН ОРНУУДЫН МОНГОЛ СУДЛАЛЫН ТӨЛӨВ",
      post: "Нийтэлсэн: 2012-12-24, 21:25",
      content:
        " Өнгөрсөн оны сүүлээр Монгол Судлалын Үндэсний зөвлөлийн төлөөлөгчид Австрали, Япон, Солонгос Улсын монгол судлалын гол төвүүдээр ажлын айлчлал хийсэн юм. Тус төлөөлөгчидийн бүрэлдэхүүнд миний бие оролцож Австрали, Япон, Өмнөд Солонгос ...",
    },
    {
      id: 3,
      imageUrl: "/images/book/111x142-87022ff284-1341830848.png",
      link: "/news/mongol-mal-tamgalah-ys",
      title: " Монгол мал тамгалах ёс ба орчин үе",
      post: "Нийтэлсэн: 2012-07-09, 18:34",
      content: "",
    },
    {
      id: 4,
      imageUrl: "/images/book/tgaIGKDQqhA.png",
      link: "/news/harvardiin-hogjimchin",
      title: "Харвардын хөгжимчин",
      post: "Нийтэлсэн: 2012-07-09, 18:29",
      content: "",
    },
    {
      id: 5,
      imageUrl: "/images/zaisan.png",
      link: "/news/zun-tsag",
      title: "ЗУН ЦАГ",
      post: "Нийтэлсэн: 2012-07-09, 18:15",
      content: "",
    },
    {
      id: 6,
      imageUrl: "/images/Damdinsuren.png",
      link: "/news/inalko-toi-geree-baiguullaa",
      title: "ИНАЛКО-той гэрээ байгууллаа",
      post: "Нийтэлсэн: 2012-07-09, 17:49",
      content:
        " МУИС-ийн захирал профессор Санжбэгзийн Төмөр-Очир 2012 оны 5 дугаар сарын 25 нд Францын дорно дахины хэл иргэншлийн үндэсний дээд сургуулийн захирал профессор, монголч эрдэмтэн Жак Легрантай хоёр их сургуулийн хамтын ...",
    },
    {
      id: 7,
      imageUrl: "/images/IMG_1644.png",
      link: "/news/bidnii-sanal-sanaachlaga",
      title: "БИДНИЙ САНАЛ САНААЧЛАГА, ИДЭВХЭЭС Л ИХ ЗҮЙЛ ШАЛТГААЛНА",
      post: "Нийтэлсэн: 2012-03-24, 18:11",
      content:
        "  ГЕРМАН (Берлин, Мюнхэн, Гөттингэн, Бонн, Аахэн, Дрэзден, Зийгэн),УНГАР (Будапешт), АВСТРИ (Вена, Гратц), ФРАНЦ (Парис, ) 2011/05/08-22) МУИС-ийн захирал профессор Санжбэгзийн Төмөр-Очир тэргүүтэй ажлын хэсэг өнгөрсөн сарын 9-21 нд Европын холбооны ...",
    },
    {
      id: 8,
      imageUrl: "/images/naadam_IMG_4259.png",
      link: "/news/harvardiin-professoriin-hamt",
      title: "ХАРВАРДЫН ПРОФЕССОРЫН ХАМТ",
      post: "Нийтэлсэн: 2012-03-24, 17:59",
      content:
        "    Professor Mark Elliot and me 2011/06/12 Gandan, Ulaanbaatar, Mongolia АНУ-ын Харвардын Их Сургуулийн Зүүн Азийн хэл, иргэншил судлалын тэнхимийн эрхлэгч, профессорМарк Эллиот 6 дугаар сарын 12-14 нд манай их сургуульд ...",
    },
    {
      id: 9,
      imageUrl: "/images/thumb_sample.jpg",
      link: "/news/naadmiin-omnoh-nargian",
      title: "НААДМЫН ӨМНӨХ “НАРГИАН“",
      post: "Нийтэлсэн: 2012-03-24, 17:02",
      content:
        "Наадмын өмнөхөн твиттерийн жиргээч улс төрийн гурван үндсэн нам (АН, МАН, ИЗНН)-ын нөлөө бүхий лийдэрүүд нэг хөөрхөн “наргисан“ үүнийг эмхлэн толилуулж байна. Твиттер маань ердөө 140-хөн тэмдэгтэд тааруулж бичдэг учир цаана ...",
    },
    {
      id: 10,
      imageUrl: "/images/zunii-tuhai.png",
      link: "/news/zunii-tuhai-shulguud",
      title: "ЗУНЫ ТУХАЙ ШҮЛГҮҮД",
      post: "Нийтэлсэн: 2012-03-24, 16:54",
      content:
        "А.Эрдэнэ-Очир: “ЗУНЫ ШӨНӨ“ Хөнжлөө бага зэрэг яраадХөлийг нь салхи шүргээдАйлын бүсгүй гадаа унтана Цэнхэр амьсгал салхиар надад ирээд Цээж нь жаахан товойж харагдаад Айлын бүсгүй гадаа унтана Б.Лхагвасүрэн: “ЗУНЫ ИХ ҮД“ Тээрсэн нохой гэрийн сүүдэрт Тэнийлгэсэн арьс ...",
    },
    {
      id: 11,
      imageUrl: "/images/thumb_sample.jpg",
      link: "/news/angli-mongol-zuir-tsetsen-ugs",
      title: "АНГЛИ-МОНГОЛ ЗҮЙР СЭЦЭН ҮГИЙН САН",
      post: "Нийтэлсэн: 2012-02-19, 08:43",
      content:
        "Better an apple given than even Авч сурахаар өгч сур. A change is as good as a rest. Ажлаа солих нь амралт болно. Fortune knocks once at least at every ...",
    },
    {
      id: 12,
      imageUrl: "/images/thumb_sample.jpg",
      link: "/news/mongol-daaluunii-gunshin",
      title: "МОНГОЛ ДААЛУУНЫ ГУНШИН",
      post: "Нийтэлсэн: 2012-02-19, 08:38",
      content:
        " ЁОЗ: Ёгзолдоржийн хөдөөнөөс Ёнзон хамбын гадаанаас Цайны сүүний гуйлгачин Цалам барьсан дээрэмчин Хон хэрээний нүд Хоёр нүдний дуран Хойт хотын данжаад БӨХӨӨН: Өөхий бөөхий дөрөв Өвчүү номин шаргал Бөгжөө Сэнгийн ...",
    },
    {
      id: 13,
      imageUrl: "/images/thumb_sample.jpg",
      link: "/news/mongol-helnii-haraal-zuhel",
      title: "МОНГОЛ ХЭЛНИЙ ХАРААЛ ЗҮХЭЛ ҮГИЙН САН",
      post: "Нийтэлсэн: 2012-02-19, 08:30",
      content:
        " Аа муу хар сөлөр: “Аа муу хар сөлөр, хар үүрээр гуаглаад юу болов. Галзуу солио чинь хөдлөө юу. Өрвийж цайсан муу өгөр… гэж зэргэлдээх тагтнаас даахирсан саарал толгой цухуйж хараал ...",
    },
    {
      id: 14,
      imageUrl: "/images/amarbayasmangas.png",
      link: "/news/arvan-nugel-gegch-yusan-bol",
      title: "АРВАН ХАР НҮГЭЛ ГЭГЧ ЮУСАН БОЛ?",
      post: "Нийтэлсэн: 2012-02-16, 20:31",
      content:
        " Арван хар нүгэл бол биеэр үйлдэх гурав, амаар үйлдэх гурав, сэтгэлээр үйлдэх дөрвөн хар нүгэлээс бүрдэнэ. Биеэр үйлдэх гурван хар нүгэлд нь алив амьтны амийг хөнөөх, хулгай дээрэм хийж хүчээр ...",
    },
    {
      id: 15,
      imageUrl: "/images/thumb_sample.jpg",
      link: "/news/borts-herhen-hiih-we",
      title: "БОРЦ ХЭРХЭН ХИЙХ ВЭ?",
      post: "Нийтэлсэн: 2012-02-15, 13:10",
      content:
        "Саяхан монголчууд идэш хийлээ. Одоо махаа борцлохоор бэлтгэж байгаа байх. Борц бол нүүдэлчин монголчуудын бас нэг гол хүнс. Ялангуяа удаан хадгалах боломжтой учир гадаадад суугаа монголчууд нэлээд хэрэглэж байгаа харагддаг. ...",
    },
    {
      id: 16,
      imageUrl: "/images/zasdaghun.png",
      link: "/news/J.Bat-Ireedui:-zasdag-hun",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ЗАСДАГ ХҮН“ ",
      post: "Нийтэлсэн: 2012-02-15, 12:54",
      content:
        " Багш аа, засдаг хүн гэж юу гэсэн утгатай юм бэ, миний толинуудаас олддоггүй гэж Японд соёл судлалаар сурч байгаа нэг монгол оюутан утасдаж байна. Хуучин утга зохиол уншиж байгаа бололтой ...",
    },
    {
      id: 17,
      imageUrl: "/images/thumb_sample.jpg",
      link: "/news/azarga-herhen-tawih-we",
      title: "АЗАРГА ХЭРХЭН ТАВИХ ВЭ?",
      post: "Нийтэлсэн: 2012-02-15, 12:53",
      content:
        "Азарга хэрхэн тавих вэ? Азарга тавихад монголчууд их анхаарч сайн үрээгээр азарга тавихыг хичээдэг. Яагаад гэвэл азарга бол адуун сүргийн манлай, адууг хамгаалагч юм. Азарга тавих үрээний шинж хэмээвээс, бие ...",
    },
    {
      id: 18,
      imageUrl: "/images/thumb_sample.jpg",
      link: "/news/uhna-yaj-tawih-we",
      title: "УХНА ЯАЖ ТАВИХ ВЭ?",
      post: "Нийтэлсэн: 2012-02-15, 12:41",
      content:
        "Ухна яаж тавих вэ? Өсгөлөн, чийрэг, том биетэй, хошуу уртавтар, эвэр хэт шорон биш, үс сорлог, ноолуур арвин, зүс хар, хөх, улаан өнгийн бараандуу байх зэрэг арваад шинж бүрдсэн ишгээр ...",
    },
    {
      id: 19,
      imageUrl: "/images/love.png",
      link: "/news/J.Bat-Ireedui-hair",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ХАЙР“",
      post: "Нийтэлсэн: 2012-02-14, 22:55",
      content:
        "Хэзээ ч уйдахгүй мөнхийн хайр Хэнтэй ч хуваахгүй амин хайр Хэрэгтэй цагт амиа ч солих Хэнээс ч гуйхгүй бүтэн хайр аа",
    },
    {
      id: 20,
      imageUrl: "/images/DSC0032.png",
      link: "/news/J.Bat-Ireedui-shine-tsag",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ШИНЭ ЦАГИЙН ЕРТӨНЦИЙН ГУРАВ“",
      post: "Нийтэлсэн: 2012-03-24, 16:54",
      content:
        "Ардын уран зохиолч Тангадын ГАЛСАН гуайн цуглуулан баяжуулсан таван зуун хуудас ертөнцийн гурав уншсан чинь шинэ маягийн марзан ертөнцийн гурав зохиогоод байж болмоор ч юм шиг санагдаад заримаас нь толилуулья. ...",
    },
    {
      id: 21,
      imageUrl: "/images/TGALSAN.png",
      link: "/news/J.Bat-Ireedui-ertsontsiin-guraw",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ЕРТӨНЦИЙН ГУРВЫН ЕРТӨНЦӨӨР АЯЛАХУЙ“",
      post: "Нийтэлсэн: 2012-02-14, 21:56",
      content:
        "Ардын уран зохиолч Тангадын ГАЛСАН гуайн цуглуулан баяжуулсан таван зуун хуудас ертөнцийн гурав уншсан чинь шинэ маягийн марзан ертөнцийн гурав зохиогоод байж болмоор ч юм шиг санагдаад заримаас нь толилуулья. ...",
    },
    {
      id: 22,
      imageUrl: "/images/davidcalhoun.png",
      link: "/news/Devid-Kalhoun-ooriigoo-med",
      title: "ДЭВИД КАЛХОУН: “ӨӨРИЙГӨӨ МЭД, ЗОРИЛГОТОЙ, ӨӨРТӨӨ ҮНЭНЧ БАЙ“",
      post: "Нийтэлсэн: 2012-01-23, 09:30",
      content:
        "Дэвид Калхоун Бизнесмен, Женерал Элэктрик болон Ниелсэнд удирдах албан тушаал эрхлэгч Виржиниагийн Технологийн Их Сургуулийн Төгсөлтийн баярт хэлсэн үг, 2005 Ерөнхийлөгч Стегерт Танаа их баярлалаа. Виржиниа Тект сургуульд суралцах ...",
    },
    {
      id: 23,
      imageUrl: "/images/whats-my-name.png",
      link: "/news/J.Bat-Ireedui-mongol-hunii...",
      title: "Ж.Бат-Ирээдүй: “МОНГОЛ ХҮНИЙ НЭРИЙГ ХЭРХЭН БИЧИХ ВЭ?“",
      post: "Нийтэлсэн: 2011-12-31, 22:10",
      content:
        "Засгийн газрын шийдвэрээр Улсын Бүртгэлийн Ерөнхий Газар Монгол Улсын иргэний цаасан үнэмлэхийг цахим үнэмлэхээр солихоор бэлтгэл ажил үндсэндээ хийгдэж дуусаад байгаа юм байна. “Цахим үнэмлэхтэй болсноор тус улс ...",
    },
    {
      id: 24,
      imageUrl: "/images/421201_10150536089760186_687945185_92081.png",
      link: "/news/Steve-Jobs-iin...",
      title: "STEVE JOBS: YOUR TIME IS LIMITED, SO DON'T WASTE IT ...",
      post: "Нийтэлсэн: 2012-03-24, 16:54",
      content:
        "Зургийг Бат-Ирээдүй Номунзул АППЛЕ компанийг үндэслэгч СТИВ ЖОБС-ийн 2005 оны 6 дугаар сарын 12 нд буюу хавдар хэмээх аюулт өвчний онош тогтоосноос хойш яг жилийн дараа дэлхийн нэртэй их сургуулиудын ...",
    },
    {
      id: 25,
      imageUrl: "/images/thumb_sample.jpg",
      link: "/news/J.Bat-Ireedui-kongressiin...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “КОНГРЕССИЙН НОМЫН САНГААР ЗОЧИЛОХУЙ“",
      post: "Нийтэлсэн: 2011-12-07, 23:32",
      content:
        "Конгрессийн Номын Сан цэвэр судалгааны зориулалттай Нэгдсэн улсын соёлын томоохон институц юм. Конгрессийн номын сан номын тоо, тавиурын уртаараа дэлхийд дээгүүр жагсах бөгөөд 1800 онд Ерөнхийлөгч Жон Адамс Пиладелпиагаас шинэ ...",
    },
    {
      id: 26,
      imageUrl: "/images/niitleliin-zurag.png",
      link: "/news/J.Bat-Ireedui-australia-iin...",
      title:
        "Ж.БАТ-ИРЭЭДҮЙ: “АВСТРАЛИЙН ҮНДЭСНИЙ ИХ СУРГУУЛЬД МОНГОЛ СУДЛАЛЫН ТӨВ НЭЭГДЛЭЭ“",
      post: "Нийтэлсэн: 2011-12-07, 23:2",
      content:
        "  Олон зуун жилийн тэртээгээс дэлхийн эдийн засаг, улс төр, нийгмийн талаар хүч нөлөөтэй гол гол улс орнуудад монголыг судлах төв, байгууллагууд үүсэж бий болж, хөгжиж бас ч зарим нь янз ...",
    },
    {
      id: 27,
      imageUrl: "/images/taxi.png",
      link: "/news/J.Bat-Ireedui-mongonii...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “МӨНГӨНИЙ АНТЕН“",
      post: "Нийтэлсэн: 2011-11-23, 23:05",
      content:
        "Хүн хүний мөнгө хийх арга өөр өөр. Капиталист нийгэмд том хүн байтугай хүүхэд мөнгө хийх аргаа олдог тухай өмнө би бичиж байсан. Өнөөдөр бас нэг мөнгө хийдэг “ухаантай арга” мэдлээ. Энэ ...",
    },
    {
      id: 28,
      imageUrl: "/images/2012.02.29.png",
      link: "/news/bas-negen-hobby",
      title: "БАС НЭГЭН ХОББИ",
      post: "Нийтэлсэн: 2012-03-24, 16:54",
      content:
        "Та бүхэнд 2011 оны 9 дүгээр сарын 04-07 нд болсон “МАНЖИЙН ҮЕИЙН МОНГОЛЫН ТҮҮХ БИЧЛЭГ, АРХИВЫН БАРИМТ“ олон улсын эрдэм шинжилгээний бага хурлын үеэр 9 дүгээр сарын 7 ний өдөр ...",
    },
    {
      id: 29,
      imageUrl: "/images/IMG_5811.png",
      link: "/news/J.Bat-Ireedui-rain-mornii...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “РЕЙН МӨРНИЙ ЭРЭГ ДЭЭР“",
      post: "Нийтэлсэн: 2012-03-24, 16:54",
      content:
        "Монгол судлалаар Баруун Европт төдийгүй дэлхийд нэр хүндтэй, хуучны уламжлалтай, ХБНГУ-ын Бонны Их Сургуулийн Монгол, Төвд судлалын тэнхимээс 2011 оны 9 дүгээр сарын 4-8 нд “The History of the Mongols ...",
    },
    {
      id: 30,
      imageUrl: "/images/pickles-269x300.png",
      link: "/news/J.Bat-Ireedui-varianii...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ВАРЕНИЙ ШИЛ“",
      post: "Нийтэлсэн: 2011-11-06, 17:15",
      content:
        "Варений шилийг бид өөрсдөө хийдэггүй, гадаадаас голдуу жимс ногоотой авдаг байх. Импортын барааны ногоо цагааг хэрэглэж дуусаад шилийг нь янз бүрийн зориулалтаар хэрэглэдэг. Хүүхдүүд бай болгож чулуугаар хагалах, будаг шунх ...",
    },
    {
      id: 31,
      imageUrl: "/images/IPHONEIINZURAGNUUD257.png",
      link: "/news/J.Bat-Ireedui-muis-hevleliin...",
      title: "Ж.БАТ-ИРЭЭПҮЙ: “МУИС ХЭВЛЭЛИЙН ГАЗАР БАЙГУУЛЪЯ“",
      post: "Нийтэлсэн: 2011-11-06, 16:40",
      content:
        " Дэлхийн их сургуулиуд бүгд өөрийн гэсэн хэвлэлийн газартай байдаг. Тухайлбал бидний сайн мэдэх Оксфорд Университи Пресс (www.oup.co.uk), Харвард Университи Пресс (www.hup.harward.edu), Кембриж Университи Пресс (www.cambridge.org), Йэле Университи Пресс (www.yale.edu/yup), Колумб ...",
    },
    {
      id: 32,
      imageUrl: "/images/IMG_3058.png",
      link: "/news/J.Bat-Ireedui-avaariin-gerel...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “АВААРЫН ГЭРЭЛ“",
      post: "Нийтэлсэн: 2011-11-06, 16:25",
      content:
        "Бүтэн сайн өдөр Энх тайвны гүүрээс ирэх чиглэлд Төв шуудангийн уулзврын замын гэрэл дээр араас ойр хавьд машингүй болохоор нь “аваарын гэрлээ” асааж байгаад машин дотроосоо нэг зураг дарах зуурт ...",
    },
    {
      id: 33,
      imageUrl: "/images/Beethoven.png",
      link: "/news/J.Bat-Ireedui-bethoven-ger...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “БЕТХОВЕНИЙ ГЭР МУЗЕЙГЭЭР ЗОЧИЛОХУЙ“",
      post: "Нийтэлсэн: 2011-11-06, 16:21",
      content:
        " Германы хуучин нийслэлд 2000 оноос хойш ажил албаны хэргээр голдуу хэд хэдэн удаа очжээ миний бие. Харин Людвиг вон Бетховений музей үзэх завгүй л явсан хэрэг байх, энэ удаа харин ...",
    },
    {
      id: 34,
      imageUrl: "/images/IMG_6622.png",
      link: "/news/J.Bat-Ireedui-tamganii-hishig",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ТАМГАНЫ ХИШИГ“",
      post: "Нийтэлсэн: 2011-11-06, 16:14",
      content:
        "Монгол нутагт намрын сэрүүн орж, зарим нутгаар цас хэдийн орж, оройдоо жихүүн сэрүүхэн болжээ. Өнөөдөр намрын дунд сарын шинийн таван, цагаан бар өдөр байлаа. Энэ өдөр би Баянчандмань сумын адуучин ...",
    },
    {
      id: 35,
      imageUrl: "/images/DSC00330.png",
      link: "/news/J.Bat-Ireedui-huuliin...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ХУУЛИЙН ГАЗАР ХУЛГАЙЧ, ШАШНЫ ГАЗАР ЧӨТГӨР БИЙ“",
      post: "Нийтэлсэн: 2011-10-14, 12:05",
      content:
        "Монголчууд ёс бус, хууль биш зүйлийг зүйрлэн нэрлэсэн олон сайхан зүйр сэцэн үг сэтгэсэн улс. Сүүлийн үед шашны хүн нь хормой хотоо дарахаа байлаа, хуулийн хүмүүс нь ч худал хулгайгаа ...",
    },
    {
      id: 36,
      imageUrl: "/images/twitter.png",
      link: "/news/J.Bat-Ireedui-twitter...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ТВИТТЭР БА МОНГОЛ ЖИРГЭЭЧИД“",
      post: "Нийтэлсэн: 2011-07-15, 12:30",
      content:
        " Дэлхий даяарт твиттэр буюу жиргээ гэгч нэг интернетийн сүлжээ үүсээд өнөөдөр буюу 2011 оны 7 дугаар сарын 15нд яг таван жилийн нүүр үзэж байна. Энэ бол бие даасан хувийн вэб сайт буюу микро маягийн блогрхуу юм. Энэ сүлжээнд нэгдэж өөрийн дансаа нээсэн хэрэглэгчийг твиттэрч буюу жиргээчин гэж дуудна. Ердөө 140 тэмдэгтэд багтааж бичдэг энэ жижигхэн дөрвөлжинд аль болох товч тодорхой бичихгүй бол тэгэсхийгээд дүүрчихнэ. Заримдаа үүнийг интернетийн мессеж гэж нэрлэх нь ч бий.Энэ сүлжээ дэлхийд аяархэн , хаана байхаас үл шалтгаалан хэдхэн секундэд мэдээхүргэдэг, үнэ төлбөргүй хэрэгсэл юм. Үүний үр шимийг мэдэж хүртсэн хүмүүс твиттэрээс салахаа байдаг. Учир нь хүн гэдэг амьтан байнга л аливааг эргэцүүлэн бодож оюун дүгнэлт хийж, санал шийдэл гаргах гэж явдаг бөгөөд үүнийгээ хэн нэгэнтэй хуваалцахад ялангуяа хаана байгаагаас үл шалтгаалан суугаа газар орноосоо санал бодлоо хэдэн секундэд солилцоход энэ твиттэр гэдэг юм ямар гээч их ач тустай болохыг твиттэрт орж үзсэн хүн бүхэн мэдэх байх. Твиттэр хэмээх энэ бичил Вэб сайтын толгой компани нь АНУ-ын СанФранцискод байрлах бөгөөд 2006 оны 7 сарын 15нд нийтэд дэлгэрсэнээс хойш өнөөдөр 200сая хэрэглэгчтэй болж, дэлхийн хэмжээнд өдөртөө 195сая твит хийж байна. Энэ компани ердөө 450 ажилтантай, хөдөлгөөнт холбоо харилцааны хамгийн өргөн үйлчилгээ явуулдаг, англи, франц, герман, итали, япон, солонгос, орос, испани гээд олон хэлээр явуулах боломжийг бүрдүүлсэн байдаг.Твиттэрийн уг үндсийг Одео гэгч подкастинг явуулдаг компаний захирлуудын зөвлөл өдөржин хамт сууж янз бүрийн санаа оноо гаргасны эцэст олжээ.Ноён Жек Дорси анх жижиг бүлэг хамт олны хүрээнд...",
    },
    {
      id: 37,
      imageUrl: "/images/Jantsannorbu.png",
      link: "/news/Jantsannorow-hun-bol...",
      title: "Жанцанноров бол хүн биш",
      post: "Нийтэлсэн: 2011-11-06, 16:25",
      content:
        " Төрийн соёрхолт, Ардын жүжигчин Дэндэвийн Пүрэвдорж гэж цагийг эзэлсэн их хүмүүн бидний дунд амьдарч байлаа. Хорвоогоос хэдийнэ хальсан ч бичиж туурвисан уран бүтээл нь өнөө ч амьдарч, онгод цадиг нь ...",
    },
    {
      id: 38,
      imageUrl: "/images/images11.png",
      link: "/news/brain-adams",
      title: "BRAIN ADAMS",
      post: "Нийтэлсэн: 2009-12-26, 22:15",
      content:
        " ЭНЭ ХӨГЖМИЙН ЕРТӨНЦӨД ЯМАР НЭГЭН ОРОН ЗАЙ ЭЗЛЭЖ БАЙГААГАА БИ МЭДДЭГ, МЭДЭРДЭГ. ХЭРЭВ БИ ЭНЭ ЕРТӨНЦӨД АМЖИЛТ ОЛООГҮЙ БОЛ ЯАХ БАЙСАН ЮМ, БҮҮ МЭД. ЯМАР Ч БАЙСАН НЭГ ЗҮЙЛ ХИЙХ ...",
    },
    {
      id: 39,
      imageUrl: "/images/imagesCADVLW5V.png",
      link: "/news/pop-jon-poul",
      title: " Поп Жон Поул II",
      post: "Нийтэлсэн: 2009-12-23, 22:50",
      content:
        "Ирээдүй маргаашаас биш өнөөдрөөс эхлэдэг. Асуудлыг нударгаар шийдэх нь эр хүний зан биш. Тэнэглэл нь бурханы бэлэг ч гэсэн буруугаар ашиглах ёсгүй.Эрх чөлөө гэдэг бидний хийх дуртайг биш харин бидний хийх ёстойг ...",
    },
    {
      id: 40,
      imageUrl: "/images/imagesCAH7KHJ7.png",
      link: "/news/william-blake",
      title: "William Blake",
      post: "Нийтэлсэн: 2009-12-18, 22:30",
      content:
        "Дайсныг мартах нь найзаа мартахаас амархан. It is easier to forgive an enemy than forgive a friend.William Blake 1757 оны 11 сарын 28 нд төрж, 1827 оны 8 сарын 12 ...",
    },
    {
      id: 41,
      imageUrl: "/images/dalai-lama.png",
      link: "/news/dalai-lamiin-gun...",
      title: "Далай ламын гүн ухаан",
      post: "Нийтэлсэн: 2009-12-14, 00:15",
      content:
        "Та бусдыг аз жаргалтай байлгахыг хүсвэл хайр энэрэлд суралц. Өөрөө аз жаргалтай байхыг хүсэж байвал хайр энэрэлд суралц. Энэ бол миний энгийн шашин. Сүм дуган хэрэггүй. Толгой эргүүлсэн гүн ухаан ...",
    },
    {
      id: 42,
      imageUrl: "/images/mages6.png",
      link: "/news/Luciano-pavarotti",
      title: "Luciano Pavarotti",
      post: "Нийтэлсэн: 2009-12-12, 22:25",
      content:
        "ХӨГЖИМ СОНСОХОД ТАНД ӨӨР УУРАГ ТАРХИ ХЭРЭГГҮЙ.You don't need any brains to listen to music.Luciano Pavarotti 1935 оны 10 сарын 2007 оны 9 сарын 6 нд өнгөрсөн.",
    },
    {
      id: 43,
      imageUrl: "/images/iphone-pad..png",
      link: "/news/J.Bat-Ireedui-gar-utas",
      title: " Ж.БАТ-ИРЭЭДҮЙ:  “ГАР УТАС“",
      post: "Нийтэлсэн: 2009-11-30, 11:45",
      content:
        " Гар утас гээч дэлгэрч эхэлсэн цаг саяхан. Дөнгөж саяхан л ерээд оны эхээр Лондонд гар утас анх гарч Моторолла-гийн хүн цохиод унагачихмаар хүнд хар утсаар найзыгаа таксинаас Монголтой яриулж “гайхуулж“ ...",
    },
    {
      id: 44,
      imageUrl: "/images/Emeel.png",
      link: "/news/J.Bat-Ireedui-hiroshima...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ХИРОШИМА БА НАЙМ АРВАН ТАВ“",
      post: "Нийтэлсэн: 2009-11-29, 11:50",
      content:
        "Саяхан Окаяама хотод болох Японы Монгол судлалын холбооны намрын эрдэм шинжилгээний бага хуралд оролцохоор бидний хэдэн нөхөд хоёр хоногийн хугацаатай явах зуур далимд нь нөгөө атомын бөмбөг хаясан Хирошима хотод ...",
    },
    {
      id: 45,
      imageUrl: "/images/IMG_0664.png",
      link: "/news/J.Bat-Ireedui-buynt...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “БУЯНТ УХААД БУУХ САЙХАН, ХАРИН ...“",
      post: "Нийтэлсэн: 2009-08-03, 12:00",
      content:
        "Буянт ухаад буух сайхан хэмээн нэгэн яруу найрагч дуу алдан шүлэглэсэн санагдана. Нээрээ л Буянт Ухаад буух сайхан, агаар нь цэнгэг, амисгал уужим тэнүүн. Энэ буянтай сайхан нэр алга болох ...",
    },
    {
      id: 46,
      imageUrl: "/images/IMG_1013.png",
      link: "/news/J.Bat-Ireedui-ijii-mini",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ИЖИЙ МИНИ“",
      post: "Нийтэлсэн: 2009-07-21, 12:25",
      content:
        "Дайсныг мартах нь найзаа мартахаас амархан. It is easier to forgive an enemy than forgive a friend.William Blake 1757 оны 11 сарын 28 нд төрж, 1827 оны 8 сарын 12 ...",
    },
    {
      id: 47,
      imageUrl: "/images/imagesCAHUIKB1.png",
      link: "/news/J.Bat-Ireedui-hunii-aash",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ХҮНИЙ ААШ“",
      post: "2009-12-18, 22:30",
      content:
        " Асгартал орохоор үерлэлээ гэх, Аашлаж загнахаар агсарлаа гэх юм Дуутай тэнгэрийг хургүй гэх, Дурласан залууг сохор гэх юм. Навч унахаар намар гэх Намайг унахаар чамайг гэх. Нар гарахаар халлаа гэх, ...",
    },
    {
      id: 48,
      imageUrl: "/images/Havar2011Tokyo326.png",
      link: "/news/J.Bat-Ireedui-emnelgiig-es...",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “ЭМНЭЛГИЙГ ЭС ХҮСВЭЭС ЭРҮҮЛ БАЙ“",
      post: "2009-12-18, 22:30",
      content:
        "“Эрүүлийг хүсвэл эмнэлгийг хүс“ Монголын орчин үеийн уран зохиолыг үндэслэгч Д.Нацагдорж аль 1935 онд ингэж бичиж байж. Энэ уриа хүмүүсийн мөнхийн уриа. Өнөөдөр ч утга чанар алдаагүй л байна. Эрүүл ...",
    },
    {
      id: 49,
      imageUrl: "/images/imagesCALI0NF6.png",
      link: "/news/J.Bat-Ireedui-sakura",
      title: "Ж.БАТ-ИРЭЭДҮЙ: “САКУРА“",
      post: "2009-12-18, 22:30",
      content:
        "Санаа алдахад нь Санаашраад догдлоно чинээ бодсонгүй,Салаад унахад ньСалхинд хийснэ чинээ санасангүй.Бороо минь чи түүн дээр бүү дусДуслыг чинь тэр даахгүй, хүнддэнэ.Салхи минь чи түүнийг бүү сэв,Сэвшээг тэнь тэр тэвчихгүй, ...",
    },
  ];

  let filteredItems = allItems;

  if (query) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json(filteredItems);
}
