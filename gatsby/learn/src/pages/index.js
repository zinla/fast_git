import React from "react"
import Header from "../components/widget/header";
import "../styles/common.css";
import "../assets/idex_files/ais8cmj.css";
import "../assets/idex_files/style.min.css";
import Helmet from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet
        title="Alen Andry's Blog"
        meta={[
            { name: "description", content: "Alen的技术教程" },
            { name: "kaywords", content: "技术教程,java,javascript,python,typesript" }
        ]}
        link={[
              {"rel": "icon", 
               "type": "image/png", 
               "href": "favicon.ico"
              }
             ]}
/>
 
    
        <Header text="Home" />
      </div>
      
  )
}
