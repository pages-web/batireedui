import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 57, height: 16 }}
        >
          ГАРЫН
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 41, height: 16 }}
        >
          ҮСЭГ
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 25, height: 16 }}
        >
          ЭЭ
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 32, height: 16 }}
        >
          ГЭЖ
        </span>
      </h1>

      <div className="post_content_full">
        <div style={{ textAlign: "justify" }}>
          <span>
            <Image
              width={300}
              height={230}
              src="/images/ypon/Signature.jpg"
              alt=""
              style={{
                float: "left",
                display: "inline",
                width: 300,
                marginRight: 10,
              }}
            />
            Өнөөдрийн залуу дот ком хэмээх сайтад хоймроор голдуу суудаг
            нөхдүүдийн,&nbsp;&nbsp;манайдаа гайгүй&nbsp;томчуудын гарын үсэгтэй
            нэг мэдэгдэх захидал гээч юм нийтлэгдэж. Сүрийг үзүүлж байгаа
            бололтой юм.&nbsp;Хууль ёс нарийн, журам дүрэм хатуу газар бол хүний
            гарын үсгийг ингэж хамаагүй ил задгай тавьж болохгүй байх шүү. Муу
            хүмүүс ашиглавал яана. Гэхдээ манайд одоохондоо ийм нарийн ширийн
            зүйлээ хуульчилж амжаагүй тул зурсан зуруулсан хоёр аль аль нь
            тоохгүй байх шиг байна. Нэгэнт нэтэд тавьсан тул би зүгээр хүний
            гарын үсгийг бичлэг, бэлгэдлийн үүднээс&nbsp;&nbsp;сонирхдог
            хүний&nbsp;хувиар энд толилуулахаар тавичихлаа.
          </span>
        </div>
        <div style={{ textAlign: "justify" }}>
          <span>
            Хүний гарын үсэг гэдэг бол өөрийг нь ямар хүн бэ гэдгийг хэлээд
            өгдөг гэж ярьдаг. Ер нь үсэг, бичгийн хэв бол бас тэр хүнийг
            илэрхийлэх нэг зүйл гарцаагүй мөн нь мөн. Амьдрал дээр найгүй
            бичигтэй ч ёстой хүн шиг хүн байж л байдаг, харин аятайхан бичдэг
            мөртлөө жинхэнэ хогийн шаар бас зөндөө. Тийм учраас муухай бичигтэй
            бол муу хүн, сайхан бичвэл сайн хүн гэж дүгнэж болохгүй ч бас ч
            гэж&nbsp;энд тэнд сайн муу янз бүрийн юман дээр гарын үсэг зурдаг
            хүн гарын үсгээ аятайхан байх талаас бодмоор юм билээ. Мунхаг
            манийгаа удирддаг гэх энэ хүмүүсийн гарын үсгийг нэг шинжиж үзвэл
            энд нээрээ олигтой гарын үсэг нэг алга аа. Отгонбаяр сайдынх арай
            дөнгүүр юм уу даа. Ер нь гарын үсэг хайш яайш зүйл бас биш юм. Тийм
            учраас залуугаасаа гарын үсгээ зурж сурахдаа маш бодож зурж,
            сурч&nbsp;дасах хэрэгтэй шиг санагддаг. Яс юман дээр хүний гарын
            үсэг бол давтагдахгүй шинж чанараараа ямар ч нарийн хийсэн тамга
            тэмдэгнээс нарийн эд. Тийм учраас албан бичиг баримт, банкны данс
            гээд бүхий л зүйлд гарын үсгээр баталгаа болгодог. Монголчууд аливаа
            зүйлийн сайн сайхны бэлгэдлийг их боддог улс. Доошоо татаж
            төгсгөсөн&nbsp;зурлагатай гарын үсэг унаж уруудахыг ёрлодог бол,
            дээш өөдөө татлагатай гарын үсэг өсөж дэвжихийн сайн утга бэлгэддэг
            ч гэж ярьдаг. Хамгийн наад зах нь иймэрхүү зүйлээс нь
            эхлээд&nbsp;бодууштай юм билээ. Гадны томчуудын гарын үсэг бол
            нээрээ ТОМ юм билээ шүү. Зураас зурлага бүхэн нэгийг илэрхийлсү.
          </span>
        </div>
        <div style={{ textAlign: "justify" }}>
          <span>Зургийн эх сурвалж zaluu.com</span>
        </div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/home/%D1%8E%D0%BC-%D0%B3%D1%8D%D0%B4%D1%8D%D0%B3-%D1%83%D1%87%D0%B8%D1%80%D1%82%D0%B0%D0%B9/">
          ЮМ ГЭДЭГ УЧИРТАЙ
        </a>
      </div>
      <div className="post_info_full right">2012.04.03</div>
      <div className="clear" />
    </div>
  );
}
