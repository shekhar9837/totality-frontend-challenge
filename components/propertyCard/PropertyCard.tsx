import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  title: string;
  description: string;
  price: number | null;
  imageUrl: string;
  location:string;
  _id:string;
}

export default function PropertyCard({
  title,
  description,
  price ,
  imageUrl,
  location,
  _id,
}: PropertyCardProps) {
  const formatPrice = (price: number | null) => {
    if (price === null || isNaN(price)) return "Price on request";
    return `$${price.toLocaleString()}`;
  }

  return (
    <Card className="w-[20rem] max-w-xs mx-auto overflow-hidden">
      <div className="relative h-36">
        <Image 
          src={imageUrl} 
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="p-3">
        <CardTitle className="text-lg font-bold line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{description}</p>
        <div className="text-lg font-bold text-primary mb-2">
          {formatPrice(price)}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-3">
        <Button variant="outline" size="sm" className="flex items-center text-xs">
          <MapPin className="w-3 h-3 mr-1" />
          {location}
        </Button>
        <Link href={`property/${_id}`}>

        <Button size="sm" className="text-xs">Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}