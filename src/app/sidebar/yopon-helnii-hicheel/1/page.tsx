import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 61, height: 16 }}
        >
          ЯПОНЫ
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 54, height: 16 }}
        >
          БИЧИГ
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 37, height: 16 }}
        >
          ҮСЭГ
        </span>
      </h1>
      <div className="post_content_full">
        <div style={{ textAlign: "justify" }}>
          <strong>
            <Image
              width={200}
              height={200}
              src="/images/ypon/bicig.jpg"
              alt=""
              style={{
                float: "left",
                display: "inline",
                width: 200,
                marginRight: 10,
              }}
            />
            Япончууд ханз, хирагана, катагана хэмээх гурван төрлийн бичигтэй.
            Ханз нь (дүрс бүр нь нэг утга илэрхийлнэ) дүрс бичиг бөгөөд Хятадад
            зохиогдсон юм. Үүнийг Японд тавдугаар зуунаас өмнөхөн хэрэглэж
            эхлэсэн бөгөөд өнөөдөр ч хэрэглэсээр л байна. Өнгөрсөн хугацаанд нэг
            дүрс нөгөөтэй нийлж шинэ үг үүсгэн баяжсаар байна. Ер нь бол маш
            олон энгийн дүрс үсэг Хятад болоод Японд адилхан хэлбэртэй боловч
            утгын хувьд бага зэрэг өөрлөгдөж байна. Есдүгээр зуунаас эхлэн Японд
            хирагана, катагана хэмээх хоёр төрлийн авианы бичиг хэрэглэж
            эхлэсэн. Яг цагаан толгой шиг боловч тус бүр өөр авианы нийлэмжийг
            үсэгнүүд юм. Хирагана, катагана аль аль нь дөчин зургаан бичлэг
            зурлагатай. Япон хэлэнд таван дүрс нь таван эгшиг авианы
            дуудлагатай. Нэг зурлага нь дан гийгүүлэгчийн аялгатай бөгөөд м
            болон н-ийн хоорондох авианы дуудлага илэрхийлнэ. Ийнхүү дөчин дүрс
            нь тус гийгүүлэгчийг үзүүлэх бөгөөд тус бүр эгшгээр амилж нийлмэл
            авиа үүсгэнэ. Хирагана, катагана хоёр бол бие даасан авиатай боловч
            өөр өөр зурлагатай. Хоёр бичгийн ерөнхий зориулалт адил боловч
            катагана нь зөвхөн гадаад үгийг(өөр орноос орж ирсэн ормол үг)
            бичихэд хэрэглэдэг. Хирагана, катагана бол ханз сурахаас нэлээд
            амархан. Хүүхдүүд эхлээд хирагана, катагана сурах бөгөөд хүүхдийн
            номууд голдуу хирагана-гаар бичигдсэн байдаг. Хүүхдүүд бага
            сургуулийн нэгдүгээр ангиас эхлэн ханз сурч эхлэх ба энгийнээс нь
            эхлэн сурна. Зарим ханзны дүрсийг хэд хэдэн янзаар уншиж болох
            бөгөөд хамгийн зөв утгыг хам бичвэрээс нь хамааран ойлгох нь бий.
            Жишээлбэл, аки хэмээх дүрс үсэг нь тэнгэр болон хоосон гэсэн хоёр
            утга илэрхийлнэ. Энэ хоёр үг англиар адил бичлэгтэй боловч харин
            гэрэл, халуун хэмээн хоёр өөр утгатай.
          </strong>
        </div>
        <div style={{ textAlign: "justify" }}>
          <strong>
            <br />
          </strong>
        </div>
        <div style={{ textAlign: "justify" }}>JAPANESE WRITING</div>
        <div style={{ textAlign: "justify" }}>
          Japanese has three writing systems, kanji, hiragana and katagana.
          Kanji is a form of ideography (each character represents one word)
          which was invented in China. It was introduced to Japan some time
          before the fifth century and is still used today. Over the years, some
          characters have combined with other characters to form new words.
          Although many of the basic characters are still the same in China and
          Japan, the meanings of some have changed slightly over time. In the
          ninth century, Japan invented two phonetic writing systems, hiragana
          and katakana. They are like alphabets, but each character represents a
          phonetic syllable, rather than a single sound. Hiragana and katagana
          each contain forty-six characters. Five of the characters represent
          the vowel sounds used in Japanese. One character represents a single
          consonants sound which is a cross between m and n. And the remaining
          forty characters represent various consonant vowel conbinations.
          Hiragana and katagana represent identical sounds, but use diffrent
          characters. The main reason for having two sets is that one of them,
          katagana, is used primarily to write loan words (i.e. words from other
          countries). Hiragana and katagana are much simpler to learn than
          kanji. Children learn these characters first, and children’s books ar
          usually written in hiragana. Kids do learn kanji from the first year
          of elementary school, but they start with simple ones. Some kanji
          characters can be read in multiple ways, and the exact meaning must
          sometimes be guessed from the context. For example, aki could mean sky
          or empty. This is similar to words in English which have the same
          spelling but different meanings (light, hot, etc.).
        </div>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/sidebar/yopon-helnii-hicheel/">ЯПОН ХЭЛНИЙ ХИЧЭЭЛ</a>
      </div>
      <div className="post_info_full right">2009.12.24</div>
      <div className="clear" />
    </div>
  );
}
