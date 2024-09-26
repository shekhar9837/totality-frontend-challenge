// pages/properties/[id].tsx

'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { use } from "react";
import { Bath } from "lucide-react";
import { Button } from "@/components/ui/button";


const Page = ({ params }: { params: { id: string } }) => {

  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch properties from the API
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/get-properties");
        const data = await res.data;
        const filtered = await data.filter((data:any) => data._id === params.id);
        console.log(filtered);
        setProperty(filtered);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);
  

  if (loading) return (
    <div className="flex w-full h-screen items-center justify-center">
    <p>Loading properties...</p>
    </div>
  )
  if (!property) return <p>No property found.</p>;

  return (
    <div className="container mx-auto p-12 bg-zinc-200 rounded-xl">
      {property.map((property:any)=> <div key={property._id}>
      <div className="flex flex-col justify-center md:flex-row md:space-x-6 ">
        
        <div className="md:w-1/2 ">
        <h1 className="text-[2rem] font-bold ">{property.title}</h1>
        <div className="flex gap-5 items-center ">

          <p className=" text-[1.2rem]"> ${property.price},</p>
          <p className=" text-[1.2rem]"> {property.location}</p>
        </div>
          {/* <h2 className="text-xl font-semibold">Details</h2> */}
          {/* <h3 className="mt-4 font-semibold">Description</h3> */}
          <p className="text-[1.2rem] mt-4 ">{property.description}</p>
          {/* <div className="flex items-center justify-center bg-red-200 px-6 py-2 rounded-xl "> */}
          <p className="border font-bold text-[1rem] mt-4 flex  w-fit items-center justify-center bg-red- px-6 py-2 rounded-xl ">Bedrooms: {property.bedrooms}</p>
            {/* </div> */}
          <h3 className="mt-4 font-semibold">Amenities</h3>
          <div className="mt-2 flex flex-wrap gap-4">
            {property.amenities.map((amenity:any, index:any) => (
              <div className="border flex  items-center justify-center  px-6 py-2 rounded-xl ">
                <Bath />
                <p className="font-bold" key={index}>{amenity}</p>
              </div>
            ))}
          </div>
          <Button className="mt-8 border text-white py-2 px-4 rounded">Book Now</Button>
        </div>
        <div className="md:w-1/2 mb-4 px-12">
        {/* <div className="grid gap-4 mb-8"> */}
            <Image
              src={property.images[0]}
              alt="Property main image"
              width={600}
              height={300}
              className="rounded-xl object-cover w-full h-[18rem]"
            />
            <div className="grid grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={property.images[0]}
                  alt={`Property image`}
                  width={150}
                  height={100}
                  className="rounded-xl object-cover w-full"
                />
              ))}
            </div>
          {/* </div */}
        </div>

        {/* <div>
          <Card>
            <CardHeader>
              <CardTitle>$500 / night</CardTitle>
              <CardDescription>4.9 ★ (120 reviews)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor="check-in" className="text-sm font-medium">
                      Check-in
                    </label>
                    <Input id="check-in" type="date" />
                  </div>
                  <div>
                    <label htmlFor="check-out" className="text-sm font-medium">
                      Check-out
                    </label>
                    <Input id="check-out" type="date" />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="text-sm font-medium">
                    Guests
                  </label>
                  <Input id="guests" type="number" min="1" max="8" defaultValue="2" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Now</Button>
            </CardFooter>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Host Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=60&width=60&text=Host"
                  alt="Host"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">Superhost · 5 years hosting</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Contact Host
              </Button>
            </CardFooter>
          </Card>
        </div> */}
      </div>
        </div>
        )}
      
    </div>
  );
};

export default Page;
