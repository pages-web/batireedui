import React from "react";

export default function page() {
  return (
    <div id="content" style={{ display: "block" }}>
      <div className="page">
        <h1>ХОЛБОО БАРИХ</h1>
        <p>Жанцангийн Бат-Ирээдүй</p>
        <p>Шуудангийн хайрцаг 189</p>
        <p>Шуудангийн салбар 210646</p>
        <p>Улаанбаатар 14201</p>
        <p>МОНГОЛ УЛС</p>
        <p>www.twitter.com/iregedui</p>
        <p>www.facebook.com/iregedui</p>
        <div className="form_embed">
          <div id="form_container_1">
            <form
              encType="multipart/form-data"
              action="/admin/forms/submission/1/"
              method="post"
              id="form_id_1"
            >
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                defaultValue="xiUA2kMin0ksYRZ7CStPBc6dzHjyQD1i"
              />
              <input
                type="text"
                name="gerege"
                defaultValue=""
                style={{ display: "none" }}
              />
              <h3>Холбоо Барих</h3>
              <div className="errors"></div>
              <p>
                <label>Нэр</label>
              </p>
              <div className="widget">
                <input
                  type="text"
                  name="form_field_1"
                  fdprocessedid="da5qyy5"
                />
              </div>
              <p></p>
              <p>
                <label>Цахим шуудан</label>
              </p>
              <div className="widget">
                <input type="text" name="form_field_2" fdprocessedid="ym2xn" />
              </div>
              <p></p>
              <p>
                <label>Утас</label>
              </p>
              <div className="widget">
                <input type="text" name="form_field_3" fdprocessedid="jbpi2t" />
              </div>
              <p></p>
              <p>
                <label>Текст оруулах хэсэг</label>
                <textarea
                  className="widget"
                  name="form_field_4"
                  defaultValue={""}
                />
              </p>
              <p>
                <button type="submit" fdprocessedid="haxs4o">
                  Илгээх
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
