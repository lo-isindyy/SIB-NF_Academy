import Contact from "../shared/Contact";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Hero from "../shared/Hero";
import ProductList from "../shared/ProductList";
import Team from "../shared/Team";

export default function Home(){
    return (
        <>
            {/* Header */}
            <Header/>


            {/* Hero */}
            <Hero/>


            {/* Product List */}
            <ProductList/>


            {/* Team */}
            <Team/>


            {/* Contact */}
            <Contact/>


            {/* Footer */}
            <Footer/>
        </>
    )
}