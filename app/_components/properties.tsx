'use client';

import { useState, useEffect } from "react";
import PropertyCard from "@/components/propertyCard/PropertyCard";
import axios from "axios";
import { Button } from "@/components/ui/button";



const ITEMS_PER_PAGE = 9;

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    // Fetch properties from the API
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/get-properties");
        const data = await res.data;
        console.log("data", data);
        setProperties(data);
        setTotalPages(Math.ceil(data.length/ITEMS_PER_PAGE));
        console.log("totalPages", totalPages)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, [totalPages]);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastProperty = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProperty = indexOfLastProperty - ITEMS_PER_PAGE;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);
  console.log(indexOfFirstProperty,indexOfLastProperty, currentProperties )


  if (loading) return (
    <div className="flex w-full h-screen items-center justify-center">
    <p>Loading properties...</p>
    </div>
  )
  if (currentProperties.length === 0) return(<div className="w-full h-[100vh] flex items-center justify-center">
    <p>Oops! properties not found.</p>;
  </div>) 

  return (
    <div className=" w-full flex items-center  flex-col  md:p-12">
      <header className="flex md:w-[70%] md:items-center items-start justify-center flex-col text-center leading-none my-12">

      <h1 className="text-[2rem] font-extrabold mb-2 md:text-center text-start">Explore exclusive places</h1>
      <p className="text-[0.9rem] text-gray-500 font-medium md:text-center text-start">
      Find your perfect property for rent! Whether you&apos;re looking for a cozy cabin in the woods, a luxurious villa with a pool, or anything in between, Totallity Rentals has you covered. Start your search today!
      </p>
      </header>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 2xl:grid-cols-4  gap-5">
        {currentProperties.map((property: any) => (
        
          <PropertyCard
            title={property.title}
            description={property.description}
            location={property.location}
            imageUrl={property.images[0]} 
            price={property.price}
            key={property._id}
            _id={property._id}
            />
           
        ))}
      </div>

        {/* Pagination Controls */}
        <div className="mt-12">
        <Button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1} 
          className="px-4 py-2 mr-2   disabled:opacity-50"
        >
          Previous
        </Button>
        
        <span>{`Page ${currentPage} of ${totalPages}`}</span>

        <Button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className="px-4 py-2 ml-2   disabled:opacity-50"
        >
          Next
        </Button>
      </div>


    </div>
  );
}
