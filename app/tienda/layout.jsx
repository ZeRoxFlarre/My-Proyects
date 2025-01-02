import React from 'react'
import Link from 'next/link'


export const metadata = {
    title: "Tienda",
    description: "Pagina de la tienda",
    }
function layout({children}) {
  return (
    <nav>
       <h3>Seccion Tienda</h3>
       <ul>
         <li> <Link href="/tienda/categorias">Categorias</Link></li>
         <li>  <Link href="/tienda/categorias/computadora">Computadora</Link></li>
         </ul>
    <div>
      {children}
    </div>
    </nav>
  )
}

export default layout
