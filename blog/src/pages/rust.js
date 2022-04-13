import React from "react"
// import { Link } from "gatsby"
import Header from "../components/widget/header";
import watch from "../assets/idex_files/images/watch.png";
export default function Rust() {
  return (
    <div>
        <Header text="Home" />

      <main className="post">
          <h1 className="rust">Rust 开发经验分享</h1>
          <article>
            <a href="./iced_gui.html">
                <h2>Rust iced 开发GUI</h2>
                <img src={watch} alt="watch"/>
            </a>

          </article>
      </main>
        
  </div>
  )
}
