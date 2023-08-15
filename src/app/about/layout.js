import Nav from "@/components/nav"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import '../global.css'    

export default function GalleryLayout({ children }) {
    return <section>
        <Nav/>
        {children}
        <ContactForm/>
        <Footer/>
        </section>
  } 