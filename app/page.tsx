import Banner from "./_components/Banner/Banner";
import Banner2 from "./_components/Banner/Banner2";
import Footer from "./_components/Footer/Footer";
import Hero from "./_components/Hero/Hero";
import Services from "./_components/Services/Services";
import Subscribe from "./_components/Subscribe/Subscribe";



export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
  <Hero />
  <Services />
  <Subscribe />
  <Banner />
  <Banner2 />
  <Footer />
    </main>
  );
}
