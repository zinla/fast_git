import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Card from '../components/Card';
import Cell from '../components/Cell';
import Section from '../components/Section';
import Wave from '../components/Wave';

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const staticdata = {
  cells: [
    {title: 'aa', image:''},
    {title: 'aa', image:''},
    {title: 'aa', image:''},
  ]
}

const js = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>我的 <br />学习过程</h1>
        <p>在编程中体验纯粹的快乐</p>
        <Link className="xbutton" to="/page-2/">进入学习</Link>
        <div className="Logos">
        <Link to="./python"><img src='/images/python.png' width="50" /></Link>
        <Link to="/"><img src='/images/java-coffee-cup-logo.png' width="50" /></Link>
        <Link to="./js"><img src='/images/javascript-logo.png' width="50" /></Link>
        <Link to="/"><img src='/images/logo-framer.png' width="50" /></Link>
        <Link to="/"><img src='/images/logo-react.png' width="50" /></Link>
        <Link to="/"><img src='/images/flutter.png' width="50" /></Link>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>编程语言</h2>
      <div className="CardGroup">
          <Link to="./pythonds">
          <Card 
          title="python数据结构"
          text="10 sections"
          image='/images/wallpaper.jpg' 
          />
          </Link>
          <Link to="./python">
          <Card 
          title="python"
          text="12 sections"
          image='/images/wallpaper2.jpg'
          />
          </Link>

          <Link to="js">
          <Card 
          title="javascript"
          text="5 sections"
          image='/images/wallpaper3.jpg' />
          </Link>

          <Link to="./python">
          <Card 
          title="Flutter"
          text="10 sections"
          image='/images/wallpaper4.jpg' />
          </Link>
          <Link to="./python">
          
          <Card 
          title="Flutter"
          text="10 sections"
          image='/images/wallpaper4.jpg' />
          </Link>
          <Link to="./python">

          <Card 
          title="Flutter"
          text="10 sections"
          image='/images/wallpaper4.jpg' />
          </Link>
          <Link to="./python">

          <Card 
          title="Flutter"
          text="10 sections"
          image='/images/wallpaper4.jpg' />
          </Link>

          <Link to="./python">
          <Card 
          title="Flutter"
          text="10 sections"
          image='/images/wallpaper4.jpg' />
          </Link>


      
        
      </div>
     
    </div>
    <h2 className="webtitle">Web前端</h2><br />

    <div className="WebCardGroup">
      
      <Card 
          title="HTML"
          text="10 sections"
          image='/images/wallpaper4.jpg' />
      <Card 
          title="CSS"
          text="10 sections"
          image='/images/wallpaper4.jpg'
           />
      <Card 
          title="CSS"
          text="10 sections"
          image='/images/wallpaper4.jpg'
           />
      <Card 
          title="CSS"
          text="10 sections"
          image='/images/wallpaper4.jpg'
           />
      <Card 
          title="CSS"
          text="10 sections"
          image='/images/wallpaper4.jpg'
           />
      <Card 
          title="CSS"
          text="10 sections"
          image='/images/wallpaper4.jpg'
           />
      <Card 
          title="CSS"
          text="10 sections"
          image='/images/wallpaper4.jpg'
           />
      <Card 
          title="CSS"
          text="10 sections"
          image='/images/wallpaper4.jpg'
           />
      
      </div>
    <Section
      image='/images/wallpaper2.jpg'
      logo='/images/logo-react.png'
      title="本网站是由react开发"
      text="记录我的学习过程"
     />
     <SectionCaption>学习react</SectionCaption>
     <SectionCellGroup>
      {staticdata.cells.map((cell,key) => (
        <Cell key={key}
          title={cell.title}
          image={cell.image} />
      ))}
     </SectionCellGroup>
  </div>
)

export default js
