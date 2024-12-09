import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import ProductDescription from "./components/ProductDescription";
import RelatedProduct from "./components/RelatedProduct";
import SuggestedProducts from "./components/SuggestedProducts";
import TakeCareSection from "./components/TakeCareSection";
import SignupSection from "./components/SignupSection";
import Footer from "./components/Footer";
// import Home from "../app/layout";


export default function Home() {
  return (
    <div>
      {/* <Home/> */}
    <Header />
    <Breadcrumb />
    <ProductDescription/>
    <RelatedProduct/>
    <SuggestedProducts/>
    <TakeCareSection/>
    <SignupSection/>
    <Footer/>
  
    </div>
  );
}
