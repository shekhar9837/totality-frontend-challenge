'use client'

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Bath, BedSingle } from "lucide-react";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";
import toast from "react-hot-toast";

type Property = {
  _id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  bedrooms: number;
  amenities: string[];
  images: string[];
};

const Page = ({ params }: { params: { id: string } }) => {
  const [property, setProperty] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartItem, setCartItem] = useState<Property[]>([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Fetch properties from the API
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/get-properties");
        const data = await res.data;
        // @ts-expect-error: Data type from the API doesn't match the expected TypeScript type
        const filtered = await data.filter((data: Property) => data._id === params.id);
        console.log(filtered);
        setProperty(filtered);
        setCartItem(filtered);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, [params.id]);

  const handleAddToCart = () => {
    if (cartItem.length > 0) {
      addToCart(cartItem[0]);  // Assuming `cartItem` is an array and you want to add the first property
      toast("Item added to cart");
    }
  };

  if (loading)
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <p>Loading properties...</p>
      </div>
    );
  if (property.length === 0) return <p>No property found.</p>;

  return (
    <div className="   mx-4">
      <div className="p-4 flex flex-col items-center bg-zinc-200 rounded-lg">
        {property.map((property: Property) => (
          <div key={property._id}>
            <div className="flex flex-col justify-center md:flex-row md:space-x-6">
              <div className="md:w-1/2">
                <h1 className="text-[2rem] font-bold">{property.title}</h1>
                <div className="flex gap-5 items-center">
                  <p className="text-[1.2rem]">${property.price},</p>
                  <p className="text-[1.2rem]">{property.location}</p>
                </div>
                <p className="text-[1.2rem] mt-4">{property.description}</p>
                <p className="border font-bold text-[1rem] mt-4 flex w-fit items-center justify-center bg-red- px-6 py-2 rounded-xl">
                  <BedSingle />
                  Bedrooms: {property.bedrooms}
                </p>
                <h3 className="mt-4 font-semibold">Amenities</h3>
                <div className="mt-2 flex items-center flex-wrap gap-4">
                  {property.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="border flex items-center justify-center px-6 py-2 rounded-xl">
                      <Bath />
                      <p className="font-bold">{amenity}</p>
                    </div>
                  ))}
                </div>

                <div className="flex mt-8 md:items-center items-start gap-4 md:flex-row flex-col mb-8">
                  <Link href="/cart" className="py-4 text-sm font-bold text-white uppercase bg-teal-500 rounded-sm px-14 hover:bg-teal-600">
                    Go to Cart
                  </Link>
                  <button
                    onClick={handleAddToCart}
                    className="py-4 text-sm font-bold text-white uppercase bg-teal-500 rounded-sm px-14 hover:bg-teal-600"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 mb-4 md:px-12">
                <Image
                  src={property.images[0]}
                  alt="Property main image"
                  width={600}
                  height={300}
                  className="rounded-lg object-cover w-full h-[18rem]"
                />
                <div className="grid grid-cols-4 gap-4 mt-4">
                {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={property.images[0]}
                  alt={'Property'}
                  width={150}
                  height={100}
                  className="rounded-lg object-cover w-full"
                />
              ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
