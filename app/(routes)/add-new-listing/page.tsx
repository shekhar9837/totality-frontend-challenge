'use client'

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { Label  } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Define the schema using Zod for validation
const schema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
  price: z.number().positive("Price must be a positive number"),
  location: z.string().min(3, "Location is required"),
  bedrooms: z.number().positive("Bedrooms must be a positive number"),
  amenities: z.array(z.string()).min(1, "At least one amenity is required"),
  images: z.array(z.string().url("Each image must be a valid URL")).min(1, "At least one image URL is required"),
});

// Infer the type from the schema
type FormData = z.infer<typeof schema>;

const AddNewListing = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      location: "",
      bedrooms: "",
      amenities: [""],
      images: [""],
    },
  });

  // Manage amenities and images dynamically using useFieldArray
  const { fields: amenitiesFields, append: appendAmenity, remove: removeAmenity } = useFieldArray({
    control,
    name: "amenities",
  });

  const { fields: imagesFields, append: appendImage, remove: removeImage } = useFieldArray({
    control,
    name: "images",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("/api/properties", data);
      console.log("Property added:", response.data);
      reset(); // Clear the form after submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center p-12 ">

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Property Title" {...register("title")} />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Property Description"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        {/* Price */}
        <div className="flex gap-5 ">

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              type="number"
              placeholder="Property Price"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && <p className="text-red-500">{errors.price.message}</p>}
          </div>

          <div>
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Input
              id="bedrooms"
              type="number"
              placeholder="Number of Bedrooms"
              {...register("bedrooms", { valueAsNumber: true })}
            />
            {errors.bedrooms && (
              <p className="text-red-500">{errors.bedrooms.message}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="Property Location"
              {...register("location")}
            />
            {errors.location && (
              <p className="text-red-500">{errors.location.message}</p>
            )}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <Label>Amenities</Label>
          {amenitiesFields.map((field, index) => (
            <div key={field.id} className="flex space-x-2 mb-2">
              <Input
                placeholder="Amenity"
                {...register(`amenities.${index}`)}
              />
              <Button type="button" variant="outline" onClick={() => removeAmenity(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => appendAmenity("")}>
            Add Amenity
          </Button>
          {errors.amenities && (
            <p className="text-red-500">{errors.amenities.message}</p>
          )}
        </div>

        {/* Images */}
        <div>
          <Label>Images</Label>
          {imagesFields.map((field, index) => (
            <div key={field.id} className="flex space-x-2 mb-2">
              <Input
                placeholder="Image URL"
                {...register(`images.${index}`)}
              />
              <Button type="button" variant="outline" onClick={() => removeImage(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => appendImage("")}>
            Add Image
          </Button>
          {errors.images && (
            <p className="text-red-500">{errors.images.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button className="px-4 py-2" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default AddNewListing;
