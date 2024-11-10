import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <h1>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 65, height: 16 }}
        >
          ӨЛЗИЙТ
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 69, height: 16 }}
        >
          НАЙМАН
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 96, height: 16 }}
        >
          ТЭМДЭГИЙН
        </span>
        <span
          className="custom-text"
          style={{ display: "inline-block", width: 40, height: 16 }}
        >
          УЧИР
        </span>
      </h1>

      <div className="post_content_full">
        <p style={{ textAlign: "justify" }}>
          <span>
            <Image
              width={275}
              height={200}
              src="/images/ypon/images5.jpg"
              alt=""
              style={{
                float: "left",
                display: "inline",
                width: 275,
                marginRight: 10,
              }}
            />
            &quot;
          </span>
          ... өлзийт найман тэмдэг буюу найман тахил ярайж байна. Нисванисын
          халууныг буюу элдэв нүгэлт хүслийн шуналыг дарах бэлгэдэл болсон
          цагаан шүхэр, цэвэр алтаар цутгаж хийсэн бодь гөрөөсний дүрс, тус
          жаргалангийн голд амьдрах загасны дүрс, яруу дуугаа арван зүгт түгээгч
          цагаан лавай гэгч дунгар, бохир муухайгаас хагацсан цагаан бадмалинхуа
          хүслийн эрдэнээр төгс дүүрэн бумба, аз жаргалын төгсгөлгүй билэгдэл
          өлзий утса балбэ, ялгуусны чимэг болох жалцан, мянган хигээст номын
          хоро энэ наймыг өлзийт тэмдэг болгон шүтээнийг чимэглэжээ.&quot;&nbsp;
          <em>Л.Түдэв, &quot;Оройгүй сүм&quot;</em>
        </p>
      </div>
      <div className="post_info_full left">
        Ангилал:
        <a href="/sidebar/yum-gedeg-uchirtai">ЮМ ГЭДЭГ УЧИРТАЙ</a>
      </div>
      <div className="post_info_full right">2012.04.03</div>
      <div className="clear" />
    </div>
  );
}
