import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout(props) {
   return( 
   <>
    <Header/>
        {props.children}
    <Footer/>
    </>
   )
}