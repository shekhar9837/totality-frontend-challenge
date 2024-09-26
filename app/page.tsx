import { HomePage } from "@/components/HomePage/HomePage";
import PropertyCard from "@/components/propertyCard/PropertyCard";
import Image from "next/image";
import Properties from "./_components/properties";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="px-12 ">
   
   <HomePage/>

        <Properties/>
      
      <Footer />
    </div>
  );
}
