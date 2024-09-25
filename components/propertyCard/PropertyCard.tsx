import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

interface PropertyCardProps {
  title: string;
  description: string;
  price: number | null;
  imageUrl: string;
}

export default function PropertyCard({
  title = "Cozy Downtown Apartment",
  description = "A beautiful, modern apartment in the heart of the city.",
  price = null,
  imageUrl = "/placeholder.svg?height=150&width=250"
}: PropertyCardProps) {
  const formatPrice = (price: number | null) => {
    if (price === null || isNaN(price)) return "Price on request";
    return `$${price.toLocaleString()}`;
  }

  return (
    <Card className="w-full max-w-xs mx-auto overflow-hidden">
      <div className="relative h-36">
        <img 
          src={imageUrl} 
          alt={title}
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
          Location
        </Button>
        <Button size="sm" className="text-xs">Book Now</Button>
      </CardFooter>
    </Card>
  )
}