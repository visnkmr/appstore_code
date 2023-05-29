import React from "react";
// import '../../styles/globals.css'
export default function Footer() {
    return (
      <>
        <footer >
          <div className="p-10 dark:bg-gray-900 dark:text-white">
            <div className="">
              <span>
                Copyright © {new Date().getFullYear()} Vishnu N K. All rights reserved.
              </span>
              <span className="float-right">
                <a
                  aria-label="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  href=""
                  className="mr-2"
                >
                  Linkedin
                </a>
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/visnkmr"
                  className="mr-2"
                >
                  Github
                </a>
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://vishnunkmr.t.me/"
                  className="mr-5"
                >
                  Telegram
                </a>
              </span>
            </div>
          </div>
        </footer>
      </>
    );
  }