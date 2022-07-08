import React from "react"

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="nav-logo" src="./logo192.png" alt=""/>
        <ul className="nav-items">
          <li>Docs</li>
          <li>Tutorial</li>
          <li>Blog</li>
        </ul>
      </nav>
    </header>
  )
}
