import connectDB from "@/config/db";
import { Property } from "@/models/Property";
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose"; // Import mongoose

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  await connectDB();

  switch (method) {
    case "GET":
      try {
        // Check if id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id as string)) {
          return res.status(400).json({ message: "Invalid property ID" });
        }

        const property = await Property.findById(id);
        if (!property) {
          return res.status(404).json({ message: "Property not found." });
        }
        res.status(200).json(property);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error." });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
