import React from "react";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";

export default function Footer() {
  return (
    <div className="fixed">
      <div id="footer">
        <div className="left uppercase small">
          © 2011. Бүх эрх хуулиар хамгаалагдсан.
        </div>
        <div className="right uppercase small">
          <Link href="http://gerege.biz/" target="_blank" />
          <div className="gerege-agency">
            <Link href="http://gerege.biz/" target="_blank">
              <div className="gerege-info">
                <span className="gerege-icon-code" />
                by
              </div>
            </Link>
            <Link href="http://gerege.agency/" target="_blank">
              <span className="gerege-icon-char-g" />
              <span className="gerege-icon-char-e" />
              <span className="gerege-icon-char-r" />
              <span className="gerege-icon-char-e" />
              <span className="gerege-icon-char-g" />
              <span className="gerege-icon-char-e" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
