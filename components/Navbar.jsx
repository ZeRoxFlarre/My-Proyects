import React from 'react'
import Link from "next/link";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className='navbar'>
    <h1>Navbar</h1>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/tienda">Tienda</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/alibaba">Post</Link></li>
      </ul>
        </nav>
  )
}

export default Navbar
