// import { useState } from 'react';
import React from "react"
import my_img from "../../assets/idex_files/images/design.png";



export default function IndexContent() {
  return (
    
         <div className="module with-border hosts">
               <div className="inside">
                 <h2>
                   About Me
                 </h2>
                    <div className="host">
                  <h3>阿卜杜艾尼·图尔荪</h3>
                  <h3> Engilsh Name:Alen Andry</h3>
                        <h3>学校：西安电子科技大学</h3><li>专业：智能科学与技术</li>
                        <img src={my_img}
                        alt="Alen wears glasses and smiles widely at the camera"/>
                        <ul className="with-dashes">
                        <li>前端开发者<a href="./fontend.html"> 前端开发经验</a></li>
                        <li>China , XiAn</li>
                        <li>参赛经验
                        <li>挑战杯</li>
                        <li>计算机设计大赛</li>
                        <li>星火杯</li>
                        </li>
                        </ul>
                    </div>
        </div>
        </div>
                                                                        
    
    )
 
}





