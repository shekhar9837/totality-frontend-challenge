import { HomePage } from "@/components/HomePage/HomePage";
import { Navbar } from "@/components/navbar/Navbar";
import PropertyCard from "@/components/propertyCard/PropertyCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-12 ">
   
   <HomePage/>

    <div className="grid grid-cols-3 items-center ">


   <PropertyCard 
        title="Luxurious Beachfront Villa"
        description="Experience the ultimate in coastal living with this stunning beachfront villa."
        price={1500000}
        imageUrl="/images/test.jpeg"
      />
   <PropertyCard 
        title="Luxurious Beachfront Villa"
        description="Experience the ultimate in coastal living with this stunning beachfront villa."
        price={1500000}
        imageUrl="/images/test.jpeg"
      />
   <PropertyCard 
        title="Luxurious Beachfront Villa"
        description="Experience the ultimate in coastal living with this stunning beachfront villa."
        price={1500000}
        imageUrl="/images/test.jpeg"
      />
   <PropertyCard 
        title="Luxurious Beachfront Villa"
        description="Experience the ultimate in coastal living with this stunning beachfront villa."
        price={1500000}
        imageUrl="/images/test.jpeg"
      />
   <PropertyCard 
        title="Luxurious Beachfront Villa"
        description="Experience the ultimate in coastal living with this stunning beachfront villa."
        price={1500000}
        imageUrl="/images/test.jpeg"
      />
          </div>
    </div>
  );
}
