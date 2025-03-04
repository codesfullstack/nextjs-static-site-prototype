import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import OurBusiness from "./components/our-business/OurBusiness";
import CoreValues from "./components/core-values/CoreValues";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    // <div className={styles.page}>

    // <div >
    //   <Header />
    //   <Carousel />
    //   <OurBusiness />
    //   <CoreValues />
    //   <Services />
    //   <Contact />
    //   <Footer />
    // </div>


    <div className={styles['main-a']}>
      <Header />
      <div id="home">
        <Carousel />
      </div>
      <div id="ourbusiness">
        <OurBusiness />
      </div>
      <CoreValues />
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  
  );
}
