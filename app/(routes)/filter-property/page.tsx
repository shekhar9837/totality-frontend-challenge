'use client';

import PropertyCard from '@/components/propertyCard/PropertyCard';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const FilterProperties = () => {
  // States for the filters
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [amenities, setAmenities] = useState({
    pool: false,
    gym: false,
    parking: false,
  });

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch properties from the API
    const fetchProperties = async () => {
      
      try {
        const res = await axios.get("/api/get-properties");
        const data = await res.data;
        console.log("data", data);
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  // Filter properties based on form input
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = properties.filter((property: any) => {
      const matchesLocation = location ? property.location.includes(location) : true;
      console.log("loactionm",matchesLocation)
      const matchesPrice =
        (minPrice ? property.price >= parseInt(minPrice) : true) &&
        (maxPrice ? property.price <= parseInt(maxPrice) : true);
      const matchesBedrooms = bedrooms ? property.bedrooms === parseInt(bedrooms) : true;
      const matchesAmenities = Object.keys(amenities).every(
        (amenity:any) => !amenities[amenity] || property.amenities.includes(amenity)
      );

      return matchesLocation ||  (matchesPrice && matchesBedrooms && matchesAmenities)
    });
    setFilteredProperties(filtered);
  };

  // Handle filter changes for amenities
  const handleAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmenities({ ...amenities, [e.target.name]: e.target.checked });
  };

  return (
    <div className='px-12 flex flex-col items-center  '>
    <div className="container  px-4 md:w-[60%]">
      <h1 className="text-2xl font-bold mb-5">Filter Properties</h1>
      <form onSubmit={handleSearch}>
        <div className="mb-5">
          {/* Location Filter */}
          <label className="block mb-2 font-medium">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border"
          >
            {/* <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="San Francisco">San Francisco</option> */}
            {/* Add more locations as needed */}
          </input>
        </div>

        <div className="flex gap-4 mb-5">
          {/* Price Range Filter */}
          <div className="flex-1">
            <label className="block mb-2 font-medium">Min Price</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min Price"
              className="w-full p-2 border"
            />
          </div>

          <div className="flex-1">
            <label className="block mb-2 font-medium">Max Price</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max Price"
              className="w-full p-2 border"
            />
          </div>
        </div>

        <div className="mb-5">
          {/* Bedrooms Filter */}
          <label className="block mb-2 font-medium">Number of Bedrooms</label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full p-2 border"
          >
            <option value="">Select Bedrooms</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4 Bedrooms</option>
          </select>
        </div>

        <div className="mb-5">
          {/* Amenities Filter */}
          <h3 className="font-medium">Amenities</h3>
          <label>
            <input
              type="checkbox"
              name="pool"
              checked={amenities.pool}
              onChange={handleAmenitiesChange}
              className="mr-2"
            />
            Pool
          </label>
          <label className="ml-4">
            <input
              type="checkbox"
              name="gym"
              checked={amenities.gym}
              onChange={handleAmenitiesChange}
              className="mr-2"
            />
            Gym
          </label>
          <label className="ml-4">
            <input
              type="checkbox"
              name="parking"
              checked={amenities.parking}
              onChange={handleAmenitiesChange}
              className="mr-2"
            />
            Parking
          </label>
        </div>

        <Button type="submit">Search</Button>
      </form>

      
    </div>
    <div className='flex flex-col   '>
    <h2 className="text-xl font-bold mb-4 mt-8 ">Filtered Properties</h2>
    <div className="grid md:grid-cols-3 sm:grid-cols-1 2xl:grid-cols-4 place-items-center gap-4">
    {filteredProperties.length > 0 ? (
          filteredProperties.map((property:any) => (
            <PropertyCard
            title={property.title}
            description={property.description}
            location={property.location}
            imageUrl={property.images[0]} 
            price={property.price}
            key={property._id}
            _id={property._id}
            />
          ))
        ) : (
          <div className='flex place-center   h-[100vh] '>
          <p className='text-center'>No properties match the selected filters.</p>
            </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default FilterProperties;
