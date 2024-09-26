import connectDB from "@/config/db";
import { Property } from "@/models/Property";
import { NextApiRequest, NextApiResponse } from "next";



export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === "POST") {
    try {
connectDB()      // Get the data from the request body
      const { title, description, price, location, bedrooms, amenities, images } = req.body;

      // Ensure all fields are present
      if (!title || !description || !price || !location || !bedrooms || !amenities || !images) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Insert the data into the 'properties' collection
      const result = await Property.create({
        title,
        description,
        price,
        location,
        bedrooms,
        amenities,
        images,
        createdAt: new Date(),
      });

      // Return a success response
      res.status(201).json({ message: "Property added successfully",result });
    } catch (error) {
      console.error("Error inserting property:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
