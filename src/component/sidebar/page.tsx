import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div id="sidebar" style={{ marginLeft: "15px" }}>
      <div id="sidebar-box">
        <Link href="/sidebar/about-me">
          <Image
            alt=""
            width={310}
            height={150}
            src="/images/template/bat-ireedui.png"
          />
        </Link>
        <Link href="/sidebar/about-me">
          <h4>ӨӨРИЙН ТУХАЙ ТОВЧ</h4>
        </Link>
        <p style={{ textAlign: "justify" }}>
          <span style={{ color: "#000a83" }}>
            Монгол Улсын Их Сургуулийн Хэлбичгийн Факультетийг Монгол хэл, уран
            зохиолын багш, судлаач мэргэжлээр төгссөн. Мөн МУИС-ийн Франц хэлний
            орчуулагчийн ангийг оройгоор төгссөн. 2011 оны 4 дүгээр сараас
            МУИС-ийн Монгол судлалын Хүрээлэнгийн Гүйцэтгэх Захиралаар ажиллаж
            байна. The New Media Group-ийн Удирдах Зөвлөлийн гишүүн. 2008 оноос
            Монгол Улсын Монгол хэлбичгийн багш нарын үндэсний ...
          </span>
        </p>
      </div>{" "}
      {/* End #Sidebar Box */}
      <div id="newsletter-box">
        <input
          id="subscribe"
          className="newsletter-email watermark"
          type="email"
          fdprocessedid="19mul8"
        />
        <input
          className="newsletter-button subscribe_btn"
          type="button"
          defaultValue="илгээх"
          fdprocessedid="bfwe92"
        />
      </div>{" "}
      {/* End #Sidebar Box */}
      <h4>Ангилал</h4>
      <li>
        <Link href="/sidebar/eh-hel-bichigtei-ezen-ni-baitsgaay">
          ЭХ ХЭЛ БИЧИГТЭЭ ЭЗЭН НЬ БАЙЦГААЯ
        </Link>
      </li>
      <li>
        <Link href="/sidebar/yopon-oron-yoponii-soyl">
          ЯПОН ОРОН, ЯПОНЫ СОЁЛ
        </Link>
      </li>
      <li>
        <Link href="/sidebar/yopond-herhen-amidrah-ve">
          ЯПОНД ХЭРХЭН АМЬДРАХ ВЭ?
        </Link>
      </li>
      <li>
        <Link href="/sidebar/yopon-helnii-hicheel">ЯПОН ХЭЛНИЙ ХИЧЭЭЛ</Link>
      </li>
      <li>
        <Link href="/sidebar/esh-ugs">ЭШ ҮГС</Link>
      </li>
      <li>
        <Link href="/sidebar/yopon-duunii-san">ЯПОН ДУУНЫ САН</Link>
      </li>
      <li>
        <Link href="/sidebar/yum-gedeg-uchirtai">ЮМ ГЭДЭГ УЧИРТАЙ</Link>
      </li>
      <li>
        <Link href="/sidebar/temdeglel">ТЭМДЭГЛЭЛ</Link>
      </li>
      <li>
        <Link href="/sidebar/il-zahidal">ИЛ ЗАХИДАЛ</Link>
      </li>
      <li>
        <Link href="/sidebar/sanaa">САНАА</Link>
      </li>
      <li>
        <Link href="/sidebar/video-bolon-bichleg">ВИДЕО БОЛОН БИЧЛЭГ</Link>
      </li>
      <li>
        <Link href="/sidebar/medee">МЭДЭЭ МЭДЭЭЛЭЛ</Link>
      </li>
      <li>
        <Link href="/sidebar/bichil-uguulleg">БИЧИЛ ҮГҮҮЛЭЛ</Link>
      </li>
      <li>
        <Link href="/sidebar/delhiin-shildeg-10-uguulleg">
          ДЭЛХИЙН ШИЛДЭГ 10 ИЛТГЭЛ
        </Link>
      </li>
      <li>
        <Link href="/sidebar/udirtgal-uyalga-ugs">УДИРТГАЛ, УЯЛГА ҮГС</Link>
      </li>
      <li>
        <Link href="/sidebar/shine-tsagiin-yortontsiin-gurav">
          ШИНЭ ЦАГИЙН ЕРТӨНЦИЙН ГУРАВ
        </Link>
      </li>
      <li>
        <Link href="/sidebar/shuleg-min">ШҮЛЭГ МИНЬ</Link>
      </li>
      <li>
        <Link href="/sidebar/mongol-tehnologi">МОНГОЛ ТЕХНОЛОГИ</Link>
      </li>
      <li>
        <Link href="/sidebar/mongol-helnii-hicheel">МОНГОЛ ХЭЛНИЙ ХИЧЭЭЛ</Link>
      </li>
      <li>
        <Link href="/sidebar/mongol-helnii-ugiin-san  ">
          МОНГОЛ ХЭЛНИЙ ҮГСИЙН САН
        </Link>
      </li>
      <li>
        <Link href="/sidebar/niitlel">НИЙТЛЭЛ</Link>
      </li>
      <li>
        <Link href="/sidebar/erdem-shinjilgeenii-uguulleg">
          ЭРДЭМ ШИНЖИЛГЭЭНИЙ ҮГҮҮЛЭЛ
        </Link>
      </li>
      <li>
        <Link href="/sidebar/mongol-yos-zanshil">МОНГОЛ ЁС ЗАНШИЛ</Link>
      </li>
      <li>
        <Link href="/sidebar/mongol-medleg">МОНГОЛ МЭДЛЭГ</Link>
      </li>
      <li>
        <Link href="/sidebar/eh-hel-erdnesiin-san">ЭХ ХЭЛ ЭРДЭНЭСИЙН САН</Link>
      </li>
      <li>
        <Link href="/sidebar/mongol-aman-soyl">МОНГОЛ АМАН СОЁЛ</Link>
      </li>
      <li>
        <Link href="/sidebar/angli-mongol-zuir-ugiin-san">
          АНГЛИ-МОНГОЛ ЗҮЙР ҮГИЙН САН
        </Link>
      </li>
      <li>
        <Link href="/sidebar/lekts-seminar">ЛЕКЦ СЕМИНАР</Link>
      </li>
    </div>
  );
}
