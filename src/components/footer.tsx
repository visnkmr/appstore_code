import React from "react";
// import '../../styles/globals.css'
export default function Footer() {
    return (
      <>
        <footer>
          <div className="m-10">
            <div className="">
              <span>
                Copyright © {new Date().getFullYear()}. All rights are reserved
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
                  className="mr-5"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
        </footer>
      </>
    );
  }