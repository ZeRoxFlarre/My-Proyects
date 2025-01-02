import Navbar from "../components/Navbar";
import {Roboto} from 'next/font/google'
import "./global.css";

export const metadata = {
  title: "Mi tienda",
  description: "Mi tienda de computadoras",
  keywords: "computadoras, laptops, desktops",
};
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  styles: ['italic','normal'],
  subsets: ['latin'],
})
export default function layout({ children }) {
  return (
    <html>
   <body className = {roboto.className}>

      <Navbar />
   
    {children}
    </body>
    </html>
  );
}
