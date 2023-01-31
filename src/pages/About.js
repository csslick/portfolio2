import React from 'react'
import Nav from "../components/Nav"

export default function About() {
  return (
    <>
      <Nav />
      <div className="container title">
        <h1>About</h1>
        <p>내 소개...</p>
      </div>
      <div 
        className="container" 
        style={{textAlign: 'center', background: '#666'}}>
        <h2>직무능력(Skills)</h2>
        <img src="https://skillicons.dev/icons?i=html,css,js,jquery,nodejs,vscode,git,github,sqlite,bootstrap&perline=3&theme=light" />
        <hr />
        <img src="https://skillicons.dev/icons?i=photoshop,figma&theme=light" />
      </div>

    </>
  )
}
