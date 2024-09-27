"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  
  {
    id: 4,
    name: "Pattie Gonia",
    designation: "The Travler",
    image:      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",

    },
  {
    id: 5,
    name: "Vicky Bennison",
    designation: "Mountain Guy",
    image:"/images/smile2.avif"  
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:'/images/smile1.avif'
  },
];

export function AnimatedTooltipHomePage() {
  return (
    <div className="flex flex-row items-center justify-center mb-10">
      <AnimatedTooltip items={people}  />
    </div>
  );
}
