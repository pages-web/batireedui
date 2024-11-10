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
          <a href="http://gerege.biz/" target="_blank" />
          <div className="gerege-agency">
            <a href="http://gerege.biz/" target="_blank">
              <div className="gerege-info">
                <span className="gerege-icon-code" />
                by
              </div>
            </a>
            <a
              href="http://gerege.agency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="gerege-icon-char-g ml-2" />
              <span className="gerege-icon-char-e ml-2" />
              <span className="gerege-icon-char-r ml-2" />
              <span className="gerege-icon-char-e ml-2" />
              <span className="gerege-icon-char-g ml-2" />
              <span className="gerege-icon-char-e ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
