import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ӨӨРИЙН ТУХАЙ ТОВЧ | Бат-Ирээдүй",
  description:
    "МУИС-ийн Монгол судлалын сургуулийн багш, ОХУ-д хэл бичгийн шинжлэх ухааны доктор, эрдэмтэн Жанцангийн Бат-Ирээдvйн албан ёсны цахим хуудас",
  keywords: "batireedui.com, www.batireedui.com",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <div className="page">
        <h1>ӨӨРИЙН ТУХАЙ ТОВЧ</h1>
        <div>
          <p style={{ textAlign: "justify" }}>
            <span style={{ color: "#000a83" }}>
              Монгол Улсын Их Сургуулийн Хэлбичгийн Факультетийг Монгол хэл,
              уран зохиолын багш, судлаач мэргэжлээр төгссөн. Мөн МУИС-ийн Франц
              хэлний орчуулагчийн ангийг оройгоор төгссөн. 2011 оны 4 дүгээр
              сараас МУИС-ийн Монгол судлалын Хүрээлэнгийн Гүйцэтгэх Захиралаар
              ажиллаж байна. The New Media Group-ийн Удирдах Зөвлөлийн гишүүн.
              2008 оноос Монгол Улсын Монгол хэлбичгийн багш нарын үндэсний
              холбооны тэргүүнээр ажиллаж байгаа. Цахим Өртөө Холбооны
              гишүүн.&nbsp;АНУ-ын Маклайн Хэлний Технологийн Институтийн зөвлөх.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
