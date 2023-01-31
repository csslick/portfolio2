import React from 'react'
import Nav from "../components/Nav"
import Item from '../components/Item'

export default function Projects() {
  const itemInfo = [
    {
      title: '프로젝트1',
      desc: '설명글...111',
      link: '홈피주소1',
      img: '/images/project01.jpg'
    },
    {
      title: '프로젝트2',
      desc: '설명글...222',
      link: '홈피주소2',
      img: '/images/project02.png'
    },
  ]

  return (
    <div className='container'>
      <Nav />
      <div>Projects</div>
      <section className='itemList'>
        <Item 
          title={itemInfo[0].title} 
          desc={itemInfo[0].desc}
          link={itemInfo[0].link}
          img={itemInfo[0].img}
        />
        <Item 
          title={itemInfo[1].title} 
          desc={itemInfo[1].desc}
          link={itemInfo[1].link}
          img={itemInfo[1].img}
        />
      </section>
    </div>
    
  )
}
