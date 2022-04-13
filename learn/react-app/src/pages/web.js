import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import '../layouts/web.css'





const Web = () => (
  <div className="webpage">
  
   <div className="webcards">
   <h2 className="pl">Program language</h2>
      <Link to="./pythonds">
      <Card 
        title="python数据结构"
        text="10 sections"
        image='/images/wallpaper.jpg' 
        />
        </Link>
      <Card 
        title="python"
        text="12 sections"
        image='/images/wallpaper2.jpg'
        />
      <Card 
        title="javascript"
        text="5 sections"
        image='/images/wallpaper3.jpg' />
      <Card 
        title="Flutter"
        text="10 sections"
        image='/images/wallpaper4.jpg' />
      <Card 
        title="Flutter"
        text="10 sections"
        image='/images/wallpaper4.jpg' />
      <Card 
        title="Flutter"
        text="10 sections"
        image='/images/wallpaper4.jpg' />
      <Card 
        title="Flutter"
        text="10 sections"
        image='/images/wallpaper4.jpg' />
      <Card 
        title="Flutter"
        text="10 sections"
        image='/images/wallpaper4.jpg' />

    
</div> 
    </div>
   


)

export default Web
