import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      {/* Begin Cufon */}
      <h1>ЭХ ХЭЛ БИЧИГТЭЭ ЭЗЭН НЬ БАЙЦГААЯ</h1>
      <div className="post_list">
        <div className="post_intro">
          <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay/buruutan">
            <Image
              alt=""
              width={301}
              height={200}
              src="/images/1816364843724737127_301_x_200.png"
            />
          </Link>
          <h2>
            <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay/buruutan">
              Ж.Бат-Ирээдүй: &quot;БУРУУТАН&quot;
            </Link>
          </h2>
          <span className="post_info">Нийтэлсэн: 2012-04-02, 13:48</span>
          <div className="post_content">
            Монгол бичгээс уншиж, татлага буланд байгаа кирил эхтэй тулгаж
            өөрийгөө шалгана уу? Монгол бичгээр бичсэн Энхсувд (МУИС)
          </div>
          <span className="post_info">
            Ангилал:
            <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay">
              ЭХ ХЭЛ БИЧИГТЭЭ ЭЗЭН НЬ БАЙЦГААЯ
            </Link>
            <span className="pipe">|</span> 0 Сэтгэгдэл
          </span>
        </div>
        <div className="post_intro">
          <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay/bi-alaagui-tugjil-alsan">
            <Image
              alt=""
              width={301}
              height={200}
              src="/images/373850741216173740_301_x_200.png"
            />
          </Link>
          <h2>
            <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay/bi-alaagui-tugjil-alsan">
              Би алаагүй, Түгжил алсан
            </Link>
          </h2>
          <span className="post_info">Нийтэлсэн: 2012-04-02, 13:00</span>
          <div className="post_content">
            Монгол бичгээрх эхийг уншиж, кирил эхтэй нь тулгаж өөрийгөө шалга.
          </div>
          <span className="post_info">
            Ангилал:
            <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay">
              ЭХ ХЭЛ БИЧИГТЭЭ ЭЗЭН НЬ БАЙЦГААЯ
            </Link>
            <span className="pipe">|</span> 0 Сэтгэгдэл
          </span>
        </div>
        <div className="post_intro">
          <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay/chuulganiig-neej-yavuulah-yostoi-baigaa">
            <Image
              alt=""
              width={301}
              height={200}
              src="/images/5639836534603851951_301_x_200.png"
            />
          </Link>
          <h2>
            <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay/chuulganiig-neej-yavuulah-yostoi-baigaa">
              Ж.БАТ-ИРЭЭДҮЙ: &quot;ЧУУЛГАНЫГ НЭЭЖ ЯВУУЛАХ ЁСТОЙ БАЙГАА&quot;
            </Link>
          </h2>
          <span className="post_info">Нийтэлсэн: 2012-02-14, 17:26</span>
          <div className="post_content">
            Манай хэвлэл мэдээллийнхэн тэр дундаа зурагтын сэтгүүлч нар тэгдэг
            байгаа, ингэдэг байгаа гэж нэг муухай модон бөгөөд буру
            хэлбэржүүлсэн загвараар нэлээд яриж моод болгож байсаныг шүүмжилэе
            гэж бодсоор явтал нөгөө ...
          </div>
          <span className="post_info">
            Ангилал:
            <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay">
              ЭХ ХЭЛ БИЧИГТЭЭ ЭЗЭН НЬ БАЙЦГААЯ
            </Link>
            <span className="pipe">|</span> 0 Сэтгэгдэл
          </span>
        </div>
        <div className="post_intro">
          <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay/yalgaj-bichij-surtsgaay">
            <Image
              alt=""
              width={301}
              height={200}
              src="/images/4891743514783525560_301_x_200.png"
            />
          </Link>
          <h2>
            <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay/yalgaj-bichij-surtsgaay">
              Ж.БАТ-ИРЭЭДҮЙ: &quot;УС, ҮС ХОЁРОО ЯЛГАЖ БИЧИЖ СУРАЯ&quot;
            </Link>
          </h2>
          <span className="post_info">Нийтэлсэн: 2009-06-19, 13:55</span>
          <div className="post_content">
            Саяхан манай үүгээр нэг зар тарлаа. Монгол Улсын Жалхаажавын
            Мөнхцэцэг гэдэг зураач 6 сарын 10-30 нд Токио хотын Стрипэд Хаус
            Галлерейд (Striped House Gallery) уран бүтээлийн үзэсгэлэнгээ гаргах
            юм гэнээ. ...
          </div>
          <span className="post_info">
            Ангилал:
            <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay">
              ЭХ ХЭЛ БИЧИГТЭЭ ЭЗЭН НЬ БАЙЦГААЯ
            </Link>
            <span className="pipe">|</span> 0 Сэтгэгдэл
          </span>
        </div>
      </div>
    </div>
  );
}
