import Footer from "../components/Footer";
import Contact from "../components/Contact";
import PageBanner from "../components/PageBanner";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import Preloader from "../components/Preloader";
import SearchArea from "../components/SearchArea";
import ScrollTop from "../components/ScrollTop";

function ContactPage() {
  return (
    <div>
      {/* <Preloader /> */}

      <Header />

      <Sidebar />

      <SearchArea />

      <PageBanner />

      <Contact />

      <Map />

      <Footer />

      <ScrollTop />
    </div>
  );
}

export default ContactPage;
