import connectDB from "@/config/db";
import { Property } from "@/models/Property";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === "GET") {
    try {
        connectDB()      // Get the data from the request body

      // Fetch all properties from the 'properties' collection
      const properties = await Property.find({})

      // Send the properties as the response
      res.status(200).json(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
